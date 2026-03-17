// import dbConnect from "@lib/mongodb";
import { Item } from "@models/Item";

export const getItems = async (): Promise<Item[]> => {
  const res = await fetch("/api/items", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("failed to fetch items");
  const json = await res.json();
  return json.data;
};

// export const deleteItem = async (id: string) => {
//   await dbConnect();

//   try {
//     const item = await Item.findByIdAndDelete(id);
//     return item;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to delete item");
//   }
// };
