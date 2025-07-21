// src/components/Button.tsx
import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  children,
  href,
  target = "_self",
  onClick,
  className = "",
}: ButtonProps) => {

  if (href) {
    return (
      <Link 
        href={href} 
        className={`button ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`button ${className}`} 
      type="button"
    >
      {children}
    </button>
  );
};
