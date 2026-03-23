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
  };

  // to force re-render
  const handleDelete = (id: string) => {
    setItems((items) => items.filter((item) => item._id !== id));
  };

  return (
    <div>
      {items.map((item) => (
        <ul className="flex flex-col gap-2" key={item._id}>
          <div className="border border-zinc-300 mt-3 p-2">
            <div className=" flex items-end justify-between ">
              <li>
                <span>
                  <span className="font-bold">Name:</span> {item.name}
                </span>
                <UpdateProductButton id={item._id} onUpdate={fetchItems} />
              </li>
              <li>
                <DeleteProduct
                  id={item._id}
                  onDelete={() => handleDelete(item._id)}
                />
              </li>
            </div>
            <li className="flex gap-2 ">
              <span>
                <span className="font-bold">Price:</span> {item.price}
              </span>
              <span>
                <span className="font-bold">Quantity:</span> {item.qtn}
              </span>
            </li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default ProductsList;
