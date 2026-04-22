// API Admin — récupérer tous les devis
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Vérifier que l'utilisateur est admin
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }

    // Récupérer tous les devis triés par date
    const devis = await prisma.devis.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ devis });
  } catch (error) {
    console.error("Erreur récupération devis:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}