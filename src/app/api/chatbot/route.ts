import { NextRequest, NextResponse } from "next/server";

const systemPrompts: Record<string, string> = {
  AGRICULTURE:
    "Tu es un expert agronome spécialisé en agriculture camerounaise et africaine. Tu donnes des conseils pratiques sur les cultures, les périodes de semis, l'irrigation, les maladies des plantes et les marchés agricoles locaux. Réponds en français, de manière concise et utile.",
  FOOTBALL:
    "Tu es un expert en football africain et international. Tu connais les statistiques, résultats, calendriers et actualités des compétitions comme la Ligue 1, la Champions League et la CAN. Réponds en français, de manière précise.",
  GENERAL:
    "Tu es l'assistant de Zaro Tech, une agence web basée à Bruxelles et Yaoundé. Tu aides les visiteurs à comprendre les services de l'agence, à demander des devis et à répondre à leurs questions. Réponds en français, de manière professionnelle et chaleureuse.",
};

export async function POST(req: NextRequest) {
  try {
    const { message, domain, sessionId } = await req.json();

    if (!message || !domain) {
      return NextResponse.json(
        { error: "Message et domaine requis." },
        { status: 400 }
      );
    }

    const systemPrompt = systemPrompts[domain] || systemPrompts.GENERAL;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

console.log("Groq response status:", response.status);
console.log("Groq response data:", JSON.stringify(data));

if (!response.ok) {
  return NextResponse.json(
    { error: "Erreur du service IA." },
    { status: 502 }
  );
}

    const reply = data.choices?.[0]?.message?.content || "Je n'ai pas pu générer une réponse.";

    return NextResponse.json({ reply, sessionId });
  } catch (error) {
    console.error("Chatbot error:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}