"use client";

import UpdateProductForm from "./UpdateProductForm";
import { useState } from "react";

type Props = {
  id: string;
  onUpdate: () => void;
};

const UpdateProductButton = ({ id, onUpdate }: Props) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleUpdate = async () => {
    console.log(`Id produktu to ${id}`);
    await fetch(`/api/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newName: "TEST NAZWY",
        newPrice: 666666666,
        newQtn: 1000000000,
      }),
    });

    onUpdate();
  };

  return (
    <div className="relative ">
      <button onClick={handleUpdate} className="bg-green-300 z-10">
        update product
      </button>
      {showForm && <UpdateProductForm />}
    </div>
  );
};

export default UpdateProductButton;
