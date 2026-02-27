"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="border-b border-[#D0DCD9]">
      <div className="container mx-auto flex flex-row items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={250} height={250} />
        </Link>
        <div
          className="lg:hidden flex w-5 h-5 items-center hover:bg-gray-200 cursor-pointer"
          onClick={handletoggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav className="space-x-4 hidden lg:flex">
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
        <div className="lg:hidden flex flex-col text-lg items-end px-4 gap-2">
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
