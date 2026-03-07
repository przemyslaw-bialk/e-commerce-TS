"use client";

import { getItems } from "app/_services/item.service";
import { Item } from "@models/Item";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [items, setItems] = useState<Item[]>([]);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
    console.log(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>items page</h2>
      {items.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
    </div>
  );
}
