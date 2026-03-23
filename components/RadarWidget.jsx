"use client";
import { useState } from "react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend,
} from "recharts";

const data = [
  { domain: "Governance",    typical: 38, leading: 82 },
  { domain: "Priv. Access",  typical: 32, leading: 88 },
  { domain: "Authentication",typical: 55, leading: 90 },
  { domain: "Endpoints",     typical: 30, leading: 80 },
  { domain: "Operations",    typical: 42, leading: 85 },
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1a1f2f] border border-[#3d4a42]/40 rounded-xl px-4 py-2.5 text-xs shadow-xl">
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="font-bold">
          {p.name}: <span className="font-extrabold">{p.value}%</span>
        </p>
      ))}
    </div>
  );
}

const views = [
  { key: "both",    label: "Compare" },
  { key: "typical", label: "Avg" },
  { key: "leading", label: "Best-in-class" },
];

export default function RadarWidget() {
  const [view, setView] = useState("both");

  return (
    <div className="bg-[#090e1c] rounded-2xl border border-[#3d4a42]/20 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#5cdda2] mb-1">
            Live Benchmark Data
          </p>
          <h3 className="text-lg font-extrabold tracking-tighter text-[#dee1f7]">
            IAM Maturity by Domain
          </h3>
          <p className="text-xs text-[#bccabf] mt-0.5">Based on 500+ UK organisations</p>
        </div>
        {/* Toggle */}
        <div className="flex gap-1 p-1 bg-[#161b2b] rounded-xl border border-[#3d4a42]/20 self-start sm:self-auto">
          {views.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={`px-3 py-1.5 text-[0.7rem] font-bold rounded-lg transition-all ${
                view === key
                  ? "bg-[#5cdda2] text-[#003823]"
                  : "text-[#bccabf] hover:text-[#dee1f7]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data} margin={{ top: 10, right: 24, bottom: 10, left: 24 }}>
          <PolarGrid stroke="#3d4a42" strokeOpacity={0.4} />
          <PolarAngleAxis
            dataKey="domain"
            tick={{ fill: "#bccabf", fontSize: 11, fontWeight: 600 }}
            tickLine={false}
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />

          {(view === "both" || view === "typical") && (
            <Radar
              name="Industry Avg"
              dataKey="typical"
              stroke="#c3c0ff"
              fill="#c3c0ff"
              fillOpacity={0.15}
              strokeWidth={2}
              dot={{ fill: "#c3c0ff", r: 3 }}
              activeDot={{ r: 5 }}
            />
          )}
          {(view === "both" || view === "leading") && (
            <Radar
              name="Best-in-class"
              dataKey="leading"
              stroke="#5cdda2"
              fill="#5cdda2"
              fillOpacity={0.12}
              strokeWidth={2}
              dot={{ fill: "#5cdda2", r: 3 }}
              activeDot={{ r: 5 }}
            />
          )}

          <Tooltip content={<CustomTooltip />} />
          {view === "both" && (
            <Legend
              wrapperStyle={{ fontSize: 11, color: "#bccabf", paddingTop: "8px" }}
            />
          )}
        </RadarChart>
      </ResponsiveContainer>

      {/* Domain score pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {data.map((d) => (
          <div key={d.domain} className="flex items-center gap-2 bg-[#161b2b] rounded-lg px-3 py-1.5 border border-[#3d4a42]/15">
            <span className="text-xs font-bold text-[#bccabf]">{d.domain}</span>
            <span className="text-xs font-extrabold text-[#5cdda2]">{d.leading}%</span>
            <span className="text-[10px] text-[#3d4a42]">target</span>
          </div>
        ))}
      </div>
    </div>
  );
}
