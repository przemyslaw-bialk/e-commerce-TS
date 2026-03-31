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

  // let totalQtn = 0;
  // for (const item of products) {
  //   totalQtn = totalQtn + item.qtn;
  // }

  // getting total qtn of prodcuts in shopping cart
  const totalQtn = products.reduce((sum, item) => sum + Number(item.qtn), 0);

  // getting total amount for each product
  let totalAmountToPay = 0;
  for (const product of products) {
    totalAmountToPay = Number(totalAmountToPay + product.price * product.qtn);
  }

  return (
    <div>
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
            <span className="font-semibold">price:</span>{" "}
            {product.price.toFixed(2)}
          </p>
          <DeleteItemFromCart id={product._id} />
          <p>
            <span className="font-semibold ml-auto">total price: </span>
            {(product.qtn * product.price).toFixed(2)}
          </p>
        </div>
      ))}
      <div className="flex items-center mt-2 font-semibold">
        <span>Amount to pay: {totalAmountToPay.toFixed(2)} pln</span>
      </div>
    </div>
  );
};

export default Cart;
