// Page dashboard — espace client protégé
// Seuls les utilisateurs connectés peuvent y accéder
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

// Données de test — projets fictifs du client
// Plus tard ces données viendront de la base de données
const projects = [
  {
    id: "1",
    title: "Site vitrine Zaro Tech",
    status: "EN_COURS",
    progress: 65,
    startDate: "01/04/2025",
    endDate: "30/06/2025",
    service: "Développement web",
  },
  {
    id: "2",
    title: "Chatbot Agriculture",
    status: "EN_REVISION",
    progress: 85,
    startDate: "15/03/2025",
    endDate: "15/05/2025",
    service: "Chatbot IA",
  },
  {
    id: "3",
    title: "Flyers campagne printemps",
    status: "LIVRE",
    progress: 100,
    startDate: "01/03/2025",
    endDate: "20/03/2025",
    service: "Flyers & print",
  },
];

// Fonction qui retourne la couleur du badge selon le statut
function getStatusStyle(status: string) {
  switch (status) {
    case "EN_COURS":
      return "bg-blue-50 text-blue-700";
    case "EN_REVISION":
      return "bg-amber-50 text-amber-700";
    case "LIVRE":
      return "bg-[#E1F5EE] text-[#0F6E56]";
    case "ANNULE":
      return "bg-red-50 text-red-700";
    default:
      return "bg-gray-50 text-gray-600";
  }
}

// Fonction qui traduit le statut en français lisible
function getStatusLabel(status: string) {
  switch (status) {
    case "EN_COURS": return "En cours";
    case "EN_REVISION": return "En révision";
    case "LIVRE": return "Livré";
    case "ANNULE": return "Annulé";
    default: return status;
  }
}

export default function DashboardPage() {
  // On récupère la session de l'utilisateur connecté
  const { data: session, status } = useSession();
  const router = useRouter();

  // Si l'utilisateur n'est pas connecté, on le redirige vers /login
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Pendant le chargement de la session, on affiche un écran d'attente
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-400">Chargement...</p>
      </div>
    );
  }

  // Si pas de session, on n'affiche rien (la redirection est en cours)
  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Barre de navigation du dashboard */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-gray-900">
            Zaro<span className="text-[#1D9E75]">Tech</span>
          </Link>

          {/* Infos de l'utilisateur connecté */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {session.user?.name}
              </p>
              <p className="text-xs text-gray-400">{session.user?.email}</p>
            </div>

            {/* Bouton de déconnexion */}
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-xs text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Message de bienvenue */}
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-1">
            Bonjour, {session.user?.name?.split(" ")[0]} 👋
          </h1>
          <p className="text-sm text-gray-500">
            Voici l&apos;état de vos projets en cours.
          </p>
        </div>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Projets total", value: projects.length },
            { label: "En cours", value: projects.filter(p => p.status === "EN_COURS").length },
            { label: "En révision", value: projects.filter(p => p.status === "EN_REVISION").length },
            { label: "Livrés", value: projects.filter(p => p.status === "LIVRE").length },
          ].map((stat) => (
            <div key={stat.label}
              className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
              <p className="text-2xl font-medium text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Liste des projets */}
        <div>
          <h2 className="text-base font-medium text-gray-900 mb-4">
            Mes projets
          </h2>
          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <div key={project.id}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-colors">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    {/* Titre et badge de statut */}
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {project.title}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusStyle(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      {project.service} · {project.startDate} → {project.endDate}
                    </p>
                  </div>
                  {/* Pourcentage d'avancement */}
                  <span className="text-sm font-medium text-gray-900">
                    {project.progress}%
                  </span>
                </div>

                {/* Barre de progression */}
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-[#1D9E75] h-1.5 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lien vers la page contact */}
        <div className="mt-10 border border-gray-100 rounded-xl p-6 bg-white text-center">
          <p className="text-sm font-medium text-gray-900 mb-1">
            Besoin d&apos;un nouveau service ?
          </p>
          <p className="text-xs text-gray-400 mb-4">
            Contactez-nous pour démarrer un nouveau projet.
          </p>
          <Link href="/contact"
            className="bg-[#1D9E75] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0F6E56] transition-colors">
            Demander un devis
          </Link>
        </div>

      </main>
    </div>
  );
}