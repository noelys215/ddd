import { Badge } from "../../components/Badge";
import Layout from "../../components/Layout";
import { Meta } from "../../components/Meta";
import MotionSection from "../../components/MotionSection";
import { Title } from "../../components/Title";
import CybersigilFrame from "../../components/CybersigilFrame";
import CodeBlock from "../../components/CodeBlock";
import SectionHeading from "../../components/SectionHeading";
import { Slider } from "../../components/Silder";
import arbiterHomeGif from "../../assets/works/arbiter/arbiter_home.gif";
import arbiterAiSelection from "../../assets/works/arbiter/arbiter_ai_selection.png";
import arbiterAiDeckDelt from "../../assets/works/arbiter/arbiter_ai_deck_delt.png";
import arbiterWaitingRoom from "../../assets/works/arbiter/arbiter_waiting_room.png";
import arbiterSwippingGif from "../../assets/works/arbiter/arbiter_swipping.gif";
import { codeSnippetHtml } from "../../generated/codeSnippetHtml";

const imageArr = [
  { src: arbiterHomeGif, alt: "Arbiter home" },
  { src: arbiterAiSelection, alt: "Arbiter AI selection" },
  { src: arbiterAiDeckDelt, alt: "Arbiter AI deck dealt" },
  { src: arbiterWaitingRoom, alt: "Arbiter waiting room" },
  { src: arbiterSwippingGif, alt: "Arbiter deck swiping" },
];

const ArbiterPortfolioCaseStudy = () => {
  return (
    <Layout title="arbiter_fullstack_platform">
      <MotionSection delay={0.08}>
        <CybersigilFrame
          className="rounded-md min-w-0 max-w-4xl w-full p-4 md:p-8 lg:p-12 bg-black shadow-md mx-auto opacity-95"
          style={{ backgroundColor: "#0f0f0f" }}
          aria-labelledby="arbiter-title"
        >
          <Title title="Works">
            Arbiter <Badge>2026</Badge>
          </Title>

          <section
            aria-labelledby="arbiter-details"
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
                <span>
                  Full-stack collaborative decision platform for groups choosing
                  what to watch
                </span>
              </li>
              <li>
                <Meta>Audience</Meta>
                <span>
                  Friend groups, couples, roommates, and social viewers who want
                  to eliminate decision fatigue
                </span>
              </li>
              <li>
                <Meta>Role</Meta>
                <span>
                  Product engineering across frontend architecture, backend
                  domain modeling, auth systems, AI integration, and delivery
                  workflows
                </span>
              </li>
              <li>
                <Meta>Stack</Meta>
                <span>
                  React 19 | TypeScript | Vite 7 | HeroUI | Tailwind 4 | React
                  Query 5 | Framer Motion | FastAPI | SQLAlchemy (async) |
                  PostgreSQL | Alembic | Pydantic | OpenAI Responses API
                </span>
              </li>
              <li>
                <Meta>Auth</Meta>
                <span>
                  HttpOnly JWT cookies + Google OAuth + magic-link email login
                </span>
              </li>
              <li>
                <Meta>Scale</Meta>
                <span>
                  31 API endpoints · 12 SQLAlchemy models · 13 migrations · 12
                  integration test modules
                </span>
              </li>
              <li>
                <Meta>Infra</Meta>
                <span>
                  Vercel frontend routing + Render deployment config for API +
                  managed Postgres + predeploy migrations
                </span>
              </li>
              <li>
                <Meta>Visit</Meta>
                <a
                  href="https://arbitertv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  arbitertv.com
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="problem-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="problem-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Problem
              </SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Choosing what to watch in a group usually devolves into chaotic
                messaging threads, uneven participation, and decision fatigue.
                <br />
                <br />
                Existing products focus on media discovery, not collaborative
                coordination. The actual challenge is turning subjective group
                preference negotiation into a fast, fair, and repeatable
                decision process.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="solution-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="solution-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Solution
              </SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Arbiter treats group movie night as a structured decision
                system. Users add friends, form invite-only groups, build shared
                watchlists, and run time-boxed sessions where everyone votes on
                a candidate deck and the system resolves a winner.
                <br />
                <br />
                The goal is not just recommendation, it is consensus, with
                deterministic outcomes, tie resolution, optional AI assistance,
                and a clean handoff into the actual watch experience.
                <br />
                <br />
                Once a winner is selected, Arbiter can generate and surface a
                shared Teleparty join flow so everyone moves from decision to
                viewing without bouncing back into group texts, link hunting, or
                manual coordination.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="system-framing-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="system-framing-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                System Framing
              </SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                The implementation treats this as a stateful multiplayer system:
                collecting preferences, generating personalized decks,
                synchronizing readiness, enforcing timer windows, resolving
                ties, and preserving deterministic session outcomes across
                clients.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="principles-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="principles-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Design Principles
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Social gating keeps collaborative spaces intentional and
                  abuse-resistant
                </li>
                <li>
                  Vague human preferences are translated into structured
                  constraints for deterministic filtering and optional AI
                  reranking
                </li>
                <li>
                  Per-user timers, lock states, and phase transitions prevent
                  stalled sessions
                </li>
                <li>
                  Deadlocks resolve through explicit tie-break rules and
                  deterministic fallback behavior
                </li>
                <li>
                  UX continuity is preserved through local progress persistence
                  and backend-driven session polling
                </li>
                <li>
                  The system does not stop at recommendation — it coordinates
                  the transition from winner selection into a shared Teleparty
                  join flow
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="architecture-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="architecture-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                System Architecture
              </SectionHeading>

              <p className="text-white/75 text-xs md:text-sm leading-relaxed text-center max-w-2xl mx-auto mb-4">
                High-level flow of the runtime decision pipeline.
              </p>

              <div className="max-w-2xl mx-auto rounded-md border border-white/10 bg-[#0b0b0b] px-6 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <div className="text-center space-y-2 text-sm md:text-base text-white/85">
                  <div className="font-mono tracking-wide">React Client</div>
                  <div className="text-pink-500 text-sm" aria-hidden="true">
                    ⌖
                  </div>

                  <div className="font-mono tracking-wide">
                    Session State Machine + React Query
                  </div>
                  <div className="text-pink-500 text-sm" aria-hidden="true">
                    ⌖
                  </div>

                  <div className="font-mono tracking-wide">
                    FastAPI API Layer
                  </div>
                  <div className="text-pink-500 text-sm" aria-hidden="true">
                    ⌖
                  </div>

                  <div className="font-mono tracking-wide">Domain Services</div>
                  <div className="text-pink-500 text-sm" aria-hidden="true">
                    ⌖
                  </div>

                  <div className="font-mono tracking-wide">
                    SQLAlchemy Models + Postgres
                  </div>
                  <div className="text-pink-500 text-sm" aria-hidden="true">
                    ⌖
                  </div>

                  <div className="font-mono tracking-wide">
                    External APIs (TMDB, OpenAI, OAuth, Email)
                  </div>
                </div>
              </div>

              <p className="text-white/75 text-xs md:text-sm leading-relaxed text-center max-w-2xl mx-auto mt-4">
                Business rules remain authoritative in backend domain services
                while the frontend orchestrates resilient, query-driven session
                state under real-time change.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="flow-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="flow-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Core Product Flow
              </SectionHeading>

              <div className="text-center space-y-2 text-sm md:text-base text-white/85">
                <div>Friendship Invite</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Group Membership</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Shared Watchlist</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Session Start</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Voting Round</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Tie-break (if needed)</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Winner Resolved</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Shared Teleparty Room Generated</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Group Join Flow</div>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="handoff-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="handoff-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Decision-to-Watch Handoff
              </SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Arbiter does not stop at choosing a winner. Once a title is
                resolved, the platform can generate a shared Teleparty room link
                and surface it to the full group as part of the session outcome.
                <br />
                <br />
                That removes one of the most annoying parts of group streaming:
                somebody manually creating a room, copying a link, and sending
                it out through text threads or side channels while everyone
                waits.
                <br />
                <br />
                Instead, Arbiter turns the final step into a coordinated
                handoff: choose together, resolve once, then let everyone join
                the same watch session with a single click.
              </p>
            </MotionSection>
          </section>

          {/*
            Add screenshots here later, before Engineering Highlights.

            <section aria-labelledby="screenshots-heading">
              <MotionSection delay={0.1}>
                <SectionHeading
                  symbol="cross"
                  headingId="screenshots-heading"
                  className="my-6"
                  headingClassName="font-bold text-center whitespace-normal"
                >
                  Screenshots
                </SectionHeading>
                <p className="text-white/75 text-xs md:text-sm leading-relaxed text-center max-w-2xl mx-auto mb-4">
                  Selected product views showing session flow, shared voting,
                  and winner resolution across the app.
                </p>
                <Slider array={imageArr} />
              </MotionSection>
            </section>
          */}

          <section aria-labelledby="highlights-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="highlights-heading"
                className="my-5"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Engineering Highlights
              </SectionHeading>

              <div className="space-y-10">
                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Stateful Session Orchestration</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      watch-picker-api/app/services/sessions.py
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.statefulSessionOrchestration}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Multi-user readiness model that prevents premature deck
                    start and keeps all participants synchronized before
                    swiping.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Deterministic Resolution + Tie Strategy</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      watch-picker-api/app/services/sessions.py
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.deterministicResolutionTieStrategy}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Winner logic is transparent, deterministic, and testable:
                    highest YES, then lowest NO, then seeded random for stable
                    fallback behavior.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Frontend Vote Integrity + Persistence</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      arbiter/src/pages/session/hooks/useSessionFlow.ts
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.frontendVoteIntegrityPersistence}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Enforces one vote submission per card/round while persisting
                    per-session card index so refreshes do not break user
                    progress.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>AI Parsing + Rerank with Safe Fallbacks</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      watch-picker-api/app/services/ai.py
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.aiParsingRerankFallbacks}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    AI first normalizes free-text intent into structured
                    constraints, then optionally reranks candidate media. If
                    parsing or reranking fails, the system falls back to
                    deterministic logic rather than blocking the session.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Teleparty Validation + Leader-Only Control</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      watch-picker-api/app/services/sessions.py
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.telepartyValidationLeaderControl}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Teleparty is treated as a post-resolution action with strict
                    host allowlisting and owner-only permissions to prevent
                    unsafe links and unauthorized session edits.
                  </p>
                </div>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="security-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="security-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Security & Reliability
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Cookie-based authentication with <code>HttpOnly</code>,
                  configurable <code>SameSite</code>, secure cookie defaults in
                  production, and JWT expiry controls
                </li>
                <li>
                  Multiple auth strategies: email/password, Google OAuth, and
                  one-time expiring magic links
                </li>
                <li>
                  Explicit permission checks for group membership, owner-only
                  actions, and watch-party link updates
                </li>
                <li>
                  Input/schema validation via Pydantic and Zod-compatible typed
                  contracts across API boundaries
                </li>
                <li>
                  Integration test coverage across auth, watchlist semantics,
                  sessions, votes, AI behavior, and configuration edge cases
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="outcomes-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="outcomes-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Engineering Outcomes
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-none">
                <li>
                  Demonstrates end-to-end ownership across product UX, API
                  design, data modeling, authentication, and deployment
                  workflows
                </li>
                <li>
                  Shows strong systems thinking through deterministic
                  algorithms, explicit state transitions, and clear failure-mode
                  handling
                </li>
                <li>
                  Balances AI assistance with strict validation, retries, and
                  graceful degradation
                </li>
                <li>
                  Delivers collaboration-focused product logic rather than
                  isolated CRUD screens
                </li>
                <li>
                  Includes production-grade concerns often skipped in portfolio
                  projects: legal flows, cookie policy controls, migration
                  discipline, and test coverage
                </li>
              </ul>
            </MotionSection>
          </section>

          {/* Screenshots */}
          <section aria-labelledby="screenshots-heading">
            <MotionSection delay={0.1}>
              <h4 className="text-white text-lg font-bold text-center my-6">
                Screenshots
              </h4>
              <Slider array={imageArr} />
            </MotionSection>
          </section>

          {/* Future Enhancements */}
          <section aria-labelledby="improvements-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="improvements-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Future Enhancements
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>WebSocket session updates instead of polling</li>
                <li>
                  Group preference modeling for personalized candidate decks
                </li>
                <li>Streaming AI rerank to reduce perceived latency</li>
                <li>Watch-party integrations beyond Teleparty</li>
              </ul>
            </MotionSection>
          </section>
        </CybersigilFrame>
      </MotionSection>
    </Layout>
  );
};

export default ArbiterPortfolioCaseStudy;
