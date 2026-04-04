// import { auth } from "@clerk/nextjs/server";
import dbConnect from "@lib/mongodb";
import Item from "@models/Item";
// import { authorizeAdmin } from "app/_services/user.service";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  // protecting route

  // const { userId } = await auth();
  // if (!userId) {
  //   return new Response("Unauthorized", { status: 401 });
  // }

  // const admin = await authorizeAdmin(userId);

  // if (!admin) {
  //   return new Response("Forbidden", { status: 403 });
  // }

  try {
    const { id } = params;
    const {
      newPrice: price,
      newName: name,
      newStock: stock,
    } = await request.json();

    await dbConnect();
    const updated = await Item.findByIdAndUpdate(
      id,
      { price, name, stock },
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

export async function GET({ params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const item = await Item.findById(params.id);

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ data: item }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
