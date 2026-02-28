import { Item } from "@models/Item";

export const getItems = async (): Promise<Item[]> => {
  const res = await fetch("/api/items");

  if (!res.ok) throw new Error("failed to fetch items");
  const json = await res.json();
  return json.data;
};
