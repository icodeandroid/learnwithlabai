export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(v, max = 1200) {
  return String(v ?? "").trim().slice(0, max);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without processing them.
  if (clean(body.company)) {
    return Response.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 40),
    track: clean(body.track, 120),
    batch: clean(body.batch, 120),
    experience: clean(body.experience, 80),
    message: clean(body.message, 2000),
    submittedAt: new Date().toISOString(),
    source: "learnwithlabai-landing",
  };

  if (!lead.name || !lead.email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!EMAIL_RE.test(lead.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // ---------------------------------------------------------------------
  // Delivery. Set LEAD_WEBHOOK_URL in .env.local (or your host's env vars)
  // to an n8n / Make / Zapier webhook and every lead is forwarded there.
  // Without it the lead is logged to the server console so nothing breaks
  // in local development or on a fresh deploy.
  // ---------------------------------------------------------------------
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.LEAD_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(lead),
      });

      if (!res.ok) {
        console.error("[contact] webhook responded", res.status);
        return Response.json(
          { error: "We couldn't submit that right now. Please try again shortly." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("[contact] webhook failed", err);
      return Response.json(
        { error: "We couldn't submit that right now. Please try again shortly." },
        { status: 502 }
      );
    }
  } else {
    console.log("[contact] new lead:", lead);
  }

  return Response.json({ ok: true });
}

export async function GET() {
  return Response.json({ error: "Method not allowed." }, { status: 405 });
}
