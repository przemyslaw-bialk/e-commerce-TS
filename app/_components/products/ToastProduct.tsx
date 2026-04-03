import { toast } from "react-toastify";

type Variant = {
  variant: "SUCCESS" | "NO_STOCK" | "UNDER_ZERO";
};

const ToastProduct = ({ variant }: Variant) => {
  if (variant === "NO_STOCK") return toast.error("not enough stock");
  if (variant === "SUCCESS") return toast.success("added");
  if (variant === "UNDER_ZERO") return toast.error("can't add 0!");
};

export default ToastProduct;
