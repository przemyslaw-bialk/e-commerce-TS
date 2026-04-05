import { Item } from "@models/Item";
import Image from "next/image";

import AddToCartButton from "@components/products/AddToCartButton";
import ProductDetail from "@components/products/ProductDetail";

interface ItemsProps {
  items: Item[];
}

const ProductCard = ({ items }: ItemsProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 justify-center">
      {items.map((item) => (
        <div
          key={item._id}
          className="border border-zinc-200 p-4 rounded-lg flex flex-col items-center gap-2 relative"
        >
          <div className="relative ">
            <Image
              src={item.image ?? "/placeholder.png"}
              width={240}
              height={240}
              alt={item.name}
              className="object-cover"
            />
          </div>
          <h4>{item.name}</h4>
          <p>on stock: {item.stock}</p>
          <p>price: {item.price} pln</p>
          <AddToCartButton product={item} />
          <ProductDetail id={item._id} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
