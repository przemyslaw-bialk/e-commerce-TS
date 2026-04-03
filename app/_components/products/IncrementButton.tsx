import { Dispatch, SetStateAction } from "react";
import { HiMiniPlusSmall } from "react-icons/hi2";

type Prop = {
  setQtn: Dispatch<SetStateAction<number>>;
};

const IncrementButton = ({ setQtn }: Prop) => {
  return (
    <button onClick={() => setQtn((prev) => prev + 1)}>
      <HiMiniPlusSmall className="text-xl hover:text-green-500" />
    </button>
  );
};

export default IncrementButton;
