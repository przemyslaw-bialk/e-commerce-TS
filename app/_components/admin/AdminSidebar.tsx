"use client";
import Link from "next/link";
import { useState } from "react";
import { RiMenuFold2Fill } from "react-icons/ri";

const AdminSidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="flex items-start justify-between p-2 md:hidden">
        <RiMenuFold2Fill
          className="text-2xl cursor-pointer"
          onClick={handleMenu}
        />
      </div>

      {/*DESKTOP */}
      <div className="hidden md:flex w-1/5 flex-col p-3 ">
        <h2 className="text-xl tracking-tighter mb-4">admin area</h2>
        <nav>
          <Link href="/dashboard/products/add" className="sidebar-link">
            add product
          </Link>

          <Link href="/dashboard/products/manage" className="sidebar-link">
            manage products
          </Link>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-3 md:hidden">
          <div className="flex justify-between items-center">
            <h2 className="text-xl tracking-tighter">admin area</h2>

            <RiMenuFold2Fill
              className="text-2xl cursor-pointer"
              onClick={handleMenu}
            />
          </div>

          <nav className="flex flex-col gap-1 items-start mt-6">
            <Link
              href="/dashboard/products/add"
              className="sidebar-link w-full"
              onClick={() => setShowMenu(false)}
            >
              add product
            </Link>

            <Link
              href="/dashboard/products/manage"
              className="sidebar-link w-full"
              onClick={() => setShowMenu(false)}
            >
              manage products
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
