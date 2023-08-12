/* eslint-disable */

import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

import { departmentsInfoList } from "../../../config/app-config/AppConfig";
import "./AddNewProduct.css";
import { useInventory } from "../../../core/contexts/InventoryContext";

const AddNewProduct = () => {
  const [productFormDetails, setProductFormDetails] = useState({
    id: uuid(),
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const { dispatch } = useInventory();

  const productFormDetailsChangeHandler = (event) => {
    const { name, value } = event.target;
    setProductFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const addNewProductButtonHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_INVENTORY", payload: productFormDetails });
    setProductFormDetails((prev) => ({
      ...prev,
      id: uuid(),
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    }));
    toast.success("Added new product successfully!");
  };

  return (
    <div className="add-new-product-section">
      <h2>Add New Product</h2>

      <form
        className="add-new-product-form"
        onSubmit={addNewProductButtonHandler}
      >
        <label htmlFor="department-select">
          Department:
          <select
            name="department"
            id="department-select"
            onChange={productFormDetailsChangeHandler}
            required
          >
            <option selected="true" value="" disabled>
              Select Department
            </option>
            {departmentsInfoList.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="name-inpt">
          Name:
          <input
            name="name"
            value={productFormDetails.name}
            type="text"
            id="name-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="desc-inpt">
          Description:
          <textarea
            name="description"
            value={productFormDetails.description}
            id="desc-inpt"
            cols="30"
            rows="10"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="price-inpt">
          Price:
          <input
            type="number"
            name="price"
            value={productFormDetails.price}
            id="price-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="stock-inpt">
          Stock:
          <input
            type="number"
            name="stock"
            value={productFormDetails.stock}
            id="stock-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="sku-inpt">
          SKU:
          <input
            name="sku"
            value={productFormDetails.sku}
            type="text"
            id="sku-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="sup-inpt">
          Supplier:
          <input
            name="supplier"
            value={productFormDetails.supplier}
            type="text"
            id="sup-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="del-inpt">
          Delivered:
          <input
            type="number"
            name="delivered"
            value={productFormDetails.delivered}
            id="del-inpt"
            disabled
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="img-inpt">
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={productFormDetails.imageUrl}
            id="img-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <button type="submit" className="add-prod-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
