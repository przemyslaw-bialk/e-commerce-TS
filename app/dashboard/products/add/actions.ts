"use server";
import dbConnect from "@lib/mongodb";
import Item from "@models/Item";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const product = {
    name: formData.get("name") as string,
    price: Number(formData.get("price")),
    qtn: Number(formData.get("qtn")),
    description: formData.get("description"),
  };

  await dbConnect();
  await Item.create(product);

  revalidatePath("/dashboard/add");
}
