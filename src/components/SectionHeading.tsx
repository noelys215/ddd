import React from "react";

type SectionHeadingSymbol = "plus" | "cross";

interface SectionHeadingProps {
  children: React.ReactNode;
  symbol?: SectionHeadingSymbol;
  headingId?: string;
  className?: string;
  headingClassName?: string;
  symbolClassName?: string;
}

const SYMBOL_MAP: Record<SectionHeadingSymbol, string> = {
  plus: "✛",
  cross: "†",
};

const SYMBOL_SIZE_CLASS: Record<SectionHeadingSymbol, string> = {
  plus: "text-lg",
  cross: "text-xl",
};

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  symbol = "plus",
  headingId,
  className,
  headingClassName,
  symbolClassName,
}) => {
  const symbolCharacter = SYMBOL_MAP[symbol];

  return (
    <div className={joinClasses("flex items-center md:gap-4 my-8", className)}>
      <div className="flex-1 h-px bg-white/20" />

      <span
        aria-hidden="true"
        className={joinClasses(
          "text-pink-500",
          SYMBOL_SIZE_CLASS[symbol],
          symbolClassName,
        )}
        style={{ textShadow: "0 0 6px rgba(255,42,138,0.35)" }}
      >
        {symbolCharacter}
      </span>

      <h2
        id={headingId}
        className={joinClasses(
          "text-white text-md md:text-xl tracking-wide whitespace-nowrap",
          headingClassName,
        )}
      >
        {children}
      </h2>

      <span
        aria-hidden="true"
        className={joinClasses(
          "text-pink-500",
          SYMBOL_SIZE_CLASS[symbol],
          symbolClassName,
        )}
        style={{ textShadow: "0 0 6px rgba(255,42,138,0.35)" }}
      >
        {symbolCharacter}
      </span>

      <div className="flex-1 h-px bg-white/20" />
    </div>
  );
};

export default SectionHeading;
