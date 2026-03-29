"use client";
import { useState } from "react";

type Props = {
  id: string;
  name: string;
  price: number;
  stock: number;
  onUpdate: () => void;
  onClose: () => void;
};

const UpdateProductForm = ({
  id,
  name,
  price,
  stock,
  onUpdate,
  onClose,
}: Props) => {
  const [nameState, setName] = useState(name);
  const [priceState, setPrice] = useState(price);
  const [stockState, setStock] = useState(stock);

  const handleSubmit = async () => {
    await fetch(`/api/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newName: nameState,
        newPrice: priceState,
        newStock: stockState,
      }),
    });

    // update and close the form
    onUpdate();
    onClose();
  };

  return (
    <div className="bg-green-950 min-w-44 absolute flex flex-col gap-2 p-2 z-20 text-white rounded-xl">
      <label>Name:</label>
      <input
        type="text"
        className="bg-white text-black p-1 rounded-sm "
        value={nameState}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Price:</label>
      <input
        type="number"
        className="bg-white text-black p-1 rounded-sm "
        value={priceState}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <label>Quantity:</label>
      <input
        type="number"
        className="bg-white text-black p-1 rounded-sm "
        value={stockState}
        onChange={(e) => setStock(Number(e.target.value))}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 rounded-xl hover:bg-green-600"
      >
        update
      </button>
    </div>
  );
};

export default UpdateProductForm;
