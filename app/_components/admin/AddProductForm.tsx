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
    <div className="bg-green-500 p-4">
      <h2 className="text-xl mb-4">Add Product</h2>
      <form action={handleSubmit} ref={formRef}>
        <label>Product name</label>
        <input name="name" type="text" className="bg-red-200 w-full mb-2" />

        <label>Price</label>
        <input name="price" type="number" className="bg-red-200 w-full mb-2" />

        <label>Quantity</label>
        <input name="qtn" type="number" className="bg-red-200 w-full mb-2" />

        <label>Description</label>
        <textarea name="description" className="bg-red-200 w-full mb-2" />
        <Button />
      </form>
    </div>
  );
};
const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button className="bg-red-400 p-2 w-full">
      {pending ? "creating..." : "create product"}
    </button>
  );
};

export default AddProductForm;
