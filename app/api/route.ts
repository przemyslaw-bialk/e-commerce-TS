import dbConnect from "@lib/mongodb";
import Item from "@models/Item";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const items = await Item.find({});
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    console.error("GET /api/items error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch items" },
      { status: 500 },
    );
  }
}
