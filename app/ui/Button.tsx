"use client";

import clsx from "clsx";
import React from "react";

const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button onClick={onClick} className={clsx(className)}>
      {children}
    </button>
  );
};

export default Button;
