"use client";
import { useState } from "react";

import { deleteProduct } from "app/dashboard/products/manage/actions";
import { MdDeleteOutline } from "react-icons/md";

const DeleteProduct = ({
  id,
  onDelete,
}: {
  id: string;
  onDelete: () => void;
}) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await deleteProduct(id);
    onDelete();
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-500 text-2xl"
    >
      <MdDeleteOutline />
    </button>
  );
};

export default DeleteProduct;
