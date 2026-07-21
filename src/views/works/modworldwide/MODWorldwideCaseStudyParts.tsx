import CodeBlock from "../../../components/CodeBlock";
import type { ModEngineeringNote } from "./modWorldwideContent";

export function MODArchitectureDiagram() {
  const blocks = [
    "Hero and media",
    "Case-study content",
    "Motion and reveals",
    "Navigation and CTAs",
    "SEO metadata",
  ];

  return (
    <figure
      className="mx-auto mt-10 max-w-3xl"
      aria-labelledby="mod-architecture-caption"
    >
      <div className="space-y-3 rounded-md border border-white/15 bg-black/40 p-4 sm:p-6">
        <div className="rounded border border-pink-500/35 px-4 py-4 text-center">
          <strong className="block text-white">Structured JSON content</strong>
          <span className="mt-1 block text-sm text-white/60">
            Page definitions, metadata, and ordered block data
          </span>
        </div>
        <div className="text-center font-mono text-xs uppercase tracking-[0.18em] text-pink-400">
          Slug resolution + ContentTransformer
        </div>
        <div className="rounded border border-white/15 px-4 py-5">
          <strong className="block text-center text-white">
            Next.js + React block system
          </strong>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {blocks.map((block) => (
              <span
                key={block}
                className="rounded border border-white/10 bg-white/[0.03] px-2 py-3 text-center text-sm leading-snug text-white/70"
              >
                {block}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center text-pink-500" aria-hidden="true">
          ↓
        </div>
        <div className="rounded border border-white/15 px-4 py-4 text-center">
          <strong className="block text-white">Statically generated routes</strong>
          <span className="mt-1 block text-sm text-white/60">
            Production pages, SEO metadata, sitemap, and telemetry
          </span>
        </div>
      </div>
      <figcaption
        id="mod-architecture-caption"
        className="mt-4 text-center text-sm leading-relaxed text-white/60"
      >
        Route slugs resolve structured page definitions. ContentTransformer
        maps each definition to the reusable React block system, and Next.js
        emits the production route through static generation.
      </figcaption>
    </figure>
  );
}

export function MODEngineeringNotes({
  notes,
}: {
  notes: ModEngineeringNote[];
}) {
  return (
    <div className="divide-y divide-white/10">
      {notes.map((note) => (
        <details key={note.title} className="group">
          <summary className="flex min-h-14 list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-white marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400">
            <span>{note.title}</span>
            <span
              aria-hidden="true"
              className="text-xl font-light text-pink-400 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <div className="max-w-3xl pb-6 pr-0 sm:pr-8">
            <p className="text-sm leading-relaxed text-white/65 md:text-base">
              {note.body}
            </p>
            {note.codeHtml ? (
              <div className="mt-5 min-w-0">
                <div className="mb-2 grid min-w-0 gap-1 text-sm text-white/55 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <span>{note.codeLabel}</span>
                  <span className="min-w-0 break-all sm:text-right">
                    {note.codePath}
                  </span>
                </div>
                <CodeBlock html={note.codeHtml} />
              </div>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
