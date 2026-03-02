"use client";
import Link from "next/link";

type CallToActionButtonProps = {
  className?: string;
};

const CallToActionButton = ({ className = "" }: CallToActionButtonProps) => {
  return (
    <Link
      href="/recipes"
      passHref
      className={`w-48 px-6 py-4 bg-[#163A34] text-white rounded-xl hover:bg-[#1E4D45] transition-colors duration-300 flex items-center justify-center ${className}`}
    >
      Browse Recipes
    </Link>
  );
};

export default CallToActionButton;
