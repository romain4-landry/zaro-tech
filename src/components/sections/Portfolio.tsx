const items = [
  {
    title: "AgroBot Cameroun",
    desc: "Chatbot agricole · 2026",
    bg: "bg-[#E1F5EE]",
  },
  {
    title: "FootStats Africa",
    desc: "Chatbot football · 2026",
    bg: "bg-purple-50",
  },
  {
    title: "Site vitrine PME",
    desc: "Web · Bruxelles · 2026",
    bg: "bg-blue-50",
  },
  {
    title: "Flyers campagne",
    desc: "Print · Yaoundé · 2026",
    bg: "bg-amber-50",
  },
];

export default function Portfolio() {
  return (
    <section className="px-6 py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-2">
          Réalisations
        </p>
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Portfolio</h2>
        <p className="text-sm text-gray-500 mb-10">
          Quelques projets représentatifs de notre savoir-faire.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.title}
              className="border border-gray-100 rounded-xl overflow-hidden hover:border-gray-300 transition-colors cursor-pointer group">
              <div className={`h-24 ${item.bg} group-hover:opacity-90 transition-opacity`} />
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}