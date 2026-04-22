// API Route pour sauvegarder les devis et envoyer les emails
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendDevisNotification, sendDevisConfirmation } from "@/lib/mail";

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

    // 2. Notification à l'équipe
    await sendDevisNotification(data);

    // 3. Confirmation au client
    await sendDevisConfirmation(data);

    return NextResponse.json({
      success: true,
      message: "Demande reçue ! Nous vous recontactons sous 24h.",
    });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}