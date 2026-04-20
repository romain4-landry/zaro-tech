const services = [
  {
    name: "Développement web",
    desc: "Sites vitrines, e-commerce, portails sur mesure",
    domain: "Tous secteurs",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Chatbot agriculture",
    desc: "Conseils agronomiques, météo, marchés locaux",
    domain: "Agriculture",
    color: "bg-[#E1F5EE] text-[#0F6E56]",
  },
  {
    name: "Chatbot football",
    desc: "Stats en direct, pronostics, résultats matchs",
    domain: "Football",
    color: "bg-purple-50 text-purple-700",
  },
  {
    name: "Flyers & print",
    desc: "Création graphique professionnelle print & digital",
    domain: "Communication",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Chatbot multi-domaine",
    desc: "Support client automatisé, FAQ intelligente",
    domain: "Entreprises",
    color: "bg-[#E1F5EE] text-[#0F6E56]",
  },
  {
    name: "Maintenance & SEO",
    desc: "Hébergement, mises à jour, référencement",
    domain: "Tous secteurs",
    color: "bg-blue-50 text-blue-700",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-2">
          Ce qu&apos;on fait
        </p>
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Nos services</h2>
        <p className="text-sm text-gray-500 mb-10 max-w-lg leading-relaxed">
          Des solutions sur mesure pour chaque besoin digital, avec une expertise
          sur l&apos;Afrique francophone et l&apos;Europe.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.name}
              className="border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition-colors">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{s.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{s.desc}</p>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${s.color}`}>
                {s.domain}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}