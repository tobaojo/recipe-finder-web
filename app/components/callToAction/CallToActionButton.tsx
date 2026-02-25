"use client";
import Link from "next/link";

const CallToActionButton = () => {
  return (
    <Link
      href="/recipes"
      passHref
      className="w-[65%] md:w-auto px-6 py-4 bg-[#163A34] text-white rounded-lg"
    >
      Start Browsing
    </Link>
  );
};

export default CallToActionButton;
