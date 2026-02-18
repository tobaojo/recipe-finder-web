"use client";

import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-[#163A34] text-white rounded"
    >
      {children}
    </button>
  );
};

export default Button;
