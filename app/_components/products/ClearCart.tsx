"use client";
import { Button } from "@components/ui/button";
import { clearCart } from "app/features/products/productSlice";
import { RootState } from "app/store/store";
import { useDispatch, useSelector } from "react-redux";

const ClearCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.allProducts,
  );

  const addedProducts = products.length;
  if (addedProducts === 0) return null;

  const handleDelete = () => {
    dispatch(clearCart());
  };

  return (
    <Button
      className="absolute top-0 right-0"
      onClick={handleDelete}
      disabled={addedProducts === 0}
    >
      Clear the cart
    </Button>
  );
};

export default ClearCart;
