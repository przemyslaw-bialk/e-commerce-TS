"use client";

import { Item } from "@models/Item";
import { addProduct } from "app/features/products/productSlice";
import { RootState } from "app/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToastProduct from "./ToastProduct";
import { Button } from "@components/ui/button";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

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
      ToastProduct({ variant: "NO_STOCK" });
    } else if (qtn <= 0) {
      ToastProduct({ variant: "UNDER_ZERO" });
    } else {
      dispatch(
        addProduct({
          ...product,
          qtn,
        }),
      );
      ToastProduct({ variant: "SUCCESS" });
    }
  };

  return (
    <div className=" flex flex-col items-center">
      <Button onClick={handleAddToCart}> add to cart</Button>
      <div className="flex items-center justify-center gap-2 mt-2">
        <DecrementButton setQtn={setQtn} qtn={qtn} />
        <input
          type="number"
          min={1}
          value={qtn}
          onChange={(e) => setQtn(Number(e.target.value))}
          className="text-center no-arrows appearance-none w-16  rounded-xl border border-green-500 focus:outline-none focus:border-green-300"
        />
        <IncrementButton setQtn={setQtn} />
      </div>
    </div>
  );
};

export default AddToCartButton;
