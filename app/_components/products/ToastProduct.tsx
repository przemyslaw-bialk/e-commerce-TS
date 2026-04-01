import { toast } from "react-toastify";

type Variant = {
  variant: "SUCCESS" | "ERROR";
};

const ToastProduct = ({ variant }: Variant) => {
  if (variant === "ERROR") return toast.error("not enough stock");
  if (variant === "SUCCESS") return toast.success("added");
};

export default ToastProduct;
