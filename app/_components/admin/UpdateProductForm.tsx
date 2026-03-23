"use client";
import { useState } from "react";

type Props = {
  id: string;
  onUpdate: () => void;
};

const UpdateProductForm = ({ id, onUpdate }: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>();
  const [qtn, setQtn] = useState<number>();

  const handleSubmit = async () => {
    await fetch(`/api/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newName: name,
        newPrice: price,
        newQtn: qtn,
      }),
    });
    onUpdate();
  };

  return (
    <div className="bg-red-300 w-full absolute flex h-full z-20">
      <label>Name</label>
      <input
        type="text"
        className="bg-green-200"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Price</label>
      <input
        type="number"
        className="bg-green-200"
        name="price"
        id="price"
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <label>Quantity</label>
      <input
        type="number"
        className="bg-green-200"
        name="qtn"
        id="qtn"
        onChange={(e) => setQtn(Number(e.target.value))}
      />
      <button onClick={handleSubmit} className="bg-red-200">
        update
      </button>
    </div>
  );
};

export default UpdateProductForm;
