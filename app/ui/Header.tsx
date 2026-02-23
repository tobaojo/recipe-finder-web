"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="border-b border-[#D0DCD9]">
      <div className="container mx-auto flex justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">Recipe Finder</span>
        </Link>
        <div
          className="md:hidden flex w-5 h-5 items-center hover:bg-gray-200 cursor-pointer"
          onClick={handletoggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav className="space-x-4 hidden md:flex">
          <Link
            href="/"
            className="[&.active]:font-bold text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="[&.active]:font-bold text-gray-600 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="/recipes"
            className="[&.active]:font-bold text-gray-600 hover:text-gray-900"
          >
            Recipes
          </Link>
        </nav>
      </div>
      {toggle && (
        <div className="md:hidden flex flex-col text-lg items-end px-4 gap-2">
          <Link
            href="/"
            className="[&.active]:font-bold text-gray-600 hover:text-gray-900"
            onClick={() => setToggle(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="[&.active]:font-bold text-gray-600 hover:text-gray-900"
            onClick={() => setToggle(false)}
          >
            About
          </Link>
          <Link
            href="/recipes"
            className="[&.active]:font-bold text-gray-600 hover:text-gray-900"
            onClick={() => setToggle(false)}
          >
            Recipes
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
