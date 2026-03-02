"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CallToActionButton from "../components/callToAction/CallToActionButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const getNavLinkClassName = (href: string) => {
    const isActive = isActivePath(href);

    return `${isActive ? "font-bold border-b-2 border-[#FE9F6B]" : "text-gray-600 font-semibold"} hover:text-gray-900 hover:border-b-2 hover:border-[#FE9F6B]`;
  };

  const getMobileNavLinkClassName = (href: string) => {
    const isActive = isActivePath(href);

    return `${isActive ? "font-bold text-gray-900" : "text-gray-600 font-semibold"} hover:text-gray-900`;
  };

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
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex flex-row gap-6 py-1">
            <Link href="/" className={getNavLinkClassName("/")}>
              Home
            </Link>
            <Link href="/about" className={getNavLinkClassName("/about")}>
              About
            </Link>
            <Link href="/recipes" className={getNavLinkClassName("/recipes")}>
              Recipes
            </Link>
          </nav>
        </div>
        <CallToActionButton className="w-auto px-5 py-3 rounded-lg hidden lg:block" />
      </div>
      {toggle && (
        <div className="lg:hidden flex flex-col text-lg items-end px-4 gap-2">
          <Link
            href="/"
            className={getMobileNavLinkClassName("/")}
            onClick={() => setToggle(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={getMobileNavLinkClassName("/about")}
            onClick={() => setToggle(false)}
          >
            About
          </Link>
          <Link
            href="/recipes"
            className={getMobileNavLinkClassName("/recipes")}
            onClick={() => setToggle(false)}
          >
            Recipes
          </Link>
          <CallToActionButton className="w-full px-2 py-2 rounded-lg lg:hidden mb-3" />
        </div>
      )}
    </header>
  );
};

export default Header;
