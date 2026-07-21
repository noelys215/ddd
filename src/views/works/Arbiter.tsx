import CybersigilFrame from "../../components/CybersigilFrame";
import Layout from "../../components/Layout";
import {
  ArchitectureDiagram,
  CaseStudyBreadcrumb,
  CaseStudySection,
  EngineeringChallenge,
  EngineeringNotes,
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
} from "./arbiter/arbiterContent";

const highlights = [
  {
    label: "Realtime",
    value: "Synchronized voting and group updates",
  },
  {
    label: "Product system",
    value: "Friends, groups, History, and Insights",
  },
  {
    label: "Full stack",
    value: "React, FastAPI, PostgreSQL, and WebSockets",
  },
];

const ArbiterPortfolioCaseStudy = () => {
  return (
    <Layout title="arbiter_fullstack_platform">
      <main className="w-full">
        <CybersigilFrame
          className="mx-auto min-w-0 w-full max-w-5xl rounded-md bg-black p-4 shadow-md opacity-95 sm:p-6 md:p-10 lg:p-14"
          style={{ backgroundColor: "#0f0f0f" }}
          aria-labelledby="arbiter-title"
        >
          <header className="">
            <CaseStudyBreadcrumb currentPage="Arbiter" />

            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-pink-400">
                  Independent product · Live
                </p>
                <h1
                  id="arbiter-title"
                  className="text-5xl font-semibold leading-none text-white sm:text-6xl md:text-7xl"
                >
                  Arbiter
                </h1>
                <p className="mt-5 text-xl leading-tight text-white md:text-2xl">
                  A realtime movie-night decision platform.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                  Arbiter gives groups one shared space to build a watchlist,
                  set the mood, decide together, and preserve the night after
                  the winner moves into a Teleparty watch session.
                </p>

                <dl className="mt-8 grid gap-x-6 gap-y-4 border-y border-white/10 py-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">
                      Role
                    </dt>
                    <dd className="mt-1 text-white/80">
                      Product design and full-stack engineering
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">
                      Scope
                    </dt>
                    <dd className="mt-1 text-white/80">Independent product</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">
                      Core stack
                    </dt>
                    <dd className="mt-1 text-white/80">
                      React · FastAPI · PostgreSQL · WebSockets
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">
                      Status
                    </dt>
                    <dd className="mt-1 text-white/80">
                      Live, actively developed
                    </dd>
                  </div>
                </dl>

                <a
                  href="https://arbitertv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 items-center rounded border border-pink-500/70 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-500/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400 motion-reduce:transition-none"
                >
                  Visit Arbiter ↗
                </a>
              </div>

              <MediaFrame
                media={heroMedia}
                eager
                caption="The current group watchlist: one source of truth for titles, members, sessions, History, and Insights."
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

          <CaseStudySection
            id="problem-heading"
            title="The Problem"
            spacing="compact"
          >
            <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-white/75 md:text-lg">
              <p>
                Choosing a film with other people usually means moving between a
                group chat, streaming apps, scattered lists, ad hoc polls, and a
                separate watch-party tool. The friction is not finding more
                titles. It is turning several opinions into one fair decision.
              </p>
              <p>
                Arbiter creates a persistent group space: friends build the
                shortlist over time, describe what the night should feel like,
                vote through the same deck, and move directly into watching. The
                result becomes part of the group’s history instead of
                disappearing with the poll.
              </p>
            </div>
            <FlowDiagram
              label="Arbiter's core product journey"
              items={[
                "Build the list",
                "Set the mood",
                "Vote together",
                "Start watching",
              ]}
            />
          </CaseStudySection>

          <CaseStudySection
            id="walkthrough-heading"
            title="Product Walkthrough"
            spacing="compact"
          >
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
              The core loop moves from a durable group shortlist to a shared
              decision, then turns the outcome into memory and context.
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
            id="challenges-heading"
            title="Featured Engineering Challenges"
            spacing="compact"
          >
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
              Three decisions shaped Arbiter more than any individual component
              or endpoint.
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
            id="architecture-heading"
            title="Architecture"
            spacing="compact"
          >
            <div className="mx-auto max-w-3xl space-y-4 text-center text-sm leading-relaxed text-white/70 md:text-base">
              <p>
                FastAPI owns authentication, authorization, session transitions,
                analytics definitions, and canonical group state. TanStack Query
                manages server state in React, while semantic WebSocket events
                trigger targeted invalidation rather than duplicating backend
                rules in the browser.
              </p>
              <p>
                PostgreSQL stores the social graph, watchlists, active
                decisions, and immutable completion snapshots. Redis coordinates
                distributed abuse limits; TMDB, Google, Resend, OpenAI, and
                Teleparty remain bounded external integrations rather than
                sources of authority.
              </p>
            </div>
            <ArchitectureDiagram />
          </CaseStudySection>

          <CaseStudySection
            id="quality-heading"
            title="Quality & Production Readiness"
            spacing="compact"
          >
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-white/70 md:text-base">
              I treated Arbiter as a production product rather than a visual
              prototype, including concurrency, reconnect recovery, object-level
              authorization, accessibility, failure states, migrations, and safe
              external-service boundaries.
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
            id="notes-heading"
            title="Engineering Notes"
            spacing="compact"
          >
            <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
              The main story stays concise; these notes preserve implementation
              depth for readers who want to inspect specific systems.
            </p>
            <EngineeringNotes notes={engineeringNotes} />
          </CaseStudySection>

          <CaseStudySection
            id="reflection-heading"
            title="Outcome & Reflection"
            spacing="compact"
          >
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-pink-400">
                  What Arbiter became
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                  Arbiter grew from a picker into a complete private movie-night
                  system: persistent relationships, shared watchlists, mood-led
                  setup, synchronized voting, Teleparty handoff, durable
                  History, explainable Insights, shareable keepsakes, and
                  first-time guidance. Each surface rests on the same group and
                  session model instead of becoming a disconnected feature.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-pink-400">
                  What I learned
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                  The project sharpened how I separate fast feedback from
                  authority: WebSockets can make a product feel live without
                  becoming its state model, snapshots can preserve history
                  without copying entire upstream payloads, and playful
                  analytics can stay credible when every sentence is traceable
                  to a rule. The same discipline guided the HeroUI migration,
                  security work, and the decision to defer features until their
                  foundations were ready.
                </p>
              </div>
            </div>
          </CaseStudySection>

          <section
            aria-labelledby="cta-heading"
            className="border-t border-white/10 py-12 text-center md:py-14"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-pink-400">
              The product, not just the system
            </p>
            <h2
              id="cta-heading"
              className="text-3xl font-semibold text-white md:text-4xl"
            >
              See Arbiter in motion.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Explore the live product and see the full movie-night loop in
              context.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://arbitertv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400"
              >
                Visit Arbiter ↗
              </a>
              {/* <Link
              to="/works/ai-knowledge-assistant"
              className="inline-flex min-h-11 items-center rounded border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400"
            >
              Next project →
            </Link> */}
              {/* <a
              href="mailto:betanch@gmail.com?subject=Arbiter%20case%20study"
              className="inline-flex min-h-11 items-center px-4 py-2.5 text-sm font-semibold text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400"
            >
              Contact
            </a> */}
            </div>
          </section>
        </CybersigilFrame>
      </main>
    </Layout>
  );
};

export default ArbiterPortfolioCaseStudy;
