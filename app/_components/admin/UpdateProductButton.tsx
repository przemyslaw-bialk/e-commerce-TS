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

  return (
    <div className="relative">
      <button onClick={handleClick} className="bg-green-300 z-10">
        quick edit
      </button>
      {showForm && <UpdateProductForm id={id} onUpdate={onUpdate} />}
    </div>
  );
};

export default UpdateProductButton;
