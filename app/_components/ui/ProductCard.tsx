import { Item } from "@models/Item";

interface ItemsProps {
  items: Item[];
}

const ProductCard = ({ items }: ItemsProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>
          <h4>{item.name}</h4>
          <p>on stock: {item.qtn}</p>
          <p>price: {item.price} pln</p>
          <p>{item.description}</p>
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
