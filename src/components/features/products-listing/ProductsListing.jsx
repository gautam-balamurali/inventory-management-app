/* eslint-disable */

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { departmentsInfoList } from "../../../config/app-config/AppConfig";
import { useInventory } from "../../../core/contexts/InventoryContext";
import "./ProductsListing.css";
import { setLocalStorage } from "../../../utils/local-storage-functions/LocalStorageFunctions";

const ProductsListing = () => {
  const { inventoryData, filterInput, sortInput, checkboxInput, dispatch } =
    useInventory();
  const [displayData, setDisplayData] = useState([...inventoryData]);
  const navigate = useNavigate();

  const handleDepartmentFilter = (event) => {
    const { value } = event.target;
    dispatch({ type: "UPDATE_FILTER_BY", payload: value });
    const updatedList =
      filterInput === "all"
        ? [...inventoryData]
        : inventoryData.filter((product) => product.department === filterInput);
    setDisplayData([...updatedList]);
  };

  const handleSortChange = (event) => {
    const { value } = event.target;
    dispatch({ type: "UPDATE_SORT_BY", payload: value });
  };

  const handleCheckboxValue = (event) => {
    const { value, checked } = event.target;
    dispatch({ type: "UPDATE_CHECKBOX", payload: checked ? value : "" });
  };

  useEffect(() => {
    let filteredData = [...inventoryData];

    filteredData =
      filterInput === "all"
        ? [...inventoryData]
        : inventoryData.filter((product) => product.department === filterInput);

    filteredData =
      checkboxInput === "lowStock"
        ? filteredData.filter((product) => product.stock <= 10)
        : [...filteredData];

    filteredData = filteredData.sort((a, b) =>
      sortInput === "name"
        ? a.name.localeCompare(b.name)
        : a[sortInput] - b[sortInput]
    );

    setDisplayData([...filteredData]);
    setLocalStorage("filter-by", filterInput);
    setLocalStorage("sort-by", sortInput);
    setLocalStorage("checkbox", checkboxInput);
  }, [inventoryData, filterInput, sortInput, checkboxInput]);

  return (
    <div className="products-listing-section">
      <div className="products-listing-header">
        <h2>Products</h2>
        <select onChange={handleDepartmentFilter} defaultValue={filterInput}>
          <option value="all">All Departments</option>
          {departmentsInfoList.map((department, index) => (
            <option key={department + index} value={department}>
              {department}
            </option>
          ))}
        </select>

        <div className="low-stock-items-checkbox">
          <input
            type="checkbox"
            name="checkboxInput"
            value="lowStock"
            checked={checkboxInput === "lowStock"}
            id="low-stock-checkbox"
            onChange={handleCheckboxValue}
          />
          <label htmlFor="low-stock-checkbox">Low Stock Items</label>
        </div>

        <select onChange={handleSortChange} defaultValue={sortInput}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>

        <button
          onClick={() => navigate("/add-product")}
          className="add-new-btn"
        >
          New
        </button>
      </div>

      <div className="products-listing-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map(
              ({ id, imageUrl, name, description, price, stock, supplier }) => (
                <tr key={id}>
                  <td>
                    <img className="product-img" src={imageUrl} alt={name} />
                  </td>
                  <td>
                    <NavLink>{name}</NavLink>
                  </td>
                  <td>{description}</td>
                  <td>${price}</td>
                  <td>{stock}</td>
                  <td>{supplier}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        {displayData.length < 1 && <p>No data found.</p>}
      </div>
    </div>
  );
};

export default ProductsListing;
