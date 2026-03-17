"use client";

import { deleteProduct } from "app/dashboard/products/manage/actions";
import { useRouter } from "next/navigation";

const DeleteProduct = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteProduct(id);
    router.refresh();
  };

  return <button onClick={handleDelete}>delete</button>;
};

export default DeleteProduct;
