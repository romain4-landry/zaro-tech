// Layout racine — enveloppe toutes les pages de l'application
import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata: Metadata = {
  title: "Zaro Tech — Agence Web & Solutions Digitales",
  description:
    "Zaro Tech conçoit des sites web modernes et des chatbots intelligents pour l'agriculture, le football et bien au-delà. Basés à Bruxelles et Yaoundé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* SessionWrapper fournit le contexte d'authentification à toute l'app */}
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}