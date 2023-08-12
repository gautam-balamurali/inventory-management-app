import "./Card.css";

const Card = ({ cardContent, clickable = false }) => {
  return (
    <div style={{ cursor: clickable ? "pointer" : "default" }} className="card">
      {cardContent?.count && <p>{cardContent.count}</p>}
      <p className="card-title">{cardContent.title}</p>
    </div>
  );
};

export default Card;
