import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className=" text-pink-50 text-base font-mono px-1.5 pt-1 rounded bg-pink-700 ml-1.5">
      {children}
    </span>
  );
};
