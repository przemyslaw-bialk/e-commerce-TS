"use client";
import { createProduct } from "app/dashboard/products/add/actions";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

const AddProductForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    await createProduct(formData);

    formRef.current?.reset();
  };

  return (
    <div className="p-1 border border-green-300 py-6 px-2 rounded-xl ">
      <h2 className="text-xl mb-4 ml-1">Add Product</h2>
      <form action={handleSubmit} ref={formRef} className="flex flex-col gap-4">
        <div className=" p-2 border border-green-300 rounded-xl ">
          <label>Product name:</label>
          <input
            name="name"
            type="text"
            className="bg-green-100 w-full mb-2 p-2 rounded-xl"
            required
          />
        </div>
        <div className=" p-2 border border-green-300 rounded-xl ">
          <label>Price:</label>
          <input
            name="price"
            type="number"
            step="0.01"
            inputMode="decimal"
            className="bg-green-100 w-full mb-2 p-2 rounded-xl"
          />
        </div>
        <div className=" p-2 border border-green-300 rounded-xl ">
          <label>Quantity:</label>
          <input
            name="qtn"
            type="number"
            className="bg-green-100 w-full mb-2 p-2 rounded-xl"
          />
        </div>
        <div className=" p-2 border border-green-300 rounded-xl ">
          <label>Description:</label>
          <textarea
            name="description"
            className="bg-green-100 w-full mb-2 p-2 rounded-xl h-[100px]"
          />
        </div>
        <Button />
      </form>
    </div>
  );
};

// to use this hook it must be a child component of the FORM
const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button className="bg-green-400 p-2 w-full rounded-xl font-semibold uppercase">
      {pending ? "creating..." : "create product"}
    </button>
  );
};

export default AddProductForm;
