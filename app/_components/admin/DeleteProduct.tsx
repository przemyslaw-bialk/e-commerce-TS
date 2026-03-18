"use client";

import { deleteProduct } from "app/dashboard/products/manage/actions";

import { useState } from "react";

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
    <button onClick={handleDelete} disabled={loading} className="bg-red-500">
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteProduct;
