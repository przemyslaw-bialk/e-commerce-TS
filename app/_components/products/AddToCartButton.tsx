"use client";

import { Item } from "@models/Item";
import { addProduct } from "app/features/products/productSlice";
import { RootState } from "app/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  product: Item;
};

type CartItem = Item & {
  qtn: number;
};

const AddToCartButton = ({ product }: Props) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.allProducts,
  ) as CartItem[];

  // checking if current product qtn is greater than stock
  const exsistingProduct = products.find((item) => item._id === product._id);
  const currentQtn = exsistingProduct ? exsistingProduct.qtn : 0;

  const [qtn, setQtn] = useState(1);

  const handleAddToCart = () => {
    if (currentQtn + qtn > product.stock) {
      console.log("not enough stock");
    } else
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
