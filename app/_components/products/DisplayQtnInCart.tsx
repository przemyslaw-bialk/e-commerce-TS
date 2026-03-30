import { Item } from "@models/Item";
import { RootState } from "app/store/store";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

type Prop = {
  onShow: () => void;
};

type Product = Item & {
  qtn: number;
};

const DisplayQtnInCart = ({ onShow }: Prop) => {
  const products = useSelector(
    (state: RootState) => state.products.allProducts,
  ) as Product[];

  const totalQtn = products.reduce((sum, item) => sum + Number(item.qtn), 0);

  return (
    <div className="relative">
      <li>
        <Link href="/cart" onClick={onShow}>
          <IoCartOutline className="w-5 h-5 mb-1 mr-3 " />
        </Link>
      </li>
      <span className=" absolute top-[-2px] right-0 text-xs font-semibold text-green-600">
        {totalQtn}
      </span>
    </div>
  );
};

export default DisplayQtnInCart;
