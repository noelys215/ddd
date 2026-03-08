import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface Props {
  code: string;
  lang: string;
}

export default function CodeBlock({ code, lang }: Props) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    codeToHtml(code, {
      lang,
      theme: "vitesse-black",
    }).then(setHtml);
  }, [code, lang]);

  return (
    <div
      className="code-block min-w-0 w-full max-w-full rounded-md border border-white/10 bg-black/40 overflow-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
