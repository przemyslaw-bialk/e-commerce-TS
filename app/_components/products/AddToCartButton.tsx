"use client";

import { Item } from "@models/Item";
import { addProduct } from "app/features/products/productSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  product: Item;
};

const AddToCartButton = ({ product }: Props) => {
  const dispatch = useDispatch();
  const [qtn, setQtn] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        qtn,
      }),
    );
  };

  return (
    <div>
      <input
        type="number"
        min={1}
        value={qtn}
        onChange={(e) => setQtn(Number(e.target.value))}
      />
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
};

export default AddToCartButton;
