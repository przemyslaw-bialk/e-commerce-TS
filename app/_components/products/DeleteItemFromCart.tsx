import { removeItemFromCart } from "app/features/products/productSlice";
import { useDispatch } from "react-redux";

type ProductId = {
  id: string;
};

const DeleteItemFromCart = ({ id }: ProductId) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <button
      className="bg-red-400 p-3 rounded-lg"
      onClick={() => handleDelete(id)}
    >
      delete
    </button>
  );
};

export default DeleteItemFromCart;
