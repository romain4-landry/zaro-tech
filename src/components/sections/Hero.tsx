import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Image de fond locale */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Overlay sombre dégradé (léger à droite pour voir l'image) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10, 20, 30, 0.85) 0%, rgba(10, 20, 30, 0.60) 60%, rgba(10, 20, 30, 0.45) 100%)",
        }}
      />

      {/* Halos néon verts */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00ff9f] opacity-15 blur-[120px] rounded-full" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1D9E75] opacity-25 blur-[120px] rounded-full" />

      {/* Contenu */}
      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_360px] gap-10 items-center">
        {/* Colonne gauche */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#00ff9f]/40 bg-[#00ff9f]/10 backdrop-blur-sm">
            <span
              className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse"
              style={{ boxShadow: "0 0 10px #00ff9f" }}
            />
            <p className="text-xs font-medium tracking-widest text-[#00ff9f] uppercase">
              Agence web &amp; solutions digitales
            </p>
          </div>

          <h1
            className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
          >
            Votre présence digitale,{" "}
            <em className="not-italic bg-gradient-to-r from-[#00ff9f] to-[#1D9E75] bg-clip-text text-transparent">
              enfin à la hauteur
            </em>{" "}
            de vos ambitions
          </h1>

          <p
            className="text-gray-100 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}
          >
            Zaro Tech conçoit des sites web modernes et des chatbots intelligents
            pour l&apos;agriculture, le football et bien au-delà — de Bruxelles à Yaoundé.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="group bg-[#00ff9f] text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#00e68f] transition-all"
              style={{ boxShadow: "0 0 20px rgba(0,255,159,0.5)" }}
            >
              Demander un devis
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="bg-white/10 text-white border border-white/30 backdrop-blur-sm px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/20 hover:border-[#00ff9f]/50 transition-all"
            >
              Voir le portfolio
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-10 mt-14 flex-wrap">
            {[
              { num: "3", label: "Domaines d'expertise" },
              { num: "2", label: "Bureaux (BE + CM)" },
              { num: "6", label: "Services proposés" },
              { num: "3,5 mois", label: "Livraison estimée" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-semibold text-[#00ff9f]">
                  {s.num}
                </p>
                <p className="text-xs text-gray-200 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite : carte glassmorphism */}
        <div className="hidden md:block">
          <div className="relative p-8 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-2xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff9f]/10 to-transparent pointer-events-none" />
            <h3 className="relative text-xl font-semibold text-white mb-6">
              Pourquoi choisir Zaro Tech ?
            </h3>
            <ul className="relative space-y-4">
              {[
                "Sites web modernes et performants",
                "Chatbots IA sur mesure",
                "Accompagnement de A à Z",
                "Équipe Bruxelles ↔ Yaoundé",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00ff9f]/20 border border-[#00ff9f] flex items-center justify-center mt-0.5">
                    <span className="text-[#00ff9f] text-xs">✓</span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Ligne néon en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff9f]/60 to-transparent" />
    </section>
  );
}