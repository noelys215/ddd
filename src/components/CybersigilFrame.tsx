import React, { useEffect, useState } from "react";

const DEFAULT_SIGIL_GLYPHS = [
  "⟡",
  "⌖",
  "⋄",
  "⟁",
  "†",
  "⊹",
  "✶",
  "✦",
  "✧",
  "†",
  "✛",
] as const;

interface CybersigilFrameProps extends React.ComponentPropsWithoutRef<"article"> {
  glyphs?: readonly string[];
}

const CybersigilFrame: React.FC<CybersigilFrameProps> = ({
  children,
  className = "",
  style,
  glyphs = DEFAULT_SIGIL_GLYPHS,
  ...props
}) => {
  const [cornerSigils, setCornerSigils] = useState<[string, string]>([
    "⟡",
    "✦",
  ]);

  useEffect(() => {
    if (!glyphs.length) return;
    const pick = () => glyphs[Math.floor(Math.random() * glyphs.length)];
    const topLeft = pick();
    let bottomRight = pick();
    if (glyphs.length > 1) {
      while (bottomRight === topLeft) bottomRight = pick();
    }
    setCornerSigils([topLeft, bottomRight]);
  }, [glyphs]);

  const backgroundColor = style?.backgroundColor || "#101010";

  return (
    <article
      className={`relative border-2 border-[rgba(255,255,255,0.25)] ${className}`}
      style={style}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute z-30 top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-3xl font-bold leading-none"
        style={{
          color: "#ff2a8a",
          opacity: 0.85,
          textShadow: "0 0 6px rgba(255,42,138,0.4)",
        }}
      >
        {cornerSigils[0]}
      </span>
      <span
        aria-hidden="true"
        className="absolute z-30 bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none select-none text-3xl font-bold leading-none"
        style={{
          color: "#ff2a8a",
          opacity: 0.85,
          textShadow: "0 0 6px rgba(255,42,138,0.4)",
        }}
      >
        {cornerSigils[1]}
      </span>
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
