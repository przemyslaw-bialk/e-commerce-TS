import { removeItemFromCart } from "app/features/products/productSlice";
import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";

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
      className=" text-xl text-red-500 rounded-lg absolute right-1"
      onClick={() => handleDelete(id)}
    >
      <MdDeleteOutline />
    </button>
  );
};

export default DeleteItemFromCart;
