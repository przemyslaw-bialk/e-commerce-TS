"use client";
import { createProduct } from "app/dashboard/products/add/actions";

const AddProductForm = () => {
  return (
    <div className="bg-green-500">
      <h2>add product</h2>

      <form action={createProduct}>
        <label>Product name</label>
        <input name="name" type="text" className="bg-red-200" defaultValue="" />

        <label>Price</label>
        <input
          name="price"
          type="number"
          className="bg-red-200"
          defaultValue={0}
        />

        <label>Quantity</label>
        <input
          name="qtn"
          type="number"
          className="bg-red-200"
          defaultValue={0}
        />

        <label>Description</label>
        <textarea name="description" defaultValue="" />

        <button className="bg-red-400">create product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
