"use client";

import { Upload, FileText, CheckCircle, X } from "lucide-react";

const recentUploads = [
  { name: "NDA_Signed.pdf", size: "340 KB", uploaded: "8 Mar 2025", status: "complete" },
  { name: "Network_Topology_Diagram.vsdx", size: "4.1 MB", uploaded: "15 Mar 2025", status: "complete" },
];

export default function UploadPage() {
  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>Upload files</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Share documents securely with the K2K project team. All files are encrypted at rest and in transit.
        </p>
      </div>

      {/* Upload zone */}
      <div className="border-2 border-dashed rounded-2xl p-10 text-center mb-8"
        style={{ borderColor: "var(--border)" }}>
        <Upload size={32} className="mx-auto mb-4" style={{ color: "var(--muted)" }} />
        <p className="font-semibold text-base mb-1" style={{ color: "var(--foreground)" }}>
          Drag files here or click to browse
        </p>
        <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>
          PDF, Word, Excel, Visio, ZIP — max 50 MB per file
        </p>
        <button className="btn-primary text-sm px-6 py-2.5 rounded-xl font-semibold">
          Choose files
        </button>
      </div>

      {/* Recent uploads */}
      <div>
        <h2 className="text-sm font-bold mb-3" style={{ color: "var(--foreground)" }}>Recent uploads</h2>
        <div className="space-y-2">
          {recentUploads.map((file) => (
            <div key={file.name} className="flex items-center gap-3 p-3 rounded-xl border"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <FileText size={16} style={{ color: "var(--k2k-teal)", flexShrink: 0 }} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate" style={{ color: "var(--foreground)" }}>{file.name}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{file.size} · {file.uploaded}</p>
              </div>
              <CheckCircle size={14} style={{ color: "#22c55e", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
