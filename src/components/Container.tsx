import { ReactNode } from "react";
import CybersigilFrame from "./CybersigilFrame";

interface LayoutProps {
  children: ReactNode;
  color?: string;
  opacity?: number;
}

export const Container: React.FC<LayoutProps> = ({
  children,
  color = "#101010",
  opacity = 95,
}) => {
  return (
    <CybersigilFrame
      className={`rounded-lg max-w-4xl w-full p-6 md:p-12 bg-black shadow-md mx-auto opacity-${opacity}`}
      style={{ backgroundColor: color }}
      aria-labelledby="card-title"
    >
      {children}
    </CybersigilFrame>
  );
};
