// Page de connexion de l'espace client Zaro Tech
"use client";

// On importe signIn depuis NextAuth pour gérer la connexion
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  // État du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // État pour afficher les erreurs et le chargement
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Hook pour rediriger après connexion
  const router = useRouter();

  // Fonction appelée quand l'utilisateur soumet le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setLoading(true);
    setError("");

    // On appelle signIn de NextAuth avec les identifiants
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // On gère la redirection manuellement
    });

    if (result?.error) {
      // Connexion échouée — on affiche un message d'erreur
      setError("Email ou mot de passe incorrect.");
      setLoading(false);
    } else {
      // Connexion réussie — on redirige vers le dashboard
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">

      {/* Logo en haut */}
      <Link href="/" className="text-xl font-medium text-gray-900 mb-10">
        Zaro<span className="text-[#1D9E75]">Tech</span>
      </Link>

      {/* Carte du formulaire */}
      <div className="w-full max-w-sm border border-gray-100 rounded-2xl p-8">

        {/* Titre */}
        <h1 className="text-lg font-medium text-gray-900 mb-1">
          Connexion
        </h1>
        <p className="text-xs text-gray-400 mb-6">
          Accédez à votre espace client
        </p>

        {/* Formulaire de connexion */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Champ email */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors"
              placeholder="vous@exemple.com"
            />
          </div>

          {/* Champ mot de passe */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Mot de passe
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* Message d'erreur si connexion échouée */}
          {error && (
            <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          {/* Bouton de connexion */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1D9E75] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0F6E56] transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        {/* Comptes de test pour le développement */}
        <div className="mt-6 border-t border-gray-50 pt-4">
          <p className="text-xs text-gray-400 mb-2">Comptes de test :</p>
          <p className="text-xs text-gray-400">
            Admin : admin@zarotech.be / admin123
          </p>
          <p className="text-xs text-gray-400">
            Client : client@test.com / client123
          </p>
        </div>
      </div>

      {/* Lien retour accueil */}
      <Link href="/" className="text-xs text-gray-400 mt-6 hover:text-gray-600">
        ← Retour à l&apos;accueil
      </Link>
    </div>
  );
}