import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main
        className="relative min-h-screen overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at top, #0f1e1a 0%, #0a0f14 50%, #050709 100%)",
        }}
      >
        {/* Grille cyber en fond */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,159,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orbes lumineux */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-[#00ff9f] opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#1D9E75] opacity-15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#00ff9f]/30 bg-[#00ff9f]/10 backdrop-blur-sm">
              <span
                className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse"
                style={{ boxShadow: "0 0 10px #00ff9f" }}
              />
              <p className="text-xs font-medium tracking-widest text-[#00ff9f] uppercase">
                Ce qu&apos;on fait
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Nos{" "}
              <span className="bg-gradient-to-r from-[#00ff9f] to-[#1D9E75] bg-clip-text text-transparent">
                services
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Des solutions digitales sur mesure pour chaque besoin, avec une expertise
              particulière sur l&apos;Afrique francophone et l&apos;Europe.
            </p>
          </div>

          {/* GRILLE BENTO */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">

            {/* GRANDE CARD : Développement web (2x2) */}
            <div
              className="group relative md:col-span-2 md:row-span-2 p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,255,159,0.12) 0%, rgba(20,30,40,0.8) 50%, rgba(29,158,117,0.1) 100%)",
                border: "1px solid rgba(0,255,159,0.3)",
              }}
            >
              {/* Pattern de code décoratif */}
              <div className="absolute top-6 right-6 opacity-10 pointer-events-none font-mono text-[11px] leading-[1.4] text-[#00ff9f] whitespace-pre select-none">
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
                      background:
                        "linear-gradient(135deg, rgba(0,255,159,0.2), rgba(29,158,117,0.1))",
                      border: "1px solid rgba(0,255,159,0.3)",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00ff9f] text-black">
                    ⭐ Service phare
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-3xl font-semibold text-white mb-3">Développement web</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md">
                    Sites vitrines, e-commerce et portails sur mesure. Design moderne, responsive et optimisé SEO pour convertir vos visiteurs en clients.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Site vitrine", "E-commerce", "Portail client", "Landing page"].map((tag) => (
                      <span key={tag} className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff9f] hover:text-[#00e68f]">
                    Demander un devis
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card stats : Livraison rapide (2 colonnes) */}
            <div
              className="group relative md:col-span-2 p-7 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff9f]/30"
              style={{
                background: "rgba(10, 20, 25, 0.8)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-6 h-full">
                <div
                  className="text-6xl md:text-7xl font-bold leading-none"
                  style={{
                    background: "linear-gradient(135deg, #00ff9f, #1D9E75)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  3,5
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">mois en moyenne</p>
                  <h3 className="text-xl font-semibold text-white mb-2">Livraison rapide</h3>
                  <p className="text-xs text-gray-500">De l&apos;idée au déploiement, on tient nos délais.</p>
                </div>
              </div>
            </div>

            {/* Card : Chatbot agriculture */}
            <div
              className="group relative p-7 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff9f]/30"
              style={{
                background: "rgba(20, 30, 40, 0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,159,0.2), rgba(29,158,117,0.1))",
                  border: "1px solid rgba(0,255,159,0.3)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-green-400/10 text-green-300 border border-green-400/20 mb-3">
                Agriculture
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Chatbot agriculture</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Conseils agronomiques, météo et marchés locaux.
              </p>
            </div>

            {/* Card : Chatbot football */}
            <div
              className="group relative p-7 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff9f]/30"
              style={{
                background: "rgba(20, 30, 40, 0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,159,0.2), rgba(29,158,117,0.1))",
                  border: "1px solid rgba(0,255,159,0.3)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-orange-400/10 text-orange-300 border border-orange-400/20 mb-3">
                Football
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Chatbot football</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Stats en direct, résultats et pronostics.
              </p>
            </div>

            {/* Card : Chatbot multi-domaine (2 colonnes) */}
            <div
              className="group relative md:col-span-2 p-7 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff9f]/30"
              style={{
                background: "rgba(20, 30, 40, 0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,255,159,0.2), rgba(29,158,117,0.1))",
                    border: "1px solid rgba(0,255,159,0.3)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20 mb-2">
                    Entreprises
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">Chatbot multi-domaine</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Support client automatisé, FAQ intelligente, multilingue FR/EN.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["24h/24", "WhatsApp", "Multilingue"].map((tag) => (
                      <span key={tag} className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card : Flyers & print */}
            <div
              className="group relative p-7 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff9f]/30"
              style={{
                background: "rgba(20, 30, 40, 0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,159,0.2), rgba(29,158,117,0.1))",
                  border: "1px solid rgba(0,255,159,0.3)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-purple-400/10 text-purple-300 border border-purple-400/20 mb-3">
                Communication
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Flyers &amp; print</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Création graphique print &amp; digital.
              </p>
            </div>

            {/* Card : Maintenance & SEO */}
            <div
              className="group relative p-7 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff9f]/30"
              style={{
                background: "rgba(20, 30, 40, 0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,159,0.2), rgba(29,158,117,0.1))",
                  border: "1px solid rgba(0,255,159,0.3)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                </svg>
              </div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-[#00ff9f]/10 text-[#00ff9f] border border-[#00ff9f]/20 mb-3">
                Tous secteurs
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Maintenance &amp; SEO</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Hébergement, mises à jour et référencement.
              </p>
            </div>

            {/* Card : Analyse de données (2 colonnes) */}
            <div
              className="group relative md:col-span-2 p-7 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff9f]/30"
              style={{
                background: "rgba(20, 30, 40, 0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,255,159,0.2), rgba(29,158,117,0.1))",
                    border: "1px solid rgba(0,255,159,0.3)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-[#00ff9f]/10 text-[#00ff9f] border border-[#00ff9f]/20 mb-2">
                    Tous secteurs
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">Analyse de données</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Tableaux de bord, rapports et insights pour des décisions éclairées.
                  </p>
                  {/* Mini graphique décoratif */}
                  <div className="flex items-end gap-1 h-8 mt-2">
                    <div className="flex-1 bg-[#00ff9f]/30 rounded-t" style={{ height: "40%" }} />
                    <div className="flex-1 bg-[#00ff9f]/50 rounded-t" style={{ height: "60%" }} />
                    <div className="flex-1 bg-[#00ff9f]/40 rounded-t" style={{ height: "50%" }} />
                    <div className="flex-1 bg-[#00ff9f]/70 rounded-t" style={{ height: "80%" }} />
                    <div className="flex-1 bg-[#00ff9f]/60 rounded-t" style={{ height: "70%" }} />
                    <div className="flex-1 bg-[#00ff9f] rounded-t" style={{ height: "100%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card finale (4 colonnes) */}
            <div
              className="relative md:col-span-4 p-10 rounded-2xl text-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,255,159,0.12) 0%, rgba(20,30,40,0.8) 50%, rgba(29,158,117,0.1) 100%)",
                border: "1px solid rgba(0,255,159,0.3)",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Un projet en tête ?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Parlons-en ! On vous répond sous 24h avec une proposition personnalisée.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00ff9f] text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#00e68f] transition-all"
                style={{ boxShadow: "0 0 25px rgba(0,255,159,0.4)" }}
              >
                Démarrer mon projet
                <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}