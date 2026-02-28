"use client";
import { Item } from "@models/Item";
import { getItems } from "app/_services/item.service";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  return (
    <div>
      <h2>PRODUCTS</h2>
      <div>
        <ProductCard items={items} />
      </div>
    </div>
  );
};

export default Products;
