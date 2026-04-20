// Configuration de NextAuth — gestion de l'authentification
// Ce fichier définit comment les utilisateurs se connectent

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Configuration principale de NextAuth
const handler = NextAuth({
  // On utilise CredentialsProvider = connexion par email + mot de passe
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },

      // Fonction appelée quand l'utilisateur soumet le formulaire de connexion
      async authorize(credentials) {
        // TODO: plus tard on vérifiera en base de données
        // Pour l'instant on utilise des comptes de test codés en dur

        const users = [
          {
            id: "1",
            email: "admin@zarotech.be",
            password: "admin123",
            name: "Admin Zaro Tech",
            role: "ADMIN",
          },
          {
            id: "2",
            email: "client@test.com",
            password: "client123",
            name: "Client Test",
            role: "CLIENT",
          },
        ];

        // On cherche l'utilisateur correspondant à l'email saisi
        const user = users.find(
          (u) =>
            u.email === credentials?.email &&
            u.password === credentials?.password
        );

        // Si l'utilisateur est trouvé, on le retourne (connexion réussie)
        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        }

        // Sinon on retourne null (connexion échouée)
        return null;
      },
    }),
  ],

  // Callbacks — fonctions appelées à chaque étape de l'auth
  callbacks: {
    // jwt — appelé quand le token est créé ou mis à jour
    async jwt({ token, user }) {
      // On ajoute le rôle dans le token
      if (user) {
        token.role = (user as { role?: string }).role;
      }
      return token;
    },

    // session — appelé quand la session est lue côté client
    async session({ session, token }) {
      // On ajoute le rôle dans la session
      if (session.user) {
        (session.user as { role?: string }).role = token.role as string;
      }
      return session;
    },
  },

  // Pages personnalisées
  pages: {
    signIn: "/login", // Rediriger vers notre propre page de login
  },

  // Stratégie de session : JWT (token stocké côté client)
  session: {
    strategy: "jwt",
  },
});

// On exporte le handler pour les méthodes GET et POST
export { handler as GET, handler as POST };