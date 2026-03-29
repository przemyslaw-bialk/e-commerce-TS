"use server";
import dbConnect from "@lib/mongodb";
import Item from "@models/Item";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const product = {
    name: formData.get("name") as string,
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
    description: formData.get("description"),
  };

  await dbConnect();
  await Item.create(product);

  revalidatePath("/dashboard");
}
