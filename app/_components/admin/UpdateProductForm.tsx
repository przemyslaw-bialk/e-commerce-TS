"use client";
import { useState } from "react";

type Props = {
  id: string;
  name: string;
  price: number;
  qtn: number;
  onUpdate: () => void;
  onClose: () => void;
};

const UpdateProductForm = ({
  id,
  name,
  price,
  qtn,
  onUpdate,
  onClose,
}: Props) => {
  const [nameState, setName] = useState(name);
  const [priceState, setPrice] = useState(price);
  const [qtnState, setQtn] = useState(qtn);

  const handleSubmit = async () => {
    await fetch(`/api/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newName: nameState,
        newPrice: priceState,
        newQtn: qtnState,
      }),
    });

    // update and close the form
    onUpdate();
    onClose();
  };

  return (
    <div className="bg-green-950 min-w-44 absolute flex flex-col gap-2 p-2 z-20 text-white">
      <label>Name</label>
      <input
        type="text"
        className="bg-green-100"
        value={nameState}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Price</label>
      <input
        type="number"
        className="bg-green-100"
        value={priceState}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <label>Quantity</label>
      <input
        type="number"
        className="bg-green-100"
        value={qtnState}
        onChange={(e) => setQtn(Number(e.target.value))}
      />

      <button onClick={handleSubmit} className="bg-red-200">
        update
      </button>
    </div>
  );
};

export default UpdateProductForm;
