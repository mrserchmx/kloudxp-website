import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const data = await request.json();
    const { name, email, phone, service, subject, message, 'cf-turnstile-response': turnstileToken } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan campos obligatorios (Nombre, Email y Mensaje)' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Formato de correo electrónico inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Cloudflare Turnstile Verification
    const env = (locals as any)?.runtime?.env;
    const turnstileSecret = env?.TURNSTILE_SECRET_KEY || process.env.TURNSTILE_SECRET_KEY;

    if (turnstileSecret && turnstileToken) {
      const ip = request.headers.get('CF-Connecting-IP') || '';
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
          remoteip: ip
        })
      });
      const outcome = await verifyRes.json() as { success: boolean };
      if (!outcome.success) {
        return new Response(JSON.stringify({ error: 'Verificación de seguridad Turnstile fallida' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Optional Cloudflare D1 SQL storage
    const db = env?.DB;
    if (db) {
      try {
        await db.prepare(`
          CREATE TABLE IF NOT EXISTS leads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            service TEXT,
            subject TEXT,
            message TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          )
        `).run();

        await db.prepare(`
          INSERT INTO leads (name, email, phone, service, subject, message)
          VALUES (?, ?, ?, ?, ?, ?)
        `).bind(name, email, phone || '', service || '', subject || '', message).run();
      } catch (dbError) {
        console.error('D1 Storage Warning:', dbError);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Solicitud recibida exitosamente en el Edge de Cloudflare.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
