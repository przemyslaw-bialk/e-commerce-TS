export interface Item {
  _id?: string;
  name: string;
  price: number;
  qtn: number;
  description?: string;
}

export const getItems = async (): Promise<Item[]> => {
  const res = await fetch("/api/items");

  if (!res.ok) throw new Error("failed to fetch items");
  const json = await res.json();
  return json.data;
};
