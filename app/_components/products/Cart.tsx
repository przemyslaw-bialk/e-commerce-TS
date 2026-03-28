"use client";
import { Item } from "@models/Item";
import { RootState } from "app/store/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector(
    (state: RootState) => state.products.allProducts,
  );
  console.log(products);

  return (
    <div>
      <h2>cart</h2>
      {products.map((product: Item) => (
        <div key={product._id}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
