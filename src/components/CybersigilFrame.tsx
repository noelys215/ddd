import React from "react";
import flowerGlyph from "../assets/flower.svg";

const CybersigilFrame: React.FC<React.ComponentPropsWithoutRef<"article">> = ({
  children,
  className = "",
  style,
  ...props
}) => {
  const backgroundColor = style?.backgroundColor || "#101010";

  return (
    <article
      className={`relative border-2 border-[rgba(255,255,255,0.25)] ${className}`}
      style={style}
      {...props}
    >
      <div
        aria-hidden="true"
        className="absolute z-30 top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          width: "1.875rem",
          height: "1.875rem",
          backgroundColor: "#ff2a8a",
          opacity: 0.85,
          filter: "drop-shadow(0 0 6px rgba(255,42,138,0.4))",
          WebkitMaskImage: `url(${flowerGlyph})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: `url(${flowerGlyph})`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute z-30 bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none select-none"
        style={{
          width: "1.875rem",
          height: "1.875rem",
          backgroundColor: "#ff2a8a",
          opacity: 0.85,
          filter: "drop-shadow(0 0 6px rgba(255,42,138,0.4))",
          WebkitMaskImage: `url(${flowerGlyph})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: `url(${flowerGlyph})`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-20 inset-0"
        style={{ borderRadius: "inherit" }}
      >
        <div
          className="absolute -top-[2px] -left-[2px] h-[24px] w-[24px]"
          style={{ backgroundColor }}
        />
        <div
          className="absolute -bottom-[2px] -right-[2px] h-[24px] w-[24px]"
          style={{ backgroundColor }}
        />
      </div>
      {children}
    </article>
  );
};

export default CybersigilFrame;
