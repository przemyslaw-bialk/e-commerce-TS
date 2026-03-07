import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import createOrUpdateUser from "app/_services/user.service";

export async function POST(req: NextRequest) {
  console.log("WEBHOOK HIT");

  try {
    const evt = await verifyWebhook(req);

    if (evt.type === "user.created" || evt.type === "user.updated") {
      const { id, first_name, last_name, email_addresses } = evt.data;

      const email = email_addresses?.[0]?.email_address;

      if (!email) {
        return new Response("Email missing", { status: 400 });
      }

      await createOrUpdateUser(id, first_name ?? "", last_name ?? "", email);

      console.log("User saved to MongoDB");

      return new Response("User synced", { status: 200 });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }
}
