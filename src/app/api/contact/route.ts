import { siteConfig } from "@/lib/utils";
import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Servicio de correo no configurado." },
        { status: 503 }
      );
    }

    const body = (await request.json()) as ContactPayload;
    const { name, email, phone, company, service, message } = body;

    if (!name?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Completa los campos obligatorios." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_EMAIL ?? siteConfig.email;
    const from =
      process.env.RESEND_FROM ?? "Francisco Paula <onboarding@resend.dev>";

    const resend = new Resend(process.env.RESEND_API_KEY);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error: ownerError } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[${siteConfig.brandName}] Nueva consulta — ${service}`,
      html: `
        <h2>Nueva solicitud desde franciscopaula.com</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Servicio:</strong> ${escapeHtml(service)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (ownerError) {
      console.error("Resend error (owner):", ownerError);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta por WhatsApp." },
        { status: 500 }
      );
    }

    // Confirmación automática al cliente
    const { error: clientError } = await resend.emails.send({
      from,
      to: [email],
      subject: `Gracias por contactar a ${siteConfig.brandName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#111827">
          <h2 style="color:#2563EB">¡Gracias por contactarnos, ${escapeHtml(name)}!</h2>
          <p>Hemos recibido tu solicitud sobre <strong>${escapeHtml(service)}</strong>.</p>
          <p>Nos pondremos en comunicación contigo en menos de <strong>24 horas</strong>.</p>
          <p style="margin-top:24px;color:#6B7280;font-size:14px">
            ${siteConfig.brandName}<br>
            ${siteConfig.brandTagline}<br>
            <a href="${siteConfig.url}">${siteConfig.url}</a>
          </p>
        </div>
      `,
    });

    if (clientError) {
      // No bloqueamos el envío si falla la confirmación (p. ej. dominio sin verificar)
      console.error("Resend error (auto-reply):", clientError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error interno. Intenta de nuevo más tarde." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
