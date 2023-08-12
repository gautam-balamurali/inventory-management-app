import { useParams } from "react-router-dom";
import ProductDetails from "../components/features/product-details/ProductDetails";
import { useInventory } from "../core/contexts/InventoryContext";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { inventoryData } = useInventory();

  const productDetails = inventoryData.find(
    (product) => product.id === productId
  );

  return <ProductDetails productDetails={productDetails} />;
};

export default ProductDetailsPage;
