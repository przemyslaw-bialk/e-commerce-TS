"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

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
          md:items-center  md:justify-end md:flex-row md:mr-1 list-none
          ${showMenu ? "flex" : "hidden"}
          items-center flex-col 
          absolute top-0 left-0
          w-full h-screen
          bg-red-400
          z-10 gap-2 
          overflow-hidden
         
        `}
      >
        <li className="mt-1 md:m-0 p-0">
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
        <li>
          <Link href="/account" onClick={() => setShowMenu(false)}>
            <LuUser className="w-5 h-5 mb-1 " />
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
