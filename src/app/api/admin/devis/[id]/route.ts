// API Admin — modifier le statut d'un devis et notifier le client
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendStatusUpdate } from "@/lib/mail";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await req.json();

    // Mettre à jour le statut dans la base
    const devis = await prisma.devis.update({
      where: { id: params.id },
      data: { status },
    });

    // Envoyer email de notification au client
    await sendStatusUpdate({
      name: devis.name,
      email: devis.email,
      service: devis.service,
      status,
    });

    console.log(`Statut mis à jour: ${devis.id} → ${status}`);

    return NextResponse.json({ success: true, devis });
  } catch (error) {
    console.error("Erreur mise à jour statut:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}