// Page "À propos" de Zaro Tech
// Cette page présente l'agence, sa vision et ses deux bureaux

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

// Liste des valeurs de l'agence
// Chaque valeur a un titre, une description et une icône emoji
const values = [
  {
    icon: "🎯",
    title: "Sur mesure",
    desc: "Chaque projet est unique. On ne livre pas des templates, on construit des solutions adaptées à vos besoins réels.",
  },
  {
    icon: "🌍",
    title: "Ancrage local",
    desc: "Basés à Bruxelles et Yaoundé, on comprend les réalités des marchés européens et africains.",
  },
  {
    icon: "🤖",
    title: "IA au service de tous",
    desc: "On démocratise l'accès à l'intelligence artificielle pour les PME, agriculteurs et clubs sportifs.",
  },
  {
    icon: "🤝",
    title: "Partenariat durable",
    desc: "On ne disparaît pas après la livraison. On accompagne nos clients sur le long terme.",
  },
];

// Liste des membres de l'équipe
// À personnaliser avec les vrais noms et rôles
const team = [
  {
    initials: "ZT", // Initiales affichées dans l'avatar
    name: "Équipe Zaro Tech",
    role: "Fondateurs & Développeurs",
    location: "Bruxelles · Yaoundé",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Barre de navigation */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-20">

        {/* En-tête de la page */}
        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-2">
          Qui sommes-nous
        </p>
        <h1 className="text-3xl font-medium text-gray-900 mb-2">À propos de Zaro Tech</h1>
        <p className="text-sm text-gray-500 mb-16 max-w-xl leading-relaxed">
          Zaro Tech est une agence digitale fondée avec une mission claire : rendre
          les solutions web et l&apos;intelligence artificielle accessibles aux entreprises
          d&apos;Afrique francophone et d&apos;Europe.
        </p>

        {/* Section histoire / mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Notre histoire</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Née de la rencontre entre l&apos;expertise technique et la connaissance
              des marchés africains, Zaro Tech a été créée pour combler le fossé
              digital entre l&apos;Europe et l&apos;Afrique centrale.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Depuis Bruxelles et Yaoundé, on accompagne des entrepreneurs, des
              agriculteurs, des clubs sportifs et des PME dans leur transformation
              digitale — avec des outils modernes, des chatbots intelligents et
              des sites web à la hauteur de leurs ambitions.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Notre mission</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Construire des ponts numériques entre l&apos;Europe et l&apos;Afrique en
              livrant des solutions digitales intelligentes, accessibles et durables.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              On croit que chaque agriculteur camerounais mérite un outil aussi
              puissant que celui d&apos;une multinationale. C&apos;est pourquoi on intègre
              l&apos;IA dans des produits simples, utiles et abordables.
            </p>
          </div>
        </div>

        {/* Section valeurs */}
        <div className="mb-20">
          <h2 className="text-xl font-medium text-gray-900 mb-8">Nos valeurs</h2>
          {/* Grille responsive : 1 colonne sur mobile, 2 sur tablette, 4 sur desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title}
                className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-colors">
                {/* Icône emoji */}
                <div className="text-2xl mb-3">{v.icon}</div>
                {/* Titre de la valeur */}
                <h3 className="text-sm font-medium text-gray-900 mb-2">{v.title}</h3>
                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section équipe */}
        <div className="mb-20">
          <h2 className="text-xl font-medium text-gray-900 mb-8">L&apos;équipe</h2>
          <div className="flex flex-wrap gap-4">
            {team.map((member) => (
              <div key={member.name}
                className="border border-gray-100 rounded-xl p-5 flex items-center gap-4 hover:border-gray-200 transition-colors">
                {/* Avatar avec initiales */}
                <div className="w-12 h-12 rounded-full bg-[#E1F5EE] flex items-center justify-center text-sm font-medium text-[#0F6E56]">
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                  {/* Localisation du membre */}
                  <p className="text-xs text-[#1D9E75] mt-1">{member.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section bureaux */}
        <div className="mb-20">
          <h2 className="text-xl font-medium text-gray-900 mb-8">Nos bureaux</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Bureau de Bruxelles */}
            <div className="border border-gray-100 rounded-xl p-6 hover:border-gray-200 transition-colors">
              <div className="text-2xl mb-3">🇧🇪</div>
              <p className="font-medium text-gray-900 mb-1">Bruxelles, Belgique</p>
              <p className="text-sm text-gray-500">Bureau Europe — Marché UE & international</p>
              <a href="mailto:contact@zarotech.be"
                className="text-sm text-[#1D9E75] mt-2 block hover:text-[#0F6E56] transition-colors">
                 zarotech@gmail.com
              </a>
            </div>
            {/* Bureau de Yaoundé */}
            <div className="border border-gray-100 rounded-xl p-6 hover:border-gray-200 transition-colors">
              <div className="text-2xl mb-3">🇨🇲</div>
              <p className="font-medium text-gray-900 mb-1">Yaoundé, Cameroun</p>
              <p className="text-sm text-gray-500">Bureau Afrique — Marchés Afrique francophone</p>
              <a href="mailto:contact@zarotech.cm"
                className="text-sm text-[#1D9E75] mt-2 block hover:text-[#0F6E56] transition-colors">
                zarotech@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Appel à l'action final */}
        <div className="border border-gray-100 rounded-xl p-8 text-center">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Prêt à démarrer votre projet ?
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Contactez-nous et obtenez un devis sous 24h.
          </p>
          <Link href="/contact"
            className="bg-[#1D9E75] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0F6E56] transition-colors">
            Nous contacter
          </Link>
        </div>

      </main>

      {/* Pied de page */}
      <Footer />
    </>
  );
}