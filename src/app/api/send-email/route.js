import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  try {
    const { email, name, score } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Ne touche pas à ça
      // EN MODE TEST : On force l'envoi vers ton email à toi pour vérifier le design
      to: 'waddlybernlouisjean@gmail.com', 
      subject: `Resultat Test TaxForce: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #2563eb;">TaxForce Elite Assessment</h1>
          <p>Bonjour,</p>
          <p>Le candidat <strong>${name}</strong> (${email}) vient de terminer le test.</p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 18px; margin: 0;">Score Final : <strong>${score}/100</strong></p>
          </div>
          <p>Connectez-vous à la plateforme Admin pour voir les détails des réponses.</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}