import Cart from "@components/products/Cart";
import ClearCart from "@components/products/ClearCart";

const CartPage = () => {
  return (
    <div className="relative">
      <h2>CART</h2>
      <Cart />
      <ClearCart />
    </div>
  );
};

export default CartPage;
