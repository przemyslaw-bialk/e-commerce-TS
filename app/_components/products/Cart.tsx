"use client";
import { Item } from "@models/Item";
import { RootState } from "app/store/store";
import { useSelector } from "react-redux";
import DeleteItemFromCart from "./DeleteItemFromCart";

type CartItem = Item & {
  qtn: number;
};

const Cart = () => {
  const products = useSelector(
    (state: RootState) => state.products.allProducts,
  ) as CartItem[];
  console.log(products);

  // getting total qtn of prodcuts in shopping cart

  const totalQtn = products.reduce((sum, item) => sum + Number(item.qtn), 0);

  // let totalQtn = 0;
  // for (const item of products) {
  //   totalQtn = totalQtn + item.qtn;
  // }

  return (
    <div>
      <h2>cart</h2>
      <div>Total: {totalQtn}</div>
      {products.map((product: CartItem) => (
        <div
          key={product._id}
          className="flex items-center justify-start gap-2 mt-3 border rounded-md border-zinc-400 p-2"
        >
          <p>- {product.name}</p>
          <p>
            <span className="font-semibold">qtn:</span> {product.qtn}
          </p>

          <p>
            <span className="font-semibold">price:</span> {product.price}
          </p>
          <DeleteItemFromCart id={product._id} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
