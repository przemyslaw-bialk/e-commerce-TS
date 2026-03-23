"use client";

import { Item } from "@models/Item";
import { getItems } from "app/_services/item.service";
import { useEffect, useState } from "react";
import DeleteProduct from "./DeleteProduct";
import UpdateProductButton from "./UpdateProductButton";

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

  // to force re-render
  const handleDelete = (id: string) => {
    setItems((items) => items.filter((item) => item._id !== id));
  };

  return (
    <div>
      {items.map((item) => (
        <ul className="flex flex-col gap-2" key={item._id}>
          <li>
            {item.name}
            <DeleteProduct
              id={item._id}
              onDelete={() => handleDelete(item._id)}
            />
          </li>
          <li>
            <UpdateProductButton id={item._id} onUpdate={fetchItems} />
          </li>
          <li className="flex gap-2 border border-b-2">
            <span>Price: {item.price}</span>
            <span>Quantity: {item.qtn}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductsList;
