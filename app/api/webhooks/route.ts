import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import createOrUpdateUser from "app/_services/user.service";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const eventType = evt.type;

    if (eventType === "user.created" || eventType === "user.updated") {
      const { id, first_name, last_name, email_addresses } = evt.data;

      const email = email_addresses?.[0]?.email_address;

      if (!email) {
        return new Response("Email missing", { status: 400 });
      }

      await createOrUpdateUser(
        id,
        first_name as string,
        last_name as string,
        email,
      );

      return new Response("User synced", { status: 200 });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }
}
