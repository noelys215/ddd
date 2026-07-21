import CybersigilFrame from "../../components/CybersigilFrame";
import Layout from "../../components/Layout";
import MotionSection from "../../components/MotionSection";
import {
  CaseStudyBreadcrumb,
  CaseStudySection,
  EngineeringChallenge,
  FlowDiagram,
  MediaFrame,
  ProductMoment,
} from "./arbiter/ArbiterCaseStudyParts";
import {
  challenges,
  engineeringNotes,
  heroMedia,
  productMoments,
  qualityItems,
} from "./modworldwide/modWorldwideContent";
import {
  MODArchitectureDiagram,
  MODEngineeringNotes,
} from "./modworldwide/MODWorldwideCaseStudyParts";

const highlights = [
  {
    label: "Content system",
    value: "16 JSON-defined routes from one rendering pipeline",
  },
  {
    label: "Design system",
    value: "20+ reusable blocks for layout, media, and motion",
  },
  {
    label: "Delivery",
    value: "Static generation with structured SEO and telemetry",
  },
];

const MODWorldwide = () => {
  return (
    <Layout title="mod_worldwide_content_platform">
      <main className="w-full">
        <MotionSection delay={0.1}>
          <CybersigilFrame
          className="mx-auto min-w-0 w-full max-w-5xl rounded-md bg-black p-4 shadow-md opacity-95 sm:p-6 md:p-10 lg:p-14"
          style={{ backgroundColor: "#0f0f0f" }}
          aria-labelledby="modworldwide-title"
        >
          <header>
            <CaseStudyBreadcrumb currentPage="MOD Worldwide" />

            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-pink-400">
                  Agency platform · 2025
                </p>
                <h1
                  id="modworldwide-title"
                  className="text-5xl font-semibold leading-none text-white sm:text-6xl md:text-7xl"
                >
                  MOD Worldwide
                </h1>
                <p className="mt-5 text-xl leading-tight text-white md:text-2xl">
                  A modular publishing platform for an independent creative
                  agency.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                  MOD’s website turns structured JSON content into expressive
                  case studies through a reusable React block system, giving
                  creative teams more control without trading away motion,
                  accessibility, or production consistency.
                </p>

                <dl className="mt-8 grid gap-x-6 gap-y-4 border-y border-white/10 py-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">
                      Role
                    </dt>
                    <dd className="mt-1 text-white/80">
                      Frontend architecture and interaction engineering
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">
                      Scope
                    </dt>
                    <dd className="mt-1 text-white/80">
                      Agency website and case-study platform
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">
                      Core stack
                    </dt>
                    <dd className="mt-1 text-white/80">
                      Next.js · React · TypeScript · Tailwind CSS
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">
                      Status
                    </dt>
                    <dd className="mt-1 text-white/80">Live</dd>
                  </div>
                </dl>

                <a
                  href="https://themoderati.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 items-center rounded border border-pink-500/70 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-500/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400 motion-reduce:transition-none"
                >
                  Visit MOD Worldwide ↗
                </a>
              </div>

              <MediaFrame
                media={heroMedia}
                eager
                caption="MOD’s live site combines editorial layouts, cinematic media, and a shared content-rendering system."
              />
            </div>

            <div className="mt-10 grid border-y border-white/10 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="border-b border-white/10 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-pink-400">
                    {highlight.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {highlight.value}
                  </p>
                </div>
              ))}
            </div>
          </header>

          <CaseStudySection id="mod-problem-heading" title="The Problem">
            <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-white/75 md:text-lg">
              <p>
                A creative agency’s website has to support very different
                stories, media, and campaign structures. Building every case
                study as a custom page gives designers freedom, but makes
                publishing dependent on engineering and allows interaction
                patterns to drift over time.
              </p>
              <p>
                MOD needed a system that could preserve strong art direction
                while making new pages repeatable. The response was a structured
                content model, a deterministic block renderer, and one routing
                pipeline that turns page definitions into production URLs.
              </p>
            </div>
            <FlowDiagram
              label="MOD Worldwide publishing journey"
              items={[
                "Define the content",
                "Compose the blocks",
                "Generate the route",
                "Publish the story",
              ]}
            />
          </CaseStudySection>

          <CaseStudySection
            id="mod-walkthrough-heading"
            title="Platform Walkthrough"
          >
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
              The platform separates content structure from presentation, then
              reconnects them through a controlled vocabulary of reusable
              blocks.
            </p>
            <div className="mt-7">
              {productMoments.map((moment, index) => (
                <ProductMoment
                  key={moment.number}
                  moment={moment}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="mod-challenges-heading"
            title="Featured Engineering Challenges"
          >
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
              Three architectural decisions turned a visually ambitious agency
              site into a maintainable publishing platform.
            </p>
            <div className="mt-10">
              {challenges.map((challenge) => (
                <EngineeringChallenge
                  key={challenge.number}
                  challenge={challenge}
                />
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="mod-architecture-heading"
            title="Architecture"
          >
            <div className="mx-auto max-w-3xl space-y-4 text-center text-sm leading-relaxed text-white/70 md:text-base">
              <p>
                A slug resolves its JSON page definition, then
                ContentTransformer maps each declared section to a known React
                block. Presentation logic stays inside those reusable blocks
                instead of accumulating in route-specific templates.
              </p>
              <p>
                Next.js statically generates the resulting routes alongside
                structured metadata and sitemap entries. Motion, smooth
                scrolling, analytics hooks, and fullscreen media remain shared
                platform behavior rather than isolated page features.
              </p>
            </div>
            <MODArchitectureDiagram />
          </CaseStudySection>

          <CaseStudySection
            id="mod-quality-heading"
            title="Quality & Production Readiness"
          >
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-white/70 md:text-base">
              The platform pairs visual ambition with static delivery,
              structured publishing, accessible interaction states, and a
              bounded component vocabulary that remains practical to operate.
            </p>
            <dl className="mt-10 grid border-y border-white/10 sm:grid-cols-2">
              {qualityItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 py-6 sm:px-6 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-pink-400">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    {item.value}
                  </dd>
                  <dd className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </CaseStudySection>

          <CaseStudySection
            id="mod-notes-heading"
            title="Engineering Notes"
          >
            <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
              The main narrative stays visual; these notes retain the existing
              implementation evidence and archived excerpts for deeper review.
            </p>
            <MODEngineeringNotes notes={engineeringNotes} />
          </CaseStudySection>

          <CaseStudySection
            id="mod-reflection-heading"
            title="Outcome & Reflection"
          >
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-pink-400">
                  What MOD became
                </p>
                <p className="text-sm leading-relaxed text-white/75 md:text-base">
                  MOD’s site became a maintainable content platform rather than
                  a collection of static marketing pages. One structured model
                  now supports branded storytelling, cinematic media, route
                  generation, SEO metadata, and shared interaction behavior.
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-pink-400">
                  What the work demonstrated
                </p>
                <p className="text-sm leading-relaxed text-white/75 md:text-base">
                  The project showed how a strict technical boundary can create
                  more creative freedom. By separating structured content from
                  reusable presentation logic, the team could move faster
                  without reducing every page to the same template or making
                  every visual change an engineering task.
                </p>
              </div>
            </div>
          </CaseStudySection>

          <section
            aria-labelledby="mod-cta-heading"
            className="border-t border-white/10 py-12 text-center md:py-14"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-pink-400">
              See the platform in context
            </p>
            <h2
              id="mod-cta-heading"
              className="text-3xl font-semibold text-white md:text-4xl"
            >
              Visit MOD Worldwide.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Explore the live site and see how the content system supports the
              agency’s work, culture, and point of view.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <a
                href="https://themoderati.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400"
              >
                Visit MOD Worldwide ↗
              </a>
            </div>
          </section>
          </CybersigilFrame>
        </MotionSection>
      </main>
    </Layout>
  );
};

export default MODWorldwide;
