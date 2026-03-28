"use client";
import { Button } from "@components/ui/button";
import { clearCart } from "app/features/products/productSlice";
import { useDispatch } from "react-redux";

const ClearCart = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(clearCart());
  };

  return (
    <Button className="absolute top-0 right-0" onClick={handleDelete}>
      Clear the cart
    </Button>
  );
};

export default ClearCart;
