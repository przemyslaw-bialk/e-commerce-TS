"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* MENU */}
      <ul
        className={`
          md:flex md:static md:h-auto md:bg-transparent
          md:items-center  md:justify-end md:flex-row md:mr-1
          ${showMenu ? "flex" : "hidden"}
          items-center flex-col 
          absolute top-0 left-0
          w-full h-screen
          bg-red-400
          z-10 gap-2
         
        `}
      >
        <li className="mt-1 md:m-0">
          <Link href="/" onClick={() => setShowMenu(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/items" onClick={() => setShowMenu(false)}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={() => setShowMenu(false)}>
            About
          </Link>
        </li>
      </ul>

      {/* HAMBURGER */}
      <CiMenuFries
        className="text-3xl fixed top-1 right-1 md:hidden z-50 cursor-pointer"
        onClick={handleMenu}
      />
    </>
  );
}
