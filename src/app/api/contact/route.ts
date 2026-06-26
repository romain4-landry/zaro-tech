// API Route pour sauvegarder les devis et envoyer les emails
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendDevisNotification, sendDevisConfirmation } from "@/lib/mail";

// Force cette route en dynamique (utilise prisma + envoi d'emails)
export const dynamic = "force-dynamic";

// Schéma de validation
const devisSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  service: z.string().min(1, "Service requis"),
  domain: z.string().min(1, "Domaine requis"),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation des données
    const result = devisSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides.", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // 1. Sauvegarder en base de données (PRIORITÉ - ne jamais perdre un lead)
    const devis = await prisma.devis.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        domain: data.domain,
        budget: data.budget,
        deadline: data.deadline,
        message: data.message,
      },
    });

    console.log("✅ Devis sauvegardé:", devis.id);

    // 2. Envoyer les emails (tolérant aux erreurs - le devis est déjà sauvé)
    const emailResults = await Promise.allSettled([
      sendDevisNotification(data),
      sendDevisConfirmation(data),
    ]);

    emailResults.forEach((result, index) => {
      const emailType = index === 0 ? "notification équipe" : "confirmation client";
      if (result.status === "rejected") {
        console.error(`❌ Erreur email (${emailType}):`, result.reason);
      } else {
        console.log(`✅ Email envoyé (${emailType})`);
      }
    });

    // 3. Retourner succès (même si email plante, le devis est en DB)
    return NextResponse.json({
      success: true,
      message: "Demande reçue ! Nous vous recontactons sous 24h.",
      devisId: devis.id,
    });
  } catch (error) {
    console.error("❌ Erreur critique API /contact:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Réessayez ou contactez-nous directement." },
      { status: 500 }
    );
  }
}