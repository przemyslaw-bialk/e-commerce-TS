"use server";
import dbConnect from "@lib/mongodb";
import Item from "@models/Item";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id: string) {
  await dbConnect();

  await Item.findByIdAndDelete(id);

  revalidatePath("/dashboard/products/manage");
}
