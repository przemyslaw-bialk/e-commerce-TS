"use client";

import { Item } from "@models/Item";
import { addProduct } from "app/features/products/productSlice";
import { useDispatch } from "react-redux";

type Props = {
  product: Item;
};

const AddToCartButton = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };

  return <button onClick={handleAddToCart}>add to cart</button>;
};

export default AddToCartButton;
