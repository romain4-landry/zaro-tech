import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const services = [
  {
    name: "Développement web",
    desc: "Nous concevons des sites vitrines, e-commerce et portails sur mesure, adaptés à votre image et à vos objectifs. Design moderne, responsive et optimisé SEO.",
    domain: "Tous secteurs",
    color: "bg-blue-50 text-blue-700",
    details: ["Site vitrine", "E-commerce", "Portail client", "Landing page"],
  },
  {
    name: "Chatbot agriculture",
    desc: "Un assistant intelligent spécialisé dans l'agriculture africaine. Conseils sur les cultures, périodes de semis, maladies des plantes et prix des marchés locaux.",
    domain: "Agriculture",
    color: "bg-[#E1F5EE] text-[#0F6E56]",
    details: ["Conseils agronomiques", "Météo agricole", "Prix des marchés", "Détection maladies"],
  },
  {
    name: "Chatbot football",
    desc: "Un chatbot expert en football africain et international. Résultats en direct, statistiques joueurs, calendriers et pronostics pour les grandes compétitions.",
    domain: "Football",
    color: "bg-purple-50 text-purple-700",
    details: ["Résultats en direct", "Stats joueurs", "Calendrier matchs", "Pronostics"],
  },
  {
    name: "Chatbot multi-domaine",
    desc: "Un assistant sur mesure pour votre entreprise. Support client automatisé, FAQ intelligente et prise en charge multilingue français / anglais.",
    domain: "Entreprises",
    color: "bg-[#E1F5EE] text-[#0F6E56]",
    details: ["Support client 24h/24", "FAQ automatisée", "Multilingue", "Intégration WhatsApp"],
  },
  {
    name: "Flyers & print",
    desc: "Création graphique professionnelle pour vos supports print et digitaux. Flyers, affiches, bannières et visuels réseaux sociaux avec un rendu soigné.",
    domain: "Communication",
    color: "bg-amber-50 text-amber-700",
    details: ["Flyers A4/A5", "Affiches", "Bannières web", "Visuels réseaux sociaux"],
  },
  {
    name: "Maintenance & SEO",
    desc: "On s'occupe de tout après la livraison : hébergement, mises à jour, sauvegardes et optimisation SEO pour que votre site reste visible et performant.",
    domain: "Tous secteurs",
    color: "bg-blue-50 text-blue-700",
    details: ["Hébergement", "Mises à jour", "Sauvegardes", "Référencement Google"],
  },
  {
  name: "Analyse de données",
  desc: "Collecte, traitement et visualisation de vos données pour des décisions éclairées. Tableaux de bord, rapports et insights personnalisés.",
  domain: "Tous secteurs",
  color: "bg-teal-50 text-teal-700",
  details: ["Tableaux de bord", "Rapports automatisés", "Visualisation données", "KPI & métriques"],
},
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-2">
          Ce qu&apos;on fait
        </p>
        <h1 className="text-3xl font-medium text-gray-900 mb-2">Nos services</h1>
        <p className="text-sm text-gray-500 mb-16 max-w-lg leading-relaxed">
          Des solutions digitales sur mesure pour chaque besoin, avec une expertise
          particulière sur l&apos;Afrique francophone et l&apos;Europe.
        </p>

        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <div key={s.name}
              className="border border-gray-100 rounded-xl p-6 hover:border-gray-200 transition-colors">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-base font-medium text-gray-900">{s.name}</h2>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${s.color}`}>
                      {s.domain}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.details.map((d) => (
                      <span key={d}
                        className="text-xs bg-gray-50 text-gray-600 px-3 py-1 rounded-full border border-gray-100">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/contact"
                  className="text-sm text-[#1D9E75] hover:text-[#0F6E56] transition-colors whitespace-nowrap font-medium">
                  Demander un devis →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}