"use client";

import { FileText, Download, Upload, Search } from "lucide-react";

const documents = [
  { name: "K2K_Assessment_Summary_v1.pdf", size: "2.4 MB", uploaded: "18 Mar 2026", type: "PDF", by: "K2K", category: "Reports" },
  { name: "Project_Statement_of_Work.docx", size: "890 KB", uploaded: "10 Mar 2026", type: "DOC", by: "K2K", category: "Contracts" },
  { name: "NDA_Signed.pdf", size: "340 KB", uploaded: "8 Mar 2026", type: "PDF", by: "Client", category: "Contracts" },
  { name: "IAM_Maturity_Framework_v2.pdf", size: "1.8 MB", uploaded: "12 Mar 2026", type: "PDF", by: "K2K", category: "Frameworks" },
  { name: "Network_Topology_Diagram.vsdx", size: "4.1 MB", uploaded: "15 Mar 2026", type: "VISIO", by: "Client", category: "Technical" },
];

const typeColors = {
  PDF: { color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
  DOC: { color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
  VISIO: { color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
};

export default function DocumentsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>Documents</h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>Project files, reports, and shared documents</p>
        </div>
        <button className="btn-primary text-sm px-4 py-2 rounded-lg font-semibold flex items-center gap-1.5">
          <Upload size={14} /> Upload
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--muted)" }} />
        <input type="text" placeholder="Search documents..."
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm outline-none"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--foreground)" }} />
      </div>

      {/* Document list */}
      <div className="rounded-xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="px-5 py-3 border-b grid grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-wider"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          <span className="col-span-5">Name</span>
          <span className="col-span-2">Category</span>
          <span className="col-span-2">Uploaded</span>
          <span className="col-span-1">Size</span>
          <span className="col-span-1">By</span>
          <span className="col-span-1"></span>
        </div>
        {documents.map((doc) => {
          const tc = typeColors[doc.type] || typeColors.PDF;
          return (
            <div key={doc.name} className="px-5 py-3.5 border-b grid grid-cols-12 gap-4 items-center hover:opacity-80 transition-opacity"
              style={{ borderColor: "var(--border)" }}>
              <div className="col-span-5 flex items-center gap-2.5 min-w-0">
                <FileText size={16} style={{ color: "var(--k2k-teal)", flexShrink: 0 }} />
                <span className="text-sm font-medium truncate" style={{ color: "var(--foreground)" }}>{doc.name}</span>
              </div>
              <div className="col-span-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: tc.bg, color: tc.color }}>
                  {doc.type}
                </span>
              </div>
              <span className="col-span-2 text-xs" style={{ color: "var(--muted)" }}>{doc.uploaded}</span>
              <span className="col-span-1 text-xs" style={{ color: "var(--muted)" }}>{doc.size}</span>
              <span className="col-span-1 text-xs" style={{ color: "var(--muted)" }}>{doc.by}</span>
              <div className="col-span-1 flex justify-end">
                <button className="p-1.5 rounded-lg hover:opacity-60 transition-opacity" style={{ color: "var(--muted)" }}>
                  <Download size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
