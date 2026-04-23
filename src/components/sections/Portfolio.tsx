import Link from "next/link";

const items = [
  {
    title: "AgroBot Cameroun",
    desc: "Chatbot agricole · 2026",
    category: "Agriculture",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    tech: ["Next.js", "OpenAI", "Prisma"],
    mockupType: "chatbot-agri",
  },
  {
    title: "FootStats Africa",
    desc: "Chatbot football · 2026",
    category: "Football",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    tech: ["React", "Node.js", "WebSocket"],
    mockupType: "football",
  },
  {
    title: "Site vitrine PME",
    desc: "Web · Bruxelles · 2026",
    category: "Web",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    tech: ["Next.js", "Tailwind", "Vercel"],
    mockupType: "website",
  },
  {
    title: "Flyers campagne",
    desc: "Print · Yaoundé · 2026",
    category: "Communication",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    tech: ["Illustrator", "Photoshop", "InDesign"],
    mockupType: "print",
  },
];

function ProjectMockup({ type }: { type: string }) {
  if (type === "chatbot-agri") {
    return (
      <div className="w-[85%] h-[85%] bg-[#0a0f14] rounded-lg border border-white/10 shadow-2xl overflow-hidden flex flex-col">
        <div className="h-6 bg-[#151f2a] flex items-center px-2.5 gap-1.5 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28ca42]" />
        </div>
        <div className="flex-1 p-4 flex flex-col gap-2.5">
          <div className="text-[10px] text-[#00ff9f] font-bold">🌾 AgroBot Cameroun</div>
          <div className="bg-[#00ff9f]/15 rounded-md px-2 py-1.5 text-[9px] text-[#00ff9f]">
            💬 Quand planter le maïs ?
          </div>
          <div className="bg-white/5 rounded-md p-2 text-[8px] text-gray-400 leading-relaxed">
            Pour le maïs, semez entre mars et mai selon votre région...
          </div>
          <div className="flex gap-1 mt-auto">
            <div className="flex-1 h-1.5 bg-[#00ff9f]/40 rounded" />
            <div className="flex-1 h-1.5 bg-[#00ff9f]/20 rounded" />
            <div className="flex-1 h-1.5 bg-[#00ff9f]/20 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "football") {
    return (
      <div className="w-[85%] h-[85%] bg-[#0a0f14] rounded-lg border border-white/10 shadow-2xl overflow-hidden flex flex-col">
        <div className="h-6 bg-[#151f2a] flex items-center px-2.5 gap-1.5 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28ca42]" />
        </div>
        <div className="flex-1 p-4 flex flex-col gap-2.5">
          <div className="text-[10px] text-[#ff9f00] font-bold">⚽ FootStats Africa</div>
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-md">
            <div className="text-[9px] text-white font-bold">🇨🇲 CMR</div>
            <div className="text-sm text-[#00ff9f] font-bold">2 - 1</div>
            <div className="text-[9px] text-white font-bold">NGA 🇳🇬</div>
            <div className="ml-auto bg-red-500 text-[7px] text-white px-1 py-0.5 rounded">LIVE</div>
          </div>
          <div className="flex gap-1">
            <div className="flex-1 h-5 bg-orange-400/20 rounded" />
            <div className="flex-1 h-5 bg-orange-400/40 rounded" />
            <div className="flex-1 h-5 bg-orange-400/30 rounded" />
          </div>
          <div className="text-[8px] text-gray-400 mt-auto">
            Statistiques · Possession 62%
          </div>
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="w-[85%] h-[85%] bg-[#0a0f14] rounded-lg border border-white/10 shadow-2xl overflow-hidden flex flex-col">
        <div className="h-6 bg-[#151f2a] flex items-center px-2.5 gap-1.5 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28ca42]" />
        </div>
        <div className="flex-1 p-4 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="text-[10px] text-[#60a5fa] font-bold">🏢 PME Bruxelles</div>
            <div className="flex gap-1.5">
              <div className="w-4 h-1 bg-white/20 rounded" />
              <div className="w-4 h-1 bg-white/20 rounded" />
              <div className="w-4 h-1 bg-white/20 rounded" />
            </div>
          </div>
          <div className="bg-blue-400/10 rounded-md h-10 flex items-center justify-center">
            <div className="text-[9px] text-blue-300 font-bold">Notre expertise à votre service</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="bg-white/5 rounded h-8 flex items-center justify-center text-[10px]">💼</div>
            <div className="bg-white/5 rounded h-8 flex items-center justify-center text-[10px]">📊</div>
            <div className="bg-white/5 rounded h-8 flex items-center justify-center text-[10px]">🤝</div>
          </div>
          <div className="mt-auto flex gap-1.5">
            <div className="flex-1 h-1.5 bg-blue-400/40 rounded" />
            <div className="flex-1 h-1.5 bg-blue-400/20 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "print") {
    return (
      <div className="w-[75%] h-[90%] bg-gradient-to-br from-purple-500/20 to-[#0a0f14] rounded-lg border border-white/10 shadow-2xl overflow-hidden flex flex-col p-4 relative">
        <div className="absolute top-3 right-3 text-[8px] text-purple-300 font-bold bg-white/10 px-1.5 py-0.5 rounded">
          A4
        </div>
        <div className="text-[14px] text-purple-300 font-bold mb-1">ÉVÉNEMENT</div>
        <div className="text-[10px] text-white mb-3">Yaoundé · 2026</div>
        <div className="bg-white/10 rounded h-16 mb-3 flex items-center justify-center text-2xl">
          🎉
        </div>
        <div className="space-y-1.5 mb-3">
          <div className="h-1 bg-white/30 rounded w-3/4" />
          <div className="h-1 bg-white/20 rounded w-full" />
          <div className="h-1 bg-white/20 rounded w-5/6" />
        </div>
        <div className="mt-auto bg-purple-400 rounded py-1 text-center text-[8px] font-bold text-black">
          PARTICIPER
        </div>
      </div>
    );
  }

  return null;
}

const bgGradients: Record<string, string> = {
  "chatbot-agri": "linear-gradient(135deg, #0a3d2a, #0f1e1a)",
  "football": "linear-gradient(135deg, #2a1a0a, #0f1e1a)",
  "website": "linear-gradient(135deg, #0a1a3d, #0f1e1a)",
  "print": "linear-gradient(135deg, #1a0a2a, #0f1e1a)",
};

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/portfolio-bg.jpg')" }}
      />

      {/* Overlay blanc semi-transparent pour garder l'ambiance claire et assurer la lisibilité */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,250,249,0.92) 0%, rgba(238,244,241,0.95) 100%)",
        }}
      />

      {/* Grille subtile par-dessus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,158,117,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbes lumineux */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#1D9E75] opacity-15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#00ff9f] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#1D9E75]/30 bg-white/80 backdrop-blur-sm shadow-sm">
            <span
              className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse"
              style={{ boxShadow: "0 0 10px #1D9E75" }}
            />
            <p className="text-xs font-medium tracking-widest text-[#0F6E56] uppercase">
              Nos réalisations
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[#1D9E75] to-[#0F6E56] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Quelques projets représentatifs de notre savoir-faire.
          </p>
        </div>

        {/* Grille : cards glassmorphism blanches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/60 shadow-lg shadow-gray-200/50 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#1D9E75]/40 hover:shadow-2xl hover:shadow-[#1D9E75]/20"
            >
              {/* Image + mockup */}
              <div
                className="relative aspect-[16/10] overflow-hidden flex items-center justify-center"
                style={{ background: bgGradients[item.mockupType] }}
              >
                <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <ProjectMockup type={item.mockupType} />
                </div>

                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 bg-[#1D9E75] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500 hover:bg-[#0F6E56]"
                  >
                    Voir le projet
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Infos */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${item.badgeColor} whitespace-nowrap`}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg text-sm font-medium hover:border-[#1D9E75] hover:text-[#1D9E75] transition-all shadow-sm backdrop-blur-sm"
          >
            Voir tous les projets
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}