import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

    try {
        
    const { firstname, email, message, fax } = req.body;

    // --- RECOMENDACIÓN DE SEGURIDAD: HONEYPOT ---
    // Si el campo "fax" tiene contenido, es un bot (porque el campo es invisible para humanos)
    if (fax) {
      return res.status(400).json({ message: "Bot detected" });
    }

    // Validación básica
    if (!firstname || !email || !message) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Luego cambias a tu dominio verificado
      to: [process.env.CONTACT_EMAIL],
      subject: `Mensaje desde el sitio web de Frabel Viajes de: ${firstname}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #333;">Correo desde el sitio web</h2>
          <p><strong>Nombre/Empresa:</strong> ${firstname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="background: #f9f9f9; padding: 15px;"><strong>Mensaje:</strong><br/>${message}</p>
        </div>
      `,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}