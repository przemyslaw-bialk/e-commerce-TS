"use client";

import { getItems, Item } from "app/_services/item.service";
import { useEffect, useState } from "react";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "products",
//   description: "selling the best products on the planet",
// };

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
