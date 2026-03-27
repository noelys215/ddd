interface Props {
  html?: string;
  code?: string;
}

export default function CodeBlock({ html, code = "" }: Props) {
  if (!html) {
    return (
      <pre className="code-block min-w-0 w-full max-w-full overflow-x-auto rounded-md border border-white/10 bg-black/40 p-4 text-sm text-white/70">
        <code>{code}</code>
      </pre>
    );
  }

  return (
    <div
      className="code-block min-w-0 w-full max-w-full rounded-md border border-white/10 bg-black/40 overflow-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
