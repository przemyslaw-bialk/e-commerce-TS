import Link from "next/link";

const AdminSidebar = () => {
  return (
    <div className="w-1/6">
      <h2 className=" text-xl tracking-tighter ml-2">admin area</h2>
      <Link href="/dashboard/products/add" className="sidebar-link">
        add product
      </Link>
      <Link href="/dashboard/products/manage" className="sidebar-link">
        manage products
      </Link>
    </div>
  );
};

export default AdminSidebar;
