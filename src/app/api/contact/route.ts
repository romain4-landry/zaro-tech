import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, domain } = body;

    if (!name || !email || !service || !domain) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    console.log("Nouveau devis reçu:", body);

    return NextResponse.json({
      success: true,
      message: "Demande reçue ! Nous vous recontactons sous 24h.",
    });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}