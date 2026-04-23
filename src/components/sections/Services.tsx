import Link from "next/link";

const services = [
  {
    name: "Développement web",
    desc: "Sites vitrines, e-commerce et portails sur mesure. Design moderne, responsive et optimisé SEO.",
    domain: "Tous secteurs",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    featured: true,
    tags: ["Site vitrine", "E-commerce", "Portail client", "Landing page"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: "Chatbot agriculture",
    desc: "Conseils agronomiques, météo et marchés locaux.",
    domain: "Agriculture",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Chatbot football",
    desc: "Stats en direct, résultats et pronostics.",
    domain: "Football",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    name: "Chatbot multi-domaine",
    desc: "Support client automatisé, FAQ intelligente.",
    domain: "Entreprises",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Flyers & print",
    desc: "Création graphique print & digital.",
    domain: "Communication",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    name: "Maintenance & SEO",
    desc: "Hébergement, mises à jour et référencement.",
    domain: "Tous secteurs",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
      </svg>
    ),
  },
  {
    name: "Analyse de données",
    desc: "Tableaux de bord, rapports et insights pour des décisions éclairées.",
    domain: "Tous secteurs",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      />

      {/* Overlay blanc pour garder l'ambiance claire */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,250,249,0.92) 0%, rgba(238,244,241,0.95) 100%)",
        }}
      />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,158,117,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbes lumineux */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-[#1D9E75] opacity-15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#00ff9f] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#1D9E75]/30 bg-white/80 backdrop-blur-sm shadow-sm">
            <span
              className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse"
              style={{ boxShadow: "0 0 10px #1D9E75" }}
            />
            <p className="text-xs font-medium tracking-widest text-[#0F6E56] uppercase">
              Ce qu&apos;on fait
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Nos{" "}
            <span className="bg-gradient-to-r from-[#1D9E75] to-[#0F6E56] bg-clip-text text-transparent">
              services
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Des solutions sur mesure pour chaque besoin digital, avec une expertise sur
            l&apos;Afrique francophone et l&apos;Europe.
          </p>
        </div>

        {/* GRILLE BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">
          {/* GRANDE CARD : Développement web (2x2) */}
          <div
            className="group relative md:col-span-2 md:row-span-2 p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1D9E75]/20 hover:border-[#1D9E75]/40 overflow-hidden"
          >
            {/* Pattern de code décoratif */}
            <div className="absolute top-6 right-6 opacity-[0.08] pointer-events-none font-mono text-[11px] leading-[1.4] text-[#0F6E56] whitespace-pre select-none">
{`<div className="hero">
  <h1>Zaro Tech</h1>
  <p>Code & créativité</p>
  <button>
    Commencer
  </button>
</div>`}
            </div>

            <div className="relative flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(29,158,117,0.2), rgba(29,158,117,0.05))",
                    border: "1px solid rgba(29,158,117,0.3)",
                  }}
                >
                  {services[0].icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1D9E75] text-white shadow-md">
                  ⭐ Service phare
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-semibold text-gray-900 mb-3">Développement web</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md">
                  Sites vitrines, e-commerce et portails sur mesure. Design moderne, responsive et optimisé SEO pour convertir vos visiteurs en clients.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {services[0].tags?.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-50 text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D9E75] hover:text-[#0F6E56]">
                  Demander un devis
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card stat "3,5 mois" */}
          <div className="group relative md:col-span-2 p-7 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[#1D9E75]/40">
            <div className="flex items-center gap-6 h-full">
              <div
                className="text-6xl md:text-7xl font-bold leading-none"
                style={{
                  background: "linear-gradient(135deg, #1D9E75, #0F6E56)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                3,5
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">mois en moyenne</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Livraison rapide</h3>
                <p className="text-xs text-gray-500">De l&apos;idée au déploiement, on tient nos délais.</p>
              </div>
            </div>
          </div>

          {/* Cards simples : agriculture + football */}
          {services.slice(1, 3).map((s) => (
            <div
              key={s.name}
              className="group relative p-7 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[#1D9E75]/40"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(29,158,117,0.2), rgba(29,158,117,0.05))",
                  border: "1px solid rgba(29,158,117,0.3)",
                }}
              >
                {s.icon}
              </div>
              <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${s.badgeColor} mb-3`}>
                {s.domain}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.name}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}

          {/* Chatbot multi-domaine (large) */}
          <div className="group relative md:col-span-2 p-7 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[#1D9E75]/40">
            <div className="flex items-start gap-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(29,158,117,0.2), rgba(29,158,117,0.05))",
                  border: "1px solid rgba(29,158,117,0.3)",
                }}
              >
                {services[3].icon}
              </div>
              <div className="flex-1">
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 mb-2">
                  Entreprises
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Chatbot multi-domaine</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Support client automatisé, FAQ intelligente, multilingue FR/EN.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["24h/24", "WhatsApp", "Multilingue"].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Flyers + Maintenance */}
          {services.slice(4, 6).map((s) => (
            <div
              key={s.name}
              className="group relative p-7 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[#1D9E75]/40"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(29,158,117,0.2), rgba(29,158,117,0.05))",
                  border: "1px solid rgba(29,158,117,0.3)",
                }}
              >
                {s.icon}
              </div>
              <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${s.badgeColor} mb-3`}>
                {s.domain}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.name}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}

          {/* Analyse de données avec mini chart (large) */}
          <div className="group relative md:col-span-2 p-7 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[#1D9E75]/40">
            <div className="flex items-start gap-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(29,158,117,0.2), rgba(29,158,117,0.05))",
                  border: "1px solid rgba(29,158,117,0.3)",
                }}
              >
                {services[6].icon}
              </div>
              <div className="flex-1">
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700 border border-green-200 mb-2">
                  Tous secteurs
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyse de données</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Tableaux de bord, rapports et insights pour des décisions éclairées.
                </p>
                <div className="flex items-end gap-1 h-8 mt-2">
                  <div className="flex-1 bg-[#1D9E75]/30 rounded-t" style={{ height: "40%" }} />
                  <div className="flex-1 bg-[#1D9E75]/50 rounded-t" style={{ height: "60%" }} />
                  <div className="flex-1 bg-[#1D9E75]/40 rounded-t" style={{ height: "50%" }} />
                  <div className="flex-1 bg-[#1D9E75]/70 rounded-t" style={{ height: "80%" }} />
                  <div className="flex-1 bg-[#1D9E75]/60 rounded-t" style={{ height: "70%" }} />
                  <div className="flex-1 bg-[#1D9E75] rounded-t" style={{ height: "100%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div
            className="relative md:col-span-4 p-10 rounded-2xl text-center overflow-hidden backdrop-blur-md border shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(29,158,117,0.15) 0%, rgba(255,255,255,0.8) 50%, rgba(0,255,159,0.1) 100%)",
              borderColor: "rgba(29,158,117,0.3)",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Un projet en tête ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Parlons-en ! On vous répond sous 24h avec une proposition personnalisée.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1D9E75] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#0F6E56] transition-all shadow-md hover:shadow-lg hover:shadow-[#1D9E75]/40"
            >
              Démarrer mon projet
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}