"use client";
import { useRouter } from "next/navigation";
import UpdateProductForm from "./UpdateProductForm";
import { useState } from "react";

const UpdateProductButton = ({ id }: { id: string }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  //   const router = useRouter();

  //   const handleUpdate = async () => {
  //     console.log(`Id produktu to ${id}`);
  //     await fetch(`/api/items/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         newName: "TEST NAZWY",
  //         newPrice: 666666666,
  //         newQtn: 1000000000,
  //       }),
  //     });

  //     router.refresh();
  //   };

  return (
    <div className="relative ">
      <button onClick={handleClick} className="bg-green-300 z-10">
        update product
      </button>
      {showForm && <UpdateProductForm />}
    </div>
  );
};

export default UpdateProductButton;
