import { Resend } from "resend";

interface DevisEmailData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  domain: string;
  budget?: string;
  deadline?: string;
  message?: string;
}

export async function sendDevisNotification(data: DevisEmailData) {
  // On initialise Resend ici pour s'assurer que la clé est chargée
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Zaro Tech <onboarding@resend.dev>",
    to: process.env.MAIL_TO!,
    subject: `Nouveau devis — ${data.service} (${data.domain})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1D9E75; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">ZaroTech</h1>
          <p style="color: #E1F5EE; margin: 5px 0 0;">Nouvelle demande de devis</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Nom</td><td style="padding: 8px 0; font-weight: bold;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; color: #1D9E75;">${data.email}</td></tr>
            ${data.phone ? `<tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #666;">Service</td><td style="padding: 8px 0;">${data.service}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Domaine</td><td style="padding: 8px 0;">${data.domain}</td></tr>
            ${data.budget ? `<tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${data.budget}</td></tr>` : ""}
            ${data.deadline ? `<tr><td style="padding: 8px 0; color: #666;">Délai</td><td style="padding: 8px 0;">${data.deadline}</td></tr>` : ""}
          </table>
          ${data.message ? `
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #1D9E75;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px;">Message</p>
            <p style="color: #111; margin: 0;">${data.message}</p>
          </div>` : ""}
        </div>
        <div style="padding: 20px; text-align: center; background: white; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px; margin: 0;">© 2025 Zaro Tech — Bruxelles · Yaoundé</p>
        </div>
      </div>
    `,
  });
}

export async function sendDevisConfirmation(data: DevisEmailData) {
  // On initialise Resend ici pour s'assurer que la clé est chargée
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Zaro Tech <onboarding@resend.dev>",
    to: data.email,
    subject: "Votre demande de devis a bien été reçue — Zaro Tech",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1D9E75; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">ZaroTech</h1>
        </div>
        <div style="padding: 30px;">
          <h2 style="color: #111;">Bonjour ${data.name},</h2>
          <p style="color: #555; line-height: 1.6;">
            Nous avons bien reçu votre demande de devis pour <strong>${data.service}</strong>.
            Notre équipe va l'étudier et vous recontactera sous <strong>24h</strong>.
          </p>
          <div style="background: #E1F5EE; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #0F6E56; margin: 0;">✅ Demande enregistrée avec succès</p>
          </div>
          <p style="color: #555;">
            Cordialement,<br/>
            <strong style="color: #1D9E75;">L'équipe Zaro Tech</strong><br/>
            Bruxelles · Yaoundé
          </p>
        </div>
        <div style="padding: 20px; text-align: center; background: #f9f9f9; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px; margin: 0;">© 2025 Zaro Tech — contact@zarotech.be</p>
        </div>
      </div>
    `,
  });
}