import { Link } from "react-router-dom";

export function CaseStudyNavigation({ prefix = "" }: { prefix?: string }) {
  return (
    <nav
      aria-label="Case study sections"
      className="my-6 flex flex-wrap gap-x-5 gap-y-1 border-b border-white/10 pb-4 text-sm"
    >
      {[
        ["problem-heading", "Overview"],
        ["challenges-heading", "Engineering"],
        ["architecture-heading", "Architecture"],
        ["reflection-heading", "Results"],
      ].map(([id, label]) => (
        <Link
          key={id}
          to={`#${prefix}${id}`}
          preventScrollReset
          className="inline-flex min-h-11 items-center text-pink-400 underline-offset-4 hover:underline"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function CaseStudyFooter({
  nextTitle,
  nextPath,
}: {
  nextTitle: string;
  nextPath: string;
}) {
  return (
    <nav
      aria-label="More projects"
      className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm"
    >
      <Link
        to="/works"
        className="inline-flex min-h-11 items-center text-white/75 hover:text-pink-400"
      >
        ← Back to Works
      </Link>
      <Link
        to={nextPath}
        className="inline-flex min-h-11 items-center text-pink-400 hover:underline underline-offset-4"
      >
        Next project: {nextTitle} →
      </Link>
    </nav>
  );
}
