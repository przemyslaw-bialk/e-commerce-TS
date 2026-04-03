import { Dispatch, SetStateAction } from "react";
import { HiMiniMinusSmall } from "react-icons/hi2";

type Prop = {
  setQtn: Dispatch<SetStateAction<number>>;
  qtn: number;
};

const DecrementButton = ({ setQtn, qtn }: Prop) => {
  return (
    <button onClick={() => setQtn((prev) => prev - 1)} disabled={qtn <= 1}>
      <HiMiniMinusSmall className="text-xl hover:text-green-500" />
    </button>
  );
};

export default DecrementButton;
