import { Badge } from "../../components/Badge";
import Layout from "../../components/Layout";
import { Meta } from "../../components/Meta";
import MotionSection from "../../components/MotionSection";
import { Slider } from "../../components/Silder";
import { Title } from "../../components/Title";
import CybersigilFrame from "../../components/CybersigilFrame";
import modShot1 from "../../assets/works/modworldwide/MacBook Pro-1773000445376.jpeg";
import modShot2 from "../../assets/works/modworldwide/MacBook Pro-1773000487175.jpeg";
import modShot4 from "../../assets/works/modworldwide/MacBook Pro-1773000519270.jpeg";
import CodeBlock from "../../components/CodeBlock";

const imageArr = [
  { src: modShot1, alt: "MOD Worldwide portfolio homepage" },
  { src: modShot2, alt: "MOD Worldwide work listing section" },
  { src: modShot4, alt: "MOD Worldwide branded section layout" },
];

const MODWorldwide = () => {
  return (
    <Layout title="mod_worldwide">
      <MotionSection delay={0.1}>
        <CybersigilFrame
          className="rounded-md min-w-0 max-w-4xl w-full p-4 md:p-8 lg:p-12 bg-black shadow-md mx-auto opacity-95"
          style={{ backgroundColor: "#101010" }}
          aria-labelledby="modworldwide-title"
        >
          <Title title="Works">
            MOD Worldwide <Badge>2025</Badge>
          </Title>

          <section
            aria-labelledby="modworldwide-details"
            className="my-4 text-white"
          >
            <ul className="space-y-1">
              <li>
                <Meta>Status</Meta>
                <span className="text-green-50 text-xs uppercase font-semibold px-1.5 py-0.5 rounded-sm bg-green-700">
                  Online
                </span>
              </li>
              <li>
                <Meta>Type</Meta>
                <span>Marketing + case-study showcase platform</span>
              </li>
              <li>
                <Meta>Role</Meta>
                <span>
                  Frontend architecture, block system, routing pipeline, and
                  interaction engineering
                </span>
              </li>
              <li>
                <Meta>Impact</Meta>
                <span>
                  Reduced engineering involvement in content publishing by
                  shifting the site to a JSON-driven content architecture.
                </span>
              </li>
              <li>
                <Meta>Scale</Meta>
                <span>16 JSON-defined routes + 20+ reusable block types</span>
              </li>
              <li>
                <Meta>Stack</Meta>
                <span>
                  Next.js 15 | React 19 | TypeScript | Tailwind CSS 4 | Motion |
                  Lenis | PostHog
                </span>
              </li>
              <li>
                <Meta>Rendering</Meta>
                <span>
                  Static generation with structured JSON content routes
                </span>
              </li>
              <li>
                <Meta>Perf</Meta>
                <span>
                  ~102 KB shared first-load JS · ~183 KB dynamic route shell
                </span>
              </li>
              <li>
                <Meta>Visit</Meta>
                <a
                  href="https://themoderati.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  themoderati.com
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="overview-heading">
            <MotionSection delay={0.1}>
              <h2
                id="overview-heading"
                className="text-white text-lg font-bold text-center my-6"
              >
                Project Overview
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                This project is MOD’s official website and case-study platform,
                built from scratch through close collaboration between
                engineering, designers, filmmakers, digital artists, project
                managers, and agency stakeholders.
                <br />
                <br />
                Instead of a traditional hardcoded marketing site, the platform
                runs on structured JSON content, reusable React blocks, and a
                routing pipeline that maps content definitions directly to URLs.
                <br />
                <br />
                The result is a system that lets non-engineering teams publish
                and iterate quickly while keeping design, motion, and
                implementation quality consistent across the entire site.
                <br />
                <br />
                This approach turns the website into a maintainable content
                platform rather than a collection of static marketing pages.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="architecture-heading">
            <MotionSection delay={0.1}>
              <h2
                id="architecture-heading"
                className="text-white text-lg font-bold text-center my-6"
              >
                How It Works
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Request flow:
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed mt-2">
                Slug → JSON definition → ContentTransformer → React blocks →
                Rendered page
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="system-architecture-heading">
            <MotionSection delay={0.1}>
              <h2
                id="system-architecture-heading"
                className="text-white text-lg font-bold text-center my-6 mb-0"
              >
                System Architecture
              </h2>
              <h3
                id="system-architecture-heading"
                className="text-white text-md font-semibold text-center my-2"
              >
                High-level flow of the content rendering pipeline:
              </h3>

              <div className="max-w-xl mx-auto rounded-md border border-white/10 bg-[#0b0b0b] px-6 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <div className="text-center space-y-2 text-sm md:text-base text-white/85">
                  <div className="font-mono tracking-wide">
                    JSON Page Definition
                  </div>
                  <div
                    className="text-pink-500 text-sm"
                    style={{ textShadow: "0 0 6px rgba(255,42,138,0.3)" }}
                    aria-hidden="true"
                  >
                    ✦
                  </div>

                  <div className="font-mono tracking-wide">
                    File-Based Routing
                  </div>
                  <div
                    className="text-pink-500 text-sm"
                    style={{ textShadow: "0 0 6px rgba(255,42,138,0.3)" }}
                    aria-hidden="true"
                  >
                    ✦
                  </div>

                  <div className="font-mono tracking-wide">
                    ContentTransformer
                  </div>
                  <div
                    className="text-pink-500 text-sm"
                    style={{ textShadow: "0 0 6px rgba(255,42,138,0.3)" }}
                    aria-hidden="true"
                  >
                    ✦
                  </div>

                  <div className="font-mono tracking-wide">
                    React Block Components
                  </div>
                  <div
                    className="text-pink-500 text-sm"
                    style={{ textShadow: "0 0 6px rgba(255,42,138,0.3)" }}
                    aria-hidden="true"
                  >
                    ✦
                  </div>

                  <div className="font-mono tracking-wide">Rendered Page</div>
                </div>
              </div>

              <p className="text-white/75 text-xs md:text-sm leading-relaxed text-center max-w-2xl mx-auto mt-4">
                A JSON-driven content model feeds a reusable rendering pipeline,
                allowing the site to scale as a platform instead of a set of
                hardcoded pages.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="features-heading">
            <MotionSection delay={0.1}>
              <h2
                id="features-heading"
                className="text-white text-lg font-bold text-center my-6"
              >
                Why It Stands Out
              </h2>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-none">
                <li>
                  Demonstrates product thinking and system design maturity, not
                  one-off page building
                </li>
                <li>
                  Ships advanced interaction engineering with choreographed
                  motion, smooth scrolling, and fullscreen media flows across
                  reusable blocks
                </li>
                <li>
                  Production-safe accessibility with focus management, keyboard
                  interactions, ARIA labeling, and reduced-motion fallbacks
                </li>
                <li>
                  Operational completeness through JSON-driven SEO metadata,
                  sitemap generation, telemetry hooks, and static pre-rendering
                  at route scale
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="challenges-heading">
            <MotionSection delay={0.1}>
              <h2
                id="challenges-heading"
                className="text-white text-lg font-bold text-center my-6"
              >
                Engineering Challenges
              </h2>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc">
                <li>
                  Designing a deterministic block renderer that allows flexible
                  page composition while keeping bundle size small
                </li>
                <li>
                  Coordinating animation choreography across reusable blocks
                  without layout thrashing
                </li>
                <li>
                  Ensuring accessibility and motion-reduction fallbacks for
                  animation-heavy sections
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="decisions-heading">
            <MotionSection delay={0.1}>
              <h2
                id="decisions-heading"
                className="text-white text-lg font-bold text-center my-6"
              >
                Key Engineering Decisions
              </h2>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc">
                <li>
                  Use JSON as the source of truth for route-driven content
                  composition
                </li>
                <li>
                  Keep presentation logic inside reusable block components
                  rather than page-specific templates
                </li>
                <li>
                  Prefer static generation for content-heavy routes to preserve
                  performance and operational simplicity
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="highlights-heading">
            <MotionSection delay={0.1}>
              <h2
                id="highlights-heading"
                className="text-white text-lg font-bold text-center my-5"
              >
                Engineering Highlights
              </h2>

              <p className="text-white/80 text-sm text-center max-w-2xl mx-auto mb-6">
                Selected excerpts from the production codebase illustrating the
                routing system, JSON-driven CMS architecture, and animation
                engine powering the platform.
              </p>

              <div className="space-y-10">
                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>File-Based CMS Routing</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      src/app/[[...slug]]/pageData.ts
                    </span>
                  </div>
                  <CodeBlock
                    lang="ts"
                    code={`export const slugToFileMap: Record<string, PageMapEntry> = fs
  .readdirSync(PAGES_DIR)
  .reduce((map, file) => {
    const slug =
      file === "index.json" ? [] : file.replace(/\\.json$/, "").split(".");

    map[slug.join("/")] = {
      filename: file,
      slug,
      filePath: path.join(PAGES_DIR, file),
    };

    return map;
  }, {} as Record<string, PageMapEntry>);

export function getStaticParams() {
  return Object.values(slugToFileMap).map((entry) => ({
    slug: entry.slug,
  }));
}`}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Demonstrates scalable routing architecture with static
                    generation and no hardcoded page registry.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Dynamic Block Renderer</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      src/components/ContentTransformer.tsx
                    </span>
                  </div>

                  <CodeBlock
                    lang="tsx"
                    code={`const componentMap: Record<string, React.ComponentType<any>> =
  Object.keys(Blocks).reduce((acc, key) => {
    acc[key.toLowerCase()] = (Blocks as any)[key];
    return acc;
  }, {} as Record<string, React.ComponentType<any>>);

return (content || []).map((section: any, id: number) => {
  const ComponentType = componentMap[section.type];
  if (!ComponentType) return null;

  return (
    <ComponentType
      key={id + "-" + section.type}
      id={id}
      {...section.props}
    />
  );
});`}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Shows reusable system composition where CMS content
                    definitions dynamically resolve to React blocks.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>CMS Page Definition</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      src/app/data/pages/index.json
                    </span>
                  </div>

                  <CodeBlock
                    lang="json"
                    code={`{
  "metadata": {
    "title": "Home",
    "description": "MOD Worldwide"
  },
  "nav": {
    "variant": "light"
  },
  "content": [
    {
      "type": "videohero",
      "props": {
        "firstLine": "We are a creative collective",
        "secondLine": "built on intentional disruption"
      }
    },
    {
      "type": "scrollrevealtext",
      "props": {
        "segments": [
          { "text": "We build digital experiences", "color": "#212121" }
        ]
      }
    },
    {
      "type": "worktilelist",
      "props": {
        "tileSize": "large"
      }
    }
  ]
}`}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    JSON-driven page structure that allows designers and content
                    teams to assemble complex layouts without modifying
                    application code.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Scroll-Reveal Motion Engine</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      src/utils/hooks/useScrollReveal.tsx
                    </span>
                  </div>

                  <CodeBlock
                    lang="ts"
                    code={`const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start 0.9", "end 0.5"],
});

useMotionValueEvent(scrollProgress, "change", (value: number) => {
  if (value >= nextWordStart && !hasAnimated) {
    setHasAnimated(true);

    animate(finalColorOpacity, 1, {
      duration: 1.8,
      ease: "easeOut",
    });
  }
});`}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Custom motion logic orchestrating staged scroll-driven
                    animation rather than simple utility transitions.
                  </p>
                </div>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="collab-heading">
            <MotionSection delay={0.1}>
              <h2
                id="collab-heading"
                className="text-white text-lg font-bold text-center my-6"
              >
                In-House Delivery Model
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                The build reflects real cross-functional delivery: designers
                define art direction and interaction rhythm, account managers
                shape narrative clarity and business framing, and developers
                translate both into a scalable block system that ships in
                production.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="screenshots-heading">
            <MotionSection delay={0.1}>
              <h2
                id="screenshots-heading"
                className="text-white text-lg font-bold text-center my-6"
              >
                Selected Screens
              </h2>
              <Slider array={imageArr} />
            </MotionSection>
          </section>
        </CybersigilFrame>
      </MotionSection>
    </Layout>
  );
};

export default MODWorldwide;
