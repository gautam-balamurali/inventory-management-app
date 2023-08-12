/* eslint-disable */

import "./ProductDetails.css";

const ProductDetails = ({ productDetails }) => {
  const {
    imageUrl,
    name,
    description,
    price,
    stock,
    supplier,
    delivered,
    sku,
    department,
  } = productDetails;

  return (
    <div className="product-details-section">
      <h2>{name}</h2>
      <img className="product-img" src={imageUrl} alt={name} />
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <p>Supplier:{supplier}</p>
      <p>Department: {department}</p>
      <p>SKU: {sku}</p>
      <p>Delivered: {delivered}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ProductDetails;
