"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { assessmentThemes } from "@/lib/assessment-data";
import { calculateScores } from "@/lib/assessment-data";

export default function AssessmentStartPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0 = theme 0 questions, 4 = theme 4, 5 = contact gate
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: "", company: "", role: "", email: "", consent: false });
  const [contactErrors, setContactErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const totalThemes = assessmentThemes.length;
  const currentTheme = step < totalThemes ? assessmentThemes[step] : null;
  const currentQuestion = currentTheme ? currentTheme.questions[questionIndex] : null;

  // Calculate overall progress
  const totalQuestions = assessmentThemes.reduce((acc, t) => acc + t.questions.length, 0);
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

  const nextQuestion = () => {
    if (questionIndex < currentTheme.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
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
      const prevTheme = assessmentThemes[step - 1];
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
    const scores = calculateScores(answers);
    // Store in sessionStorage for results page (always, so results work even if API fails)
    sessionStorage.setItem("k2k-assessment-results", JSON.stringify({ scores, contact }));
    // Push to CRM + notify team (fire-and-forget, don't block the user)
    fetch("/api/assessment/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact, scores }),
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
  const themeProgress = Math.round(((questionIndex + 1) / totalQuestionsInTheme) * 100);

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
            {assessmentThemes.map((t, i) => (
              <div key={t.id} className="flex-1 h-1.5 rounded-full transition-all"
                style={{
                  background: i < step ? "var(--k2k-teal)" : i === step ? "var(--k2k-gradient)" : "var(--border)"
                }} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-24">
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
              {currentQuestion.options.map((opt, i) => (
                <button key={i}
                  onClick={() => handleAnswer(currentQuestion.id, opt.score)}
                  className="w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium"
                  style={{
                    background: answers[currentQuestion.id] === opt.score ? "rgba(0,164,110,0.1)" : "var(--background)",
                    borderColor: answers[currentQuestion.id] === opt.score ? "var(--k2k-teal)" : "var(--border)",
                    color: "var(--foreground)",
                  }}>
                  <span className="inline-flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: answers[currentQuestion.id] === opt.score ? "var(--k2k-teal)" : "var(--border)" }}>
                      {answers[currentQuestion.id] === opt.score && (
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--k2k-teal)" }} />
                      )}
                    </span>
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Checkbox options */}
          {currentQuestion?.type === "checkbox" && (
            <div className="space-y-3">
              {currentQuestion.options.map((opt, i) => {
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
                      {opt.label}
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
