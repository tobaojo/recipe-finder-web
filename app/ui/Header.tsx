import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">Recipe Finder</span>
        </Link>
        <div className="md:hidden flex w-5 h-5 items-center hover:bg-gray-200 cursor-pointer">
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
    </header>
  );
};

export default Header;
