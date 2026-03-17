"use client";

import { Item } from "@models/Item";
import { getItems } from "app/_services/item.service";
import { useEffect, useState } from "react";
import DeleteProduct from "./DeleteProduct";

const ProductsList = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
    console.log(data);
  };

  return (
    <div>
      {items.map((item) => (
        <ul key={item._id} className="flex flex-col">
          <li className="mt-4">
            {item.name}
            <DeleteProduct id={item._id} />
          </li>
          <div className="flex gap-2 border border-b-2">
            <li>Price: {item.price}</li>
            <li>Quantity: {item.qtn}</li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default ProductsList;
