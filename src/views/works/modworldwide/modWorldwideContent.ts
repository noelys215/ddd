import type { MediaItem } from "../../../components/media";
import modShot1 from "../../../assets/works/modworldwide/MacBook Pro-1773000445376.jpeg";
import modShot2 from "../../../assets/works/modworldwide/MacBook Pro-1773000487175.jpeg";
import modShot4 from "../../../assets/works/modworldwide/MacBook Pro-1773000519270.jpeg";
import modVideoMp4 from "../../../assets/works/modworldwide/mod_thumb_animated.mp4";
import modVideoPoster from "../../../assets/works/modworldwide/mod_thumb_animated_poster.jpg";
import modVideoWebm from "../../../assets/works/modworldwide/mod_thumb_animated.webm";
import { codeSnippetHtml } from "../../../generated/codeSnippetHtml";
import type {
  EngineeringChallenge,
  ProductMoment,
} from "../arbiter/arbiterContent";

export type ModEngineeringNote = {
  title: string;
  body: string;
  codeHtml?: string;
  codeLabel?: string;
  codePath?: string;
};

export const heroMedia: MediaItem = {
  kind: "video",
  poster: modVideoPoster,
  alt: "A motion preview of the MOD Worldwide website",
  sources: [
    { src: modVideoWebm, type: "video/webm" },
    { src: modVideoMp4, type: "video/mp4" },
  ],
};

export const productMoments: ProductMoment[] = [
  {
    number: "01",
    eyebrow: "Compose",
    title: "Pages assembled from structured content",
    description:
      "Each route begins with a JSON page definition rather than a hardcoded template. Slugs resolve into structured content, then a transformer maps that content into the appropriate React blocks.",
    engineeringNote:
      "The same routing pipeline supports 16 content-defined routes without maintaining a separate page registry.",
    media: [
      {
        src: modShot1,
        alt: "MOD Worldwide homepage with cinematic artwork and restrained navigation",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Express",
    title: "A block system that preserves art direction",
    description:
      "More than 20 reusable blocks carry layout, media, and interaction behavior while leaving each page free to establish its own narrative rhythm. Motion, smooth scrolling, and fullscreen media become system capabilities rather than page-specific effects.",
    engineeringNote:
      "Presentation logic stays inside reusable blocks, keeping visual behavior consistent as the content catalogue grows.",
    media: [
      {
        src: modShot4,
        alt: "A monochrome fullscreen media section on the MOD Worldwide website",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Publish",
    title: "A content platform built for the wider team",
    description:
      "Designers, filmmakers, digital artists, project managers, and agency stakeholders can shape the site through one shared content model. Static generation, structured metadata, and reusable components keep publishing fast without separating content autonomy from production quality.",
    engineeringNote:
      "Moving page composition into JSON reduced routine engineering involvement while preserving accessibility, SEO, and implementation standards.",
    media: [
      {
        src: modShot2,
        alt: "MOD Worldwide brand and culture page with editorial typography and client marks",
      },
    ],
  },
];

export const challenges: EngineeringChallenge[] = [
  {
    number: "01",
    title: "Flexible composition without page-by-page code",
    problem:
      "The platform needed to support visually distinct case studies without turning every new route into another bespoke React page or allowing content structure to drift away from the component system.",
    decision:
      "JSON became the source of truth for composition. A deterministic ContentTransformer resolves each declared block into a known React component, while file-based routing maps content definitions directly to URLs.",
    outcome:
      "Sixteen routes share one rendering pipeline and more than 20 block types, giving the team room to publish varied work without maintaining a hardcoded page registry.",
    flow: [
      "Route slug",
      "JSON definition",
      "ContentTransformer",
      "React blocks",
    ],
  },
  {
    number: "02",
    title: "Expressive motion without a fragile layout",
    problem:
      "The visual direction called for choreographed reveals, smooth scrolling, and fullscreen media across many reusable blocks. Independent page animations would be difficult to coordinate and easy to regress.",
    decision:
      "Motion behavior was organized as shared block capabilities and custom scroll-reveal logic, with reduced-motion fallbacks and interaction state handled as part of the component contract.",
    outcome:
      "Pages retain a cinematic rhythm while keyboard interaction, focus management, and motion preferences remain consistent across the system.",
    flow: [
      "Block enters viewport",
      "Shared reveal state",
      "Staged motion",
      "Stable final layout",
    ],
  },
  {
    number: "03",
    title: "Content autonomy without operational drift",
    problem:
      "Reducing engineering involvement in publishing could not come at the cost of inconsistent metadata, inaccessible interactions, missing routes, or an increasingly heavy client bundle.",
    decision:
      "Static generation, structured SEO data, sitemap generation, telemetry hooks, and bounded block definitions were treated as platform concerns rather than optional work on each page.",
    outcome:
      "The site remains a maintainable publishing system with repeatable production behavior, instead of a collection of visually related but operationally separate marketing pages.",
    flow: [
      "Structured content",
      "Build-time generation",
      "Shared quality controls",
      "Production route",
    ],
  },
];

export const qualityItems = [
  {
    label: "Content scale",
    value: "16 JSON-defined routes",
    detail: "One route pipeline replaces a hardcoded page registry.",
  },
  {
    label: "Design system",
    value: "20+ reusable blocks",
    detail: "Layout, media, motion, and interaction behavior remain composable.",
  },
  {
    label: "Delivery",
    value: "Static generation",
    detail: "Structured metadata, sitemap generation, and predictable route output.",
  },
  {
    label: "Bundle profile",
    value: "~102 KB shared JS",
    detail: "Approximately 183 KB for the dynamic route shell.",
  },
];

export const engineeringNotes: ModEngineeringNote[] = [
  {
    title: "File-based content routing",
    body:
      "The catch-all route derives static paths from available page data and resolves each slug through the same content lookup. This keeps route generation deterministic without maintaining a second registry by hand.",
    codeLabel: "Archived routing excerpt",
    codePath: "src/app/[[...slug]]/pageData.ts",
    codeHtml: codeSnippetHtml.modWorldwide.fileBasedCmsRouting,
  },
  {
    title: "Dynamic block transformation",
    body:
      "ContentTransformer is the boundary between the page definition and presentation. Known block identifiers resolve to reusable React components, keeping composition flexible while preserving a controlled rendering vocabulary.",
    codeLabel: "Archived renderer excerpt",
    codePath: "src/components/ContentTransformer.tsx",
    codeHtml: codeSnippetHtml.modWorldwide.dynamicBlockRenderer,
  },
  {
    title: "JSON page definitions",
    body:
      "Page content describes the ordered blocks and their data rather than embedding layout decisions in route components. Designers and content teams can reshape a narrative without rewriting the application shell.",
    codeLabel: "Archived page-definition excerpt",
    codePath: "src/app/data/pages/index.json",
    codeHtml: codeSnippetHtml.modWorldwide.cmsPageDefinition,
  },
  {
    title: "Scroll-reveal motion engine",
    body:
      "A shared scroll-reveal hook coordinates staged entrance behavior across blocks. Motion remains a system concern, with reduced-motion handling preventing the visual layer from becoming a requirement for comprehension.",
    codeLabel: "Archived motion excerpt",
    codePath: "src/utils/hooks/useScrollReveal.tsx",
    codeHtml: codeSnippetHtml.modWorldwide.scrollRevealMotionEngine,
  },
  {
    title: "Accessibility and interaction safeguards",
    body:
      "Animation-heavy sections retain keyboard interactions, ARIA labels, focus management, and reduced-motion fallbacks. Fullscreen media and other expressive interactions are implemented as accessible states rather than visual-only effects.",
  },
  {
    title: "Cross-functional delivery",
    body:
      "The platform was built in close collaboration with designers, filmmakers, digital artists, project managers, account managers, and agency stakeholders. The block model created a shared boundary between art direction, narrative content, and production implementation.",
  },
];
