const offices = [
  {
    flag: "🇧🇪",
    city: "Bruxelles, Belgique",
    role: "Bureau Europe",
    detail: "Marché UE & international",
    email: "zarotech@gmail.com",
  },
  {
    flag: "🇨🇲",
    city: "Yaoundé, Cameroun",
    role: "Bureau Afrique centrale",
    detail: "Marchés Afrique francophone",
    email: "zarotech@gmail.com",
  },
];

export default function Offices() {
  return (
    <section className="px-6 py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-2">
          Nos bureaux
        </p>
        <h2 className="text-2xl font-medium text-gray-900 mb-10">
          Présents en Europe et en Afrique
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {offices.map((o) => (
            <div key={o.city}
              className="border border-gray-100 rounded-xl p-6 hover:border-gray-300 transition-colors">
              <div className="text-2xl mb-3">{o.flag}</div>
              <p className="font-medium text-gray-900 mb-1">{o.city}</p>
              <p className="text-sm text-gray-500">{o.role}</p>
              <p className="text-sm text-gray-400">{o.detail}</p>
              <a href={`mailto:${o.email}`}
                className="text-sm text-[#1D9E75] mt-2 block hover:text-[#0F6E56] transition-colors">
                {o.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}