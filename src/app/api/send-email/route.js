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
      // ... début du fichier ...
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #2563eb;">TaxForce Elite - Application Received</h1>
          <p>Hello <strong>${name}</strong>,</p>
          <p>This email confirms that we have successfully received your assessment for the Intuit TurboTax Live Agent position.</p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;">Status: <strong>Under Review</strong></p>
          </div>
          <p>Our team is currently evaluating your responses regarding Customer Service soft skills and US Tax knowledge.</p>
          <p>We will contact you shortly if you are selected for the next step.</p>
          <br>
          <p>Best regards,</p>
          <p>The Recruitment Team</p>
        </div>
      `,
      // ... fin du fichier ...
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}