"use client";

import { useState, useRef, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import { assessmentThemes, assessmentTypes } from "@/lib/assessment-data";
import { calculateScores } from "@/lib/assessment-data";

function AssessmentStartInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeId = searchParams.get("type") || "iam";
  const selectedType = assessmentTypes.find((t) => t.id === typeId) || assessmentTypes[0];
  // For IAM type, resolve themes from imported assessmentThemes; others use their own themes
  const activeThemes = selectedType.themes || assessmentThemes;
  const assessmentTitle = selectedType.title;

  const [step, setStep] = useState(0); // 0 = theme 0 questions, 4 = theme 4, 5 = contact gate
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: "", company: "", role: "", email: "", consent: false });
  const [contactErrors, setContactErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sectionInsights, setSectionInsights] = useState({}); // keyed by theme id
  const fetchingInsight = useRef(new Set());

  const totalThemes = activeThemes.length;
  const currentTheme = step < totalThemes ? activeThemes[step] : null;
  const currentQuestion = currentTheme ? currentTheme.questions[questionIndex] : null;

  // Calculate overall progress
  const totalQuestions = activeThemes.reduce((acc, t) => acc + t.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / totalQuestions) * 100);

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleCheckbox = (questionId, optionIndex, checked) => {
    setAnswers((prev) => {
      const current = Array.isArray(prev[questionId]) ? prev[questionId] : [];
      if (checked) return { ...prev, [questionId]: [...current, optionIndex] };
      return { ...prev, [questionId]: current.filter((i) => i !== optionIndex) };
    });
  };

  const canProceed = () => {
    if (!currentQuestion) return false;
    const ans = answers[currentQuestion.id];
    if (currentQuestion.type === "radio") return ans !== undefined;
    if (currentQuestion.type === "scale") return ans !== undefined;
    if (currentQuestion.type === "checkbox") return Array.isArray(ans) && ans.length > 0;
    return false;
  };

  const fetchSectionInsight = (theme, sectionAnswers) => {
    if (fetchingInsight.current.has(theme.id)) return;
    fetchingInsight.current.add(theme.id);
    setSectionInsights((prev) => ({ ...prev, [theme.id]: "loading" }));
    fetch("/api/ai/insight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sectionTitle: theme.title, answers: sectionAnswers }),
    })
      .then((r) => r.json())
      .then(({ insight }) => {
        if (insight) setSectionInsights((prev) => ({ ...prev, [theme.id]: insight }));
        else setSectionInsights((prev) => { const n = { ...prev }; delete n[theme.id]; return n; });
      })
      .catch(() => {
        setSectionInsights((prev) => { const n = { ...prev }; delete n[theme.id]; return n; });
      });
  };

  const nextQuestion = () => {
    if (questionIndex < currentTheme.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Section complete — fire insight fetch
      const sectionAnswers = {};
      currentTheme.questions.forEach((q) => { if (answers[q.id] !== undefined) sectionAnswers[q.id] = answers[q.id]; });
      fetchSectionInsight(currentTheme, sectionAnswers);

      // Move to next theme
      if (step < totalThemes - 1) {
        setStep(step + 1);
        setQuestionIndex(0);
      } else {
        // All themes done, show contact gate
        setStep(totalThemes);
      }
    }
  };

  const prevQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else if (step > 0) {
      const prevTheme = activeThemes[step - 1];
      setStep(step - 1);
      setQuestionIndex(prevTheme.questions.length - 1);
    }
  };

  const validateContact = () => {
    const errors = {};
    if (!contact.name.trim()) errors.name = "Required";
    if (!contact.company.trim()) errors.company = "Required";
    if (!contact.role.trim()) errors.role = "Required";
    if (!contact.email.trim() || !contact.email.includes("@")) errors.email = "Valid email required";
    if (!contact.consent) errors.consent = "Please confirm you agree to our privacy policy";
    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateContact()) return;
    setSubmitting(true);
    const scores = calculateScores(answers, activeThemes);
    // Store in sessionStorage for results page (always, so results work even if API fails)
    sessionStorage.setItem("k2k-assessment-results", JSON.stringify({ scores, contact, assessmentType: typeId }));
    // Push to CRM + notify team (fire-and-forget, don't block the user)
    fetch("/api/assessment/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact, scores, assessmentType: typeId }),
    }).catch(() => {}); // graceful degradation
    router.push("/assessment/results");
  };

  // Contact gate screen
  if (step === totalThemes) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
        <div className="max-w-lg w-full mx-auto px-4 py-12">
          <div className="rounded-2xl p-8 border shadow-xl" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <CheckCircle size={40} className="mb-4" style={{ color: "var(--k2k-teal)" }} />
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
              Almost done!
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
              Enter your details to receive your personalised maturity score and recommendations.
            </p>
            <div className="space-y-4">
              {[
                { key: "name", label: "Full name", type: "text", placeholder: "Jane Smith" },
                { key: "company", label: "Company", type: "text", placeholder: "Acme Ltd" },
                { key: "role", label: "Job title", type: "text", placeholder: "Head of IT Security" },
                { key: "email", label: "Work email", type: "email", placeholder: "jane@acme.com" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={contact[field.key]}
                    onChange={(e) => setContact((prev) => ({ ...prev, [field.key]: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none"
                    style={{
                      background: "var(--background)",
                      borderColor: contactErrors[field.key] ? "#ef4444" : "var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                  {contactErrors[field.key] && (
                    <p className="text-xs mt-1 text-red-500">{contactErrors[field.key]}</p>
                  )}
                </div>
              ))}
            </div>
            {/* GDPR consent */}
            <label className="flex items-start gap-3 cursor-pointer mt-2">
              <input
                type="checkbox"
                checked={contact.consent}
                onChange={(e) => setContact((prev) => ({ ...prev, consent: e.target.checked }))}
                className="mt-0.5 w-4 h-4 rounded accent-teal-500 flex-shrink-0"
              />
              <span className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                I agree to Infosec K2K processing my details to deliver my assessment results and follow up, in line with their Privacy Policy.
              </span>
            </label>
            {contactErrors.consent && (
              <p className="text-xs text-red-500 mt-1">{contactErrors.consent}</p>
            )}

            <button onClick={handleSubmit} disabled={submitting}
              className="btn-primary w-full py-3 rounded-xl font-semibold mt-4 flex items-center justify-center gap-2 disabled:opacity-60">
              {submitting ? "Preparing results..." : "See my results"} {!submitting && <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const totalQuestionsInTheme = currentTheme?.questions.length || 0;

  // Helper: get the display label for a radio option (handles both {label,score} objects and plain strings)
  const getOptionLabel = (opt) => (typeof opt === "object" && opt !== null ? opt.label : opt);
  // Helper: get the stored score for a radio option
  // For {label,score} objects (IAM): use opt.score
  // For plain strings (non-IAM): use 4 - index (first option = 4, last = 1)
  const getOptionScore = (opt, index) => {
    if (typeof opt === "object" && opt !== null && opt.score !== undefined) return opt.score;
    return 4 - index;
  };

  return (
    <div className="pt-16 min-h-screen" style={{ background: "var(--background)" }}>
      {/* Top progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40" style={{ background: "var(--card-bg)", borderBottom: `1px solid var(--border)` }}>
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
              {currentTheme?.title}
            </span>
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              {step + 1} of {totalThemes} domains · {progressPct}% complete
            </span>
          </div>
          {/* Theme dots */}
          <div className="flex gap-1.5 mb-2">
            {activeThemes.map((t, i) => (
              <div key={t.id} className="flex-1 h-1.5 rounded-full transition-all"
                style={{
                  background: i < step ? "var(--k2k-teal)" : i === step ? "var(--k2k-gradient)" : "var(--border)"
                }} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-24">
        {/* Previous section insight — shown when moving to a new section */}
        {step > 0 && sectionInsights[activeThemes[step - 1]?.id] && sectionInsights[activeThemes[step - 1]?.id] !== "loading" && (
          <div className="mb-6 rounded-xl px-4 py-3 flex items-start gap-3 border"
            style={{ background: "rgba(124,58,237,0.06)", borderColor: "rgba(124,58,237,0.25)" }}>
            <Sparkles size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#7c3aed" }} />
            <p className="text-xs leading-relaxed" style={{ color: "var(--foreground)" }}>
              <span className="font-semibold" style={{ color: "#7c3aed" }}>AI insight: </span>
              {sectionInsights[activeThemes[step - 1].id]}
            </p>
          </div>
        )}

        {/* Theme header */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--k2k-teal)" }}>
            Domain {step + 1} of {totalThemes}
          </div>
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
            {currentTheme?.title}
          </h2>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{currentTheme?.description}</p>
        </div>

        {/* Question card */}
        <div className="rounded-2xl p-8 border shadow-sm mb-6"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="text-xs font-medium mb-4" style={{ color: "var(--muted)" }}>
            Question {questionIndex + 1} of {totalQuestionsInTheme}
          </div>
          <h3 className="text-lg font-semibold mb-6 leading-snug" style={{ color: "var(--foreground)" }}>
            {currentQuestion?.text}
          </h3>

          {/* Radio options */}
          {currentQuestion?.type === "radio" && (
            <div className="space-y-3">
              {currentQuestion.options.map((opt, i) => {
                const label = getOptionLabel(opt);
                const score = getOptionScore(opt, i);
                return (
                  <button key={i}
                    onClick={() => handleAnswer(currentQuestion.id, score)}
                    className="w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium"
                    style={{
                      background: answers[currentQuestion.id] === score ? "rgba(0,164,110,0.1)" : "var(--background)",
                      borderColor: answers[currentQuestion.id] === score ? "var(--k2k-teal)" : "var(--border)",
                      color: "var(--foreground)",
                    }}>
                    <span className="inline-flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: answers[currentQuestion.id] === score ? "var(--k2k-teal)" : "var(--border)" }}>
                        {answers[currentQuestion.id] === score && (
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--k2k-teal)" }} />
                        )}
                      </span>
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Checkbox options */}
          {currentQuestion?.type === "checkbox" && (
            <div className="space-y-3">
              {currentQuestion.options.map((opt, i) => {
                const label = getOptionLabel(opt);
                const checked = Array.isArray(answers[currentQuestion.id]) && answers[currentQuestion.id].includes(i);
                return (
                  <button key={i}
                    onClick={() => handleCheckbox(currentQuestion.id, i, !checked)}
                    className="w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium"
                    style={{
                      background: checked ? "rgba(0,164,110,0.1)" : "var(--background)",
                      borderColor: checked ? "var(--k2k-teal)" : "var(--border)",
                      color: "var(--foreground)",
                    }}>
                    <span className="inline-flex items-center gap-3">
                      <span className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: checked ? "var(--k2k-teal)" : "var(--border)", background: checked ? "var(--k2k-teal)" : "transparent" }}>
                        {checked && <CheckCircle size={12} color="white" />}
                      </span>
                      {label}
                    </span>
                  </button>
                );
              })}
              <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>Select all that apply</p>
            </div>
          )}

          {/* Scale */}
          {currentQuestion?.type === "scale" && (
            <div className="space-y-4">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button key={val}
                    onClick={() => handleAnswer(currentQuestion.id, val)}
                    className="flex-1 py-4 rounded-xl border-2 font-bold text-lg transition-all"
                    style={{
                      background: answers[currentQuestion.id] === val ? "var(--k2k-gradient)" : "var(--background)",
                      borderColor: answers[currentQuestion.id] === val ? "var(--k2k-teal)" : "var(--border)",
                      color: answers[currentQuestion.id] === val ? "white" : "var(--foreground)",
                    }}>
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs" style={{ color: "var(--muted)" }}>
                <span>{currentQuestion.minLabel}</span>
                <span>{currentQuestion.maxLabel}</span>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button onClick={prevQuestion}
            disabled={step === 0 && questionIndex === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all hover:opacity-70 disabled:opacity-30"
            style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
            <ArrowLeft size={14} /> Back
          </button>
          <button onClick={nextQuestion}
            disabled={!canProceed()}
            className="btn-primary flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none">
            {step === totalThemes - 1 && questionIndex === currentTheme?.questions.length - 1
              ? "See results"
              : "Next"} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AssessmentStartPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ background: "var(--background)" }} />}>
      <AssessmentStartInner />
    </Suspense>
  );
}
