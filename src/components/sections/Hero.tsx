import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-4">
        Agence web & solutions digitales intelligentes
      </p>
      <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight max-w-2xl mb-6">
        Votre présence digitale,{" "}
        <em className="not-italic text-[#1D9E75]">enfin à la hauteur</em>{" "}
        de vos ambitions
      </h1>
      <p className="text-gray-500 text-base max-w-xl leading-relaxed mb-8">
        Zaro Tech conçoit des sites web modernes et des chatbots intelligents
        pour l&apos;agriculture, le football et bien au-delà — de Bruxelles à Yaoundé.
      </p>
      <div className="flex gap-3 flex-wrap">
        <Link href="/contact"
          className="bg-[#1D9E75] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0F6E56] transition-colors">
          Demander un devis
        </Link>
        <Link href="/portfolio"
          className="bg-white text-gray-900 border border-gray-200 px-6 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors">
          Voir le portfolio
        </Link>
      </div>

      <div className="flex gap-10 mt-14 flex-wrap">
        {[
          { num: "3", label: "Domaines d'expertise" },
          { num: "2", label: "Bureaux (BE + CM)" },
          { num: "6", label: "Services proposés" },
          { num: "3,5 mois", label: "Livraison estimée" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-xl font-medium text-gray-900">{s.num}</p>
            <p className="text-xs text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}