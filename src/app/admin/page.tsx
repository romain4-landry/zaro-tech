// Page admin — accès réservé au rôle ADMIN
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

// Interface pour les devis
interface Devis {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  domain: string;
  budget?: string;
  deadline?: string;
  message?: string;
  status: string;
  createdAt: string;
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [devis, setDevis] = useState<Devis[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("devis");

  // Rediriger si pas connecté ou pas admin
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (status === "authenticated") {
      const role = (session?.user as { role?: string })?.role;
      if (role !== "ADMIN") {
        router.push("/dashboard");
      }
    }
  }, [status, session, router]);

  // Charger les devis
  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/admin/devis")
        .then((res) => res.json())
        .then((data) => {
          setDevis(data.devis || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-400">Chargement...</p>
      </div>
    );
  }

  if (!session) return null;

  // Couleur selon statut devis
  function getStatusStyle(status: string) {
    switch (status) {
      case "EN_ATTENTE": return "bg-amber-50 text-amber-700";
      case "EN_TRAITEMENT": return "bg-blue-50 text-blue-700";
      case "ACCEPTE": return "bg-[#E1F5EE] text-[#0F6E56]";
      case "REFUSE": return "bg-red-50 text-red-700";
      default: return "bg-gray-50 text-gray-600";
    }
  }

  function getStatusLabel(status: string) {
    switch (status) {
      case "EN_ATTENTE": return "En attente";
      case "EN_TRAITEMENT": return "En traitement";
      case "ACCEPTE": return "Accepté";
      case "REFUSE": return "Refusé";
      default: return status;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar admin */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-lg font-medium text-gray-900">
              Zaro<span className="text-[#1D9E75]">Tech</span>
            </Link>
            <span className="text-xs bg-[#E1F5EE] text-[#0F6E56] px-2.5 py-1 rounded-full font-medium">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">{session.user?.email}</p>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-xs text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Titre */}
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-1">
            Tableau de bord admin
          </h1>
          <p className="text-sm text-gray-500">
            Gérez les devis, clients et projets de Zaro Tech.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total devis", value: devis.length },
            { label: "En attente", value: devis.filter(d => d.status === "EN_ATTENTE").length },
            { label: "En traitement", value: devis.filter(d => d.status === "EN_TRAITEMENT").length },
            { label: "Acceptés", value: devis.filter(d => d.status === "ACCEPTE").length },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
              <p className="text-2xl font-medium text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["devis", "clients"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm px-4 py-2 rounded-lg transition-colors capitalize ${
                activeTab === tab
                  ? "bg-[#1D9E75] text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab === "devis" ? "Devis reçus" : "Clients"}
            </button>
          ))}
        </div>

        {/* Liste des devis */}
        {activeTab === "devis" && (
          <div className="flex flex-col gap-3">
            {loading ? (
              <p className="text-sm text-gray-400">Chargement des devis...</p>
            ) : devis.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-xl p-8 text-center">
                <p className="text-sm text-gray-400">Aucun devis reçu pour l&apos;instant.</p>
              </div>
            ) : (
              devis.map((d) => (
                <div key={d.id} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-gray-900">{d.name}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusStyle(d.status)}`}>
                          {getStatusLabel(d.status)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{d.email}</p>
                    </div>
                    <p className="text-xs text-gray-400">
                      {new Date(d.createdAt).toLocaleDateString("fr-BE", {
                        day: "numeric", month: "long", year: "numeric"
                      })}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
                      {d.service}
                    </span>
                    <span className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
                      {d.domain}
                    </span>
                    {d.budget && (
                      <span className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
                        {d.budget}
                      </span>
                    )}
                    {d.deadline && (
                      <span className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
                        {d.deadline}
                      </span>
                    )}
                  </div>
                  {d.message && (
                    <p className="text-xs text-gray-500 mt-3 bg-gray-50 px-3 py-2 rounded-lg">
                      {d.message}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Clients */}
        {activeTab === "clients" && (
          <div className="bg-white border border-gray-100 rounded-xl p-8 text-center">
            <p className="text-sm text-gray-400">
              Liste des clients — à venir prochainement.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}