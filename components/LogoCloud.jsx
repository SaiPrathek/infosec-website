"use client";

const partners = [
  "CyberArk", "Okta", "SailPoint", "BeyondTrust", "Ping Identity",
  "Microsoft Entra", "ForgeRock", "CrowdStrike", "Thales", "One Identity",
];

// Double the array so the marquee loops seamlessly
const all = [...partners, ...partners];

export default function LogoCloud() {
  return (
    <section className="bg-[#090e1c] border-y border-[#3d4a42]/10 py-10 overflow-hidden">
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#3d4a42] mb-7">
        Vendor-Agnostic · Technology Partners
      </p>
      <div className="overflow-hidden relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090e1c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090e1c] to-transparent z-10 pointer-events-none" />
        <div className="logo-marquee gap-4">
          {all.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-5 py-2 rounded-md border border-[#3d4a42]/25 bg-[#161b2b] text-[#bccabf] text-sm font-bold tracking-tight whitespace-nowrap mx-2 hover:border-[#5cdda2]/30 hover:text-[#dee1f7] hover:bg-[#1a1f2f] transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
