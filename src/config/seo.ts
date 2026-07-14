import arbiterPreview from "../assets/works/arbiter/arbiter_home_poster.jpg";
import modPreview from "../assets/works/modworldwide/mod_thumb_animated_poster.jpg";
import aiPreview from "../assets/works/aiknowledgeassistant/ai_chat_thumb.png";

export const SITE_NAME = "Henry Betancourth";
export const SITE_TITLE = "Henry Betancourth | Software Engineer";
export const SITE_DESCRIPTION =
  "Portfolio of Henry Betancourth, a full-stack software engineer building React, Next.js, TypeScript, CMS, AI, and backend systems.";
export const SITE_AUTHOR = "Henry Betancourth";
export const SITE_KEYWORDS = [
  "Henry Betancourth",
  "software engineer",
  "full-stack developer",
  "React developer",
  "Next.js developer",
  "TypeScript developer",
  "frontend engineer",
  "portfolio",
];
export const DEFAULT_SITE_URL = "https://www.henryb.io/";
export const DEFAULT_OG_IMAGE = "/og-image.jpeg";

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "profile" | "article";
  noindex?: boolean;
  keywords?: string[];
};

export const seoPages: Record<string, SeoPage> = {
  "/": {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    path: "/",
    image: DEFAULT_OG_IMAGE,
    type: "profile",
  },
  "/experience": {
    title: "Experience | Henry Betancourth",
    description:
      "Software engineering experience, skills, and production work across React, Next.js, TypeScript, CMS platforms, backend APIs, accessibility, and Vercel deployments.",
    path: "/experience",
    image: DEFAULT_OG_IMAGE,
  },
  "/works": {
    title: "Selected Work | Henry Betancourth",
    description:
      "Selected software engineering case studies from Henry Betancourth, including CMS platforms, collaborative apps, AI assistants, and frontend architecture work.",
    path: "/works",
    image: modPreview,
  },
  "/works/modworldwide": {
    title: "MOD Worldwide Case Study | Henry Betancourth",
    description:
      "Case study for MOD Worldwide, a JSON-driven marketing and case-study platform built with Next.js, React, TypeScript, Tailwind CSS, and motion systems.",
    path: "/works/modworldwide",
    image: modPreview,
    type: "article",
    keywords: ["MOD Worldwide", "Next.js", "React", "CMS architecture"],
  },
  "/works/arbiter": {
    title: "Arbiter Case Study | Henry Betancourth",
    description:
      "Case study for Arbiter, a real-time collaborative decision platform built with React, TypeScript, FastAPI, PostgreSQL, authentication, and AI-assisted workflows.",
    path: "/works/arbiter",
    image: arbiterPreview,
    type: "article",
    keywords: ["Arbiter", "FastAPI", "PostgreSQL", "collaborative app"],
  },
  "/works/ai-knowledge-assistant": {
    title: "AI Knowledge Assistant Case Study | Henry Betancourth",
    description:
      "Case study for an AI-powered document assistant using retrieval-augmented generation, OpenAI APIs, Supabase Postgres, pgvector, and TinaCMS integration.",
    path: "/works/ai-knowledge-assistant",
    image: aiPreview,
    type: "article",
    keywords: ["AI assistant", "RAG", "OpenAI", "pgvector", "TinaCMS"],
  },
  "/maze": {
    title: "Red Light Green Light | Henry Betancourth",
    description:
      "Interactive portfolio game by Henry Betancourth.",
    path: "/maze",
    noindex: true,
  },
  "/maze-classic": {
    title: "Maze Game | Henry Betancourth",
    description:
      "Interactive portfolio maze game by Henry Betancourth.",
    path: "/maze-classic",
    noindex: true,
  },
  "/mole": {
    title: "Whack-a-Mole | Henry Betancourth",
    description:
      "Interactive portfolio whack-a-mole game by Henry Betancourth.",
    path: "/mole",
    noindex: true,
  },
};

export const getSiteUrl = () => {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();
  const runtimeOrigin =
    typeof window !== "undefined" ? window.location.origin : "";

  return (configuredUrl || runtimeOrigin || DEFAULT_SITE_URL).replace(/\/$/, "");
};

export const getSeoPage = (pathname: string, fallbackTitle: string): SeoPage => {
  return (
    seoPages[pathname] ?? {
      title: `${fallbackTitle} | ${SITE_NAME}`,
      description: SITE_DESCRIPTION,
      path: pathname,
      noindex: pathname !== "/",
    }
  );
};

export const toAbsoluteUrl = (value: string, siteUrl: string) => {
  try {
    return new URL(value, siteUrl).toString();
  } catch {
    return siteUrl;
  }
};
