import Link from "next/link";
import { IoIosInformationCircleOutline } from "react-icons/io";

type Prop = {
  id: string;
};

const ProductDetail = ({ id }: Prop) => {
  return (
    <Link href={`/items/${id}`}>
      <IoIosInformationCircleOutline className=" text-2xl text-green-500 absolute top-2 right-2 hover:text-green-400" />
    </Link>
  );
};

export default ProductDetail;
