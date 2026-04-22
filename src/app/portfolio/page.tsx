import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const projects = [
  {
    title: "AgroBot Cameroun",
    desc: "Chatbot intelligent spécialisé en agriculture camerounaise. Conseils agronomiques, météo et prix des marchés en temps réel.",
    domain: "Agriculture",
    type: "Chatbot IA",
    year: "2026",
    technologies: ["Next.js", "Groq AI", "TailwindCSS"],
    bg: "bg-[#E1F5EE]",
    color: "bg-[#E1F5EE] text-[#0F6E56]",
  },
  {
    title: "FootStats Africa",
    desc: "Assistant football avec résultats en direct, statistiques joueurs et pronostics pour les compétitions africaines et internationales.",
    domain: "Football",
    type: "Chatbot IA",
    year: "2026",
    technologies: ["React", "Node.js", "API Football"],
    bg: "bg-purple-50",
    color: "bg-purple-50 text-purple-700",
  },
  {
    title: "Site vitrine PME",
    desc: "Site vitrine moderne pour une PME bruxelloise. Design épuré, formulaire de contact et optimisation SEO complète.",
    domain: "Web",
    type: "Site vitrine",
    year: "2026",
    technologies: ["Next.js", "TailwindCSS", "Vercel"],
    bg: "bg-blue-50",
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Campagne Flyers",
    desc: "Création de supports print et digitaux pour une campagne de communication à Yaoundé. Flyers, affiches et visuels réseaux sociaux.",
    domain: "Communication",
    type: "Print & Digital",
    year: "2026",
    technologies: ["Illustrator", "Photoshop", "Canva Pro"],
    bg: "bg-amber-50",
    color: "bg-amber-50 text-amber-700",
  },
];

const filters = ["Tous", "Agriculture", "Football", "Web", "Communication"];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-2">
          Réalisations
        </p>
        <h1 className="text-3xl font-medium text-gray-900 mb-2">Portfolio</h1>
        <p className="text-sm text-gray-500 mb-10 max-w-lg leading-relaxed">
          Quelques projets représentatifs de notre savoir-faire, de Bruxelles à Yaoundé.
        </p>

        <div className="flex gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <span key={f}
              className={`text-xs px-4 py-1.5 rounded-full border cursor-pointer transition-colors ${
                f === "Tous"
                  ? "bg-[#1D9E75] text-white border-[#1D9E75]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}>
              {f}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title}
              className="border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-colors group">
              <div className={`h-40 ${p.bg} flex items-center justify-center`}>
                <span className="text-4xl opacity-30">
                  {p.domain === "Agriculture" ? "🌱" :
                   p.domain === "Football" ? "⚽" :
                   p.domain === "Web" ? "💻" : "🎨"}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-sm font-medium text-gray-900">{p.title}</h2>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.color}`}>
                    {p.domain}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.technologies.map((t) => (
                    <span key={t}
                      className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{p.type} · {p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-gray-100 rounded-xl p-8 text-center">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Vous avez un projet en tête ?
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Discutons de vos besoins et construisons quelque chose ensemble.
          </p>
          <Link href="/contact"
            className="bg-[#1D9E75] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0F6E56] transition-colors">
            Démarrer un projet
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}