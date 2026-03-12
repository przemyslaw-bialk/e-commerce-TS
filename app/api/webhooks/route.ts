import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { createOrUpdateUser, deleteUser } from "../../_services/user.service";

export const runtime = "nodejs";

// CREATE USER
export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const eventType = evt.type;
    const { id } = evt.data;

    console.log(`WEBHOOK HIT: ${eventType} - ${id}`);

    if (eventType === "user.created" || eventType === "user.updated") {
      console.log("USER CREATED:", evt.data.first_name, evt.data.last_name);
      const { id, first_name, last_name, email_addresses } = evt.data;

      try {
        await createOrUpdateUser(id, first_name, last_name, email_addresses);
        return new Response("user created", {
          status: 200,
        });
      } catch (error) {
        console.log(error);
        return new Response("couldnt save user", { status: 400 });
      }
    }

    // DELETE USER
    if (eventType === "user.deleted") {
      await deleteUser(id);
      return new Response("user deleted", {
        status: 200,
      });
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
