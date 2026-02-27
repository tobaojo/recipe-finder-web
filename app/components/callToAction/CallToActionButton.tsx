"use client";
import Link from "next/link";

const CallToActionButton = () => {
  return (
    <Link
      href="/recipes"
      passHref
      className="w-48 px-6 py-4 bg-[#163A34] text-white rounded-lg lg:mx-auto hover:bg-[#1E4D45] transition-colors duration-300 flex items-center justify-center"
    >
      Start Browsing
    </Link>
  );
};

export default CallToActionButton;
