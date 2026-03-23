"use client";

import UpdateProductForm from "./UpdateProductForm";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

type Props = {
  id: string;
  name: string;
  price: number;
  qtn: number;
  onUpdate: () => void;
};

const UpdateProductButton = ({ id, name, price, qtn, onUpdate }: Props) => {
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClose}
        className="text-green-500 text-2xl font-semibold "
      >
        <CiEdit />
      </button>
      {showForm && (
        <UpdateProductForm
          id={id}
          name={name}
          price={price}
          qtn={qtn}
          onUpdate={onUpdate}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default UpdateProductButton;
