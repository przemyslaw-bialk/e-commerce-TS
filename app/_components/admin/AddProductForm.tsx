"use client";

import { useState } from "react";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    qtn: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "price" || name === "qtn" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" bg-green-500">
      <h2>add product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          className="bg-red-200"
          onChange={handleChange}
        />
        <label htmlFor="price">Product Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          className="bg-red-200"
          onChange={handleChange}
        />
        <label htmlFor="qtn">Quantity:</label>
        <input
          type="number"
          id="qtn"
          name="qtn"
          value={formData.qtn}
          className="bg-red-200"
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit" className="bg-red-400">
          create product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
