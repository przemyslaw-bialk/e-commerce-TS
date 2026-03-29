"use client";
import { Item } from "@models/Item";
import { RootState } from "app/store/store";
import { useSelector } from "react-redux";

type CartItem = Item & {
  qtn: number;
};

const Cart = () => {
  const products = useSelector(
    (state: RootState) => state.products.allProducts,
  );
  console.log(products);

  return (
    <div>
      <h2>cart</h2>
      {products.map((product: CartItem) => (
        <div key={product._id}>
          <p>{product.name}</p>
          <p>{product.qtn}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
