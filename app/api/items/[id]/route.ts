import dbConnect from "@lib/mongodb";
import Item from "@models/Item";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const {
      newPrice: price,
      newName: name,
      newQtn: qtn,
    } = await request.json();

    await dbConnect();
    const updated = await Item.findByIdAndUpdate(
      id,
      { price, name, qtn },
      { new: true },
    );

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 },
    );
  }
}
