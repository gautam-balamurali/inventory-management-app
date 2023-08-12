import { useNavigate } from "react-router-dom";

import "./Card.css";
import { useInventory } from "../../../core/contexts/InventoryContext";

const Card = ({ cardContent, clickable = false }) => {
  const navigate = useNavigate();
  const { dispatch } = useInventory();

  const handleDepartmentClick = (filterValue) => {
    dispatch({ type: "UPDATE_FILTER_BY", payload: filterValue });
    navigate("/products");
  };

  return (
    <div
      style={{ cursor: clickable ? "pointer" : "default" }}
      onClick={() => clickable && handleDepartmentClick(cardContent.title)}
      className="card"
    >
      {cardContent?.count && <p>{cardContent.count}</p>}
      <p className="card-title">{cardContent.title}</p>
    </div>
  );
};

export default Card;
