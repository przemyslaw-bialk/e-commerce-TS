import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const eventType = evt.type;
    const { id } = evt.data;

    console.log(`WEBHOOK HIT: ${eventType} - ${id}`);

    if (eventType === "user.created") {
      console.log("USER CREATED:", evt.data.first_name, evt.data.last_name);
    }

    if (eventType === "user.deleted") {
      console.log("USER DELETED:", id);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("WEBHOOK ERROR:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}

export async function GET() {
  return new Response("Webhook endpoint działa", { status: 200 });
}
