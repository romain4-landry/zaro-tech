// API Route pour sauvegarder les devis et envoyer les emails
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendDevisNotification, sendDevisConfirmation } from "@/lib/mail";

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS length:", process.env.SMTP_PASS?.length);
console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
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

    // 1. Sauvegarder en base de données
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

    console.log("Devis sauvegardé:", devis.id);

    // 2. Envoyer email de notification à l'équipe Zaro Tech
    await sendDevisNotification(data);
    console.log("Email de notification envoyé");

    // 3. Envoyer email de confirmation au client
    await sendDevisConfirmation(data);
    console.log("Email de confirmation envoyé au client");

    return NextResponse.json({
      success: true,
      message: "Demande reçue ! Nous vous recontactons sous 24h.",
    });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}