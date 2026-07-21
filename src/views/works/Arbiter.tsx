import { Badge } from "../../components/Badge";
import Layout from "../../components/Layout";
import { Meta } from "../../components/Meta";
import MotionSection from "../../components/MotionSection";
import { Title } from "../../components/Title";
import CybersigilFrame from "../../components/CybersigilFrame";
import CodeBlock from "../../components/CodeBlock";
import SectionHeading from "../../components/SectionHeading";
import { Slider } from "../../components/Silder";
import arbiterHomeMp4 from "../../assets/works/arbiter/arbiter_home.mp4";
import arbiterHomePoster from "../../assets/works/arbiter/arbiter_home_poster.jpg";
import arbiterHomeWebm from "../../assets/works/arbiter/arbiter_home.webm";
import arbiterAiSelection from "../../assets/works/arbiter/arbiter_ai_selection.png";
import arbiterAiDeckDelt from "../../assets/works/arbiter/arbiter_ai_deck_delt.png";
import arbiterWaitingRoom from "../../assets/works/arbiter/arbiter_waiting_room.png";
import arbiterSwippingMp4 from "../../assets/works/arbiter/arbiter_swipping.mp4";
import arbiterSwippingPoster from "../../assets/works/arbiter/arbiter_swipping_poster.jpg";
import arbiterSwippingWebm from "../../assets/works/arbiter/arbiter_swipping.webm";
import { codeSnippetHtml } from "../../generated/codeSnippetHtml";

const imageArr = [
  {
    kind: "video" as const,
    alt: "Arbiter home",
    poster: arbiterHomePoster,
    sources: [
      { src: arbiterHomeWebm, type: "video/webm" },
      { src: arbiterHomeMp4, type: "video/mp4" },
    ],
  },
  { src: arbiterAiSelection, alt: "Arbiter movie-night preferences" },
  { src: arbiterAiDeckDelt, alt: "Arbiter candidate deck" },
  { src: arbiterWaitingRoom, alt: "Arbiter waiting room" },
  {
    kind: "video" as const,
    alt: "Arbiter deck swiping",
    poster: arbiterSwippingPoster,
    sources: [
      { src: arbiterSwippingWebm, type: "video/webm" },
      { src: arbiterSwippingMp4, type: "video/mp4" },
    ],
  },
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
                  Full-stack social movie-night platform for building a shared
                  shortlist, deciding together, and preserving the result
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
                  End-to-end product ownership: UX, frontend architecture,
                  backend domain design, realtime systems, security, testing,
                  and deployment
                </span>
              </li>
              <li>
                <Meta>Stack</Meta>
                <span>
                  React 19 | TypeScript | Vite 7 | HeroUI 3 | Tailwind 4 |
                  TanStack Query 5 | Framer Motion | FastAPI | async SQLAlchemy |
                  PostgreSQL | Redis | Alembic | Pydantic | TMDB | OpenAI
                </span>
              </li>
              <li>
                <Meta>Auth</Meta>
                <span>
                  Revocable HttpOnly cookie sessions + Google OAuth identity
                  binding + one-time magic-link login
                </span>
              </li>
              <li>
                <Meta>Scale</Meta>
                <span>
                  55 HTTP routes · 3 WebSocket channels · 17 domain models · 24
                  migrations · 35 backend test modules
                </span>
              </li>
              <li>
                <Meta>Infra</Meta>
                <span>
                  Vercel frontend routing + Render deployment config for API +
                  managed Postgres + Redis + predeploy migrations
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

          <section aria-labelledby="overview-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="overview-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Overview
              </SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Arbiter turns the recurring “what should we watch?” argument
                into a shared ritual. Friends maintain a private group
                watchlist, describe what the night should feel like, and vote
                through the same synchronized deck until Arbiter resolves a
                winner.
                <br />
                <br />
                The decision is not disposable. Arbiter freezes a durable
                historical snapshot of the group, participants, candidates,
                mood, constraints, and outcome. Completed nights become an
                editorial archive, deterministic group insights, and private
                high-resolution cards that can be downloaded or shared.
              </p>
            </MotionSection>
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
                Streaming catalogues solve discovery, but not coordination.
                Group movie nights still break down across scattered text
                threads, duplicated suggestions, dominant voices, forgotten
                recommendations, and an exhausting final choice.
                <br />
                <br />
                Arbiter creates one trusted source of truth: who is in the
                group, what everyone is willing to watch, what tonight calls
                for, and how the winner was chosen. The product reduces decision
                fatigue without replacing taste with a black-box recommendation
                engine, then preserves the night so the group builds a shared
                identity over time.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="features-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="features-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Product Features
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Google OAuth and one-time magic-link authentication, unique
                  public usernames, customizable avatars, and a discreet
                  first-time product tour
                </li>
                <li>
                  Persistent friendships with username/email discovery,
                  privacy-preserving requests, blocking, in-app invitations,
                  and realtime notification badges
                </li>
                <li>
                  Private groups with friend-based membership, owner controls,
                  ownership transfer, and authorization enforced on every
                  group-scoped operation
                </li>
                <li>
                  Realtime shared watchlists with TMDB search, manual titles,
                  contributor attribution, filtering, snoozing, watched state,
                  and removal workflows
                </li>
                <li>
                  “Tonight Feels Like…” emotional cues, genre/runtime
                  constraints, optional custom context, and an explainable deck
                  built from the group’s own shortlist
                </li>
                <li>
                  Synchronized voting, vote undo, waiting-room state, tie
                  resolution, leader controls, deterministic winners, and a
                  safe Teleparty handoff
                </li>
                <li>
                  Durable Movie Night History with participant and candidate
                  snapshots, watched confirmation, completed-night details,
                  and graceful handling of mutable or deleted source data
                </li>
                <li>
                  Rich movie details with group-specific context, historical
                  appearances, missing-artwork fallbacks, and active-vote
                  privacy
                </li>
                <li>
                  Server-calculated Insights and Group Personality: activity,
                  taste, decision patterns, records, positive member
                  highlights, sample thresholds, and explainable supporting
                  facts
                </li>
                <li>
                  Three adaptive Movie Night Card templates in square and
                  portrait formats, deterministic artwork/typography, strict
                  privacy sanitization, 1080px PNG export, native sharing, and
                  download fallback
                </li>
                <li>
                  In-app feedback with explicit diagnostic consent, hidden
                  recipient configuration, honeypot protection, idempotent
                  Resend delivery, and distributed rate limiting
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="how-to-use-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="how-to-use-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                How It Works
              </SectionHeading>
              <ol className="text-white text-sm md:text-base leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  Sign in, connect with friends by username or email, then
                  create a private movie-night group.
                </li>
                <li>
                  Build the shared shortlist together by searching TMDB or
                  adding a title manually.
                </li>
                <li>
                  Start a Movie Night, choose up to three mood cues, and add
                  optional genre, runtime, or custom context.
                </li>
                <li>
                  Everyone votes through the same realtime deck. Arbiter keeps
                  clients synchronized and resolves the winner consistently.
                </li>
                <li>
                  Confirm whether the group watched it, revisit the night in
                  History, explore evolving Insights, or create a private
                  shareable card.
                </li>
              </ol>
            </MotionSection>
          </section>

          <section aria-labelledby="technical-stack-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="technical-stack-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Technical Stack
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  React 19, TypeScript, Vite 7, HeroUI 3, Tailwind 4, Framer
                  Motion, Driver.js, and TanStack Query for the client
                </li>
                <li>
                  FastAPI, async SQLAlchemy, Pydantic, Alembic, and PostgreSQL
                  for the API and persistence layer
                </li>
                <li>
                  FastAPI WebSocket hubs for account notifications, shared
                  watchlists, and synchronized voting sessions
                </li>
                <li>
                  TMDB for movie metadata, OpenAI as an optional bounded
                  constraint/reranking layer, Resend for transactional email,
                  and Redis for distributed abuse controls
                </li>
                <li>
                  Vercel for the frontend; Render for the API, managed Postgres,
                  Redis, health checks, and Alembic predeploy migrations
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
                Architecture
              </SectionHeading>

              <p className="text-white/75 text-xs md:text-sm leading-relaxed text-center max-w-2xl mx-auto mb-4">
                Authoritative writes still happen through REST. Websockets
                broadcast invalidation events so every connected client refreshes
                the same canonical server state.
              </p>

              <div className="max-w-2xl mx-auto rounded-md border border-white/10 bg-[#0b0b0b] px-6 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <div className="text-center space-y-2 text-sm md:text-base text-white/85">
                  <div className="font-mono tracking-wide">
                    React Client + React Query
                  </div>
                  <div className="text-pink-500 text-sm" aria-hidden="true">
                    ⌖
                  </div>

                  <div className="font-mono tracking-wide">
                    REST Mutations + WebSocket Listeners
                  </div>
                  <div className="text-pink-500 text-sm" aria-hidden="true">
                    ⌖
                  </div>

                  <div className="font-mono tracking-wide">
                    FastAPI Routes + Realtime Hubs
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
                    External Services: TMDB, OpenAI, OAuth, Resend, Redis
                  </div>
                </div>
              </div>

              <p className="text-white/75 text-xs md:text-sm leading-relaxed text-center max-w-2xl mx-auto mt-4">
                The websocket layer deliberately sends small messages like
                <code> session_updated </code> and
                <code> watchlist_updated </code>. Clients then invalidate cache
                keys and refetch typed API responses instead of trusting
                long-lived pushed payloads.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="database-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="database-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Database Design
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Users, revocable auth sessions, OAuth identities, one-time
                  magic-link grants, friendships, blocks, groups, invitations,
                  and memberships model identity and social permissions
                </li>
                <li>
                  Titles are canonicalized separately from group watchlist items
                  so TMDB-backed and manual entries can share product behavior
                </li>
                <li>
                  Watchlist items are group-scoped and can be watched, snoozed,
                  removed, or filtered for tonight eligibility
                </li>
                <li>
                  Movie-night sessions use explicit lifecycle states and persist
                  structured mood/genre/runtime criteria, timing, winner fields,
                  and safe watch-party handoff facts
                </li>
                <li>
                  Session candidates freeze an ordered deck, while database
                  constraints enforce one mutable yes/no vote per user and
                  candidate
                </li>
                <li>
                  Completion is transactional and idempotent. Historical
                  participant, candidate, group, criteria, and outcome snapshots
                  remain intelligible after current records change
                </li>
                <li>
                  Partial unique indexes and row-level transaction boundaries
                  protect pending requests, active sessions, membership, voting,
                  completion, and concurrent acceptance flows
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="api-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="api-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                API Design
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Explicit Pydantic request/response contracts cover auth,
                  profiles, friends, blocks, groups, invitations, watchlists,
                  sessions, completion, History, movie context, Insights, and
                  feedback
                </li>
                <li>
                  <code>/sessions/:id/ws</code> authorizes the cookie, verifies
                  the user can read that session, sends a connected event, and
                  keeps the socket alive with ping/pong
                </li>
                <li>
                  <code>/groups/:id/watchlist/ws</code> uses the same cookie auth
                  path and verifies group membership before subscribing a client
                  to group watchlist events
                </li>
                <li>
                  Mutations commit database changes first, then broadcast a
                  semantic event such as <code>vote_cast</code>,
                  <code>session_completed</code>, or
                  <code>history_updated</code>
                </li>
                <li>
                  Server-side analytics centralize metric definitions,
                  eligibility thresholds, deterministic personality rules, and
                  data-quality notes instead of duplicating calculations in
                  React
                </li>
              </ul>
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
                <div>Connect with Friends</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Create a Private Group</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Realtime Shared Watchlist</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Choose Tonight’s Mood + Constraints</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Frozen Candidate Deck</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Realtime Vote Updates</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Deterministic Winner Resolution</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Leader-Controlled Teleparty Handoff</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Durable History + Watched Confirmation</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Group Insights + Shareable Keepsake</div>
              </div>
            </MotionSection>
          </section>

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
                    <span>Realtime Hub Fanout</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      watch-picker-api/app/services/session_realtime.py
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.websocketHubFanout}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    The backend keeps per-session socket sets behind an async
                    lock, broadcasts compact update events, and prunes dead
                    sockets without blocking the underlying domain mutation.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Authenticated WebSocket Routes</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      watch-picker-api/app/api/routes/sessions.py
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.authenticatedWebsocketRoute}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Websocket access uses the same auth cookie as REST routes
                    and performs a real session-state permission read before the
                    socket is accepted.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Client Reconnect + Query Invalidation</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      arbiter/src/pages/session/hooks/useSessionRealtime.ts
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.sessionRealtimeHook}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    The frontend reconnects after disconnects, sends periodic
                    pings, and invalidates only the active session-state query
                    when the server announces a matching session update.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Watchlist Realtime Cache Sync</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      arbiter/src/pages/HomePage/hooks/useWatchlistRealtime.ts
                    </span>
                  </div>

                  <CodeBlock
                    html={codeSnippetHtml.arbiter.watchlistRealtimeInvalidation}
                  />

                  <p className="text-white/70 text-xs leading-relaxed">
                    Group watchlist changes now propagate to every connected
                    member by invalidating both the paginated library and the
                    compact watchlist query keys.
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
                    Winner logic stays transparent and testable: highest YES,
                    then lowest NO, then seeded random fallback behavior when a
                    tie remains.
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
                  Database-backed auth sessions use typed JWT claims, rotation
                  identifiers, expiry, server-side revocation, and production
                  <code> HttpOnly </code>/<code> Secure </code> cookie policy
                </li>
                <li>
                  Google accounts bind to verified provider subjects; magic
                  links use short-lived, hashed, one-time grants with replay
                  prevention
                </li>
                <li>
                  Object-level authorization covers friendships, group
                  membership, owner-only mutations, sessions, History,
                  Insights, artwork, cards, and watch-party updates
                </li>
                <li>
                  Websocket routes reject unauthorized clients with
                  <code> WS_1008_POLICY_VIOLATION </code> before accepting a
                  subscription
                </li>
                <li>
                  Reconnect timers, ping/pong keepalives, and server-side socket
                  cleanup keep realtime behavior resilient to network drops
                </li>
                <li>
                  Strict schemas, body/field limits, URL allowlists, CORS and
                  Origin checks, security headers, privacy-minimized response
                  models, and generic public errors harden browser/API boundaries
                </li>
                <li>
                  Redis-backed rate limits cover authentication, social
                  mutations, TMDB search, and feedback without pretending that
                  per-process memory is production-safe
                </li>
                <li>
                  Automated coverage includes cross-user authorization, auth
                  replay/revocation, WebSocket origin and room isolation,
                  injection/URL handling, privacy sanitization, and migration
                  behavior
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="performance-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="performance-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Performance Considerations
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Websockets remove session and watchlist polling pressure while
                  preserving REST endpoints as the source of truth
                </li>
                <li>
                  Realtime messages carry IDs and reasons instead of full decks
                  or watchlist payloads, limiting bandwidth and stale-client
                  edge cases
                </li>
                <li>
                  React Query invalidation scopes refreshes to affected session
                  History, Insights, account, or group cache keys rather than
                  invalidating the whole application
                </li>
                <li>
                  TMDB search uses short-lived caching, and session candidates
                  are frozen once created so every user swipes the same deck
                </li>
                <li>
                  Async SQLAlchemy and async route handlers keep external calls,
                  database work, and realtime broadcasts from serializing the
                  entire request path unnecessarily
                </li>
                <li>
                  Route-level code splitting keeps Insights, Movie Detail,
                  feedback, avatar editing, card creation, Driver.js, and image
                  export outside the initial entry bundle until needed
                </li>
                <li>
                  High-resolution card generation loads on demand, waits for
                  fonts/artwork, bounds canvas work, and releases object URLs
                  instead of generating a PNG after every preview change
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
                Technical Outcomes
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-none">
                <li>
                  Evolved a movie picker into a coherent social product spanning
                  identity, friendships, groups, shared libraries, synchronized
                  decisions, memories, and group-level interpretation
                </li>
                <li>
                  Preserved backend authority by keeping writes and full state
                  reads on typed REST endpoints
                </li>
                <li>
                  Designed a durable completion architecture so historical
                  nights survive watchlist removals, changed profiles, departed
                  members, metadata drift, and retried requests
                </li>
                <li>
                  Built explainable Insights and Group Personality on centralized
                  definitions, minimum sample thresholds, missing-data handling,
                  and deterministic rules rather than opaque AI claims
                </li>
                <li>
                  Delivered a reusable cinematic presentation/export system with
                  adaptive artwork, title fitting, privacy-safe payloads, exact
                  output dimensions, native sharing, and browser fallbacks
                </li>
                <li>
                  Completed a controlled HeroUI 2-to-3 migration, bundle/code
                  splitting pass, accessibility regression audit, and full-stack
                  security hardening without rewriting the product architecture
                </li>
              </ul>
            </MotionSection>
          </section>

          <section aria-labelledby="ownership-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="ownership-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                What This Project Demonstrates
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Product judgment: turning an ambiguous social problem into a
                  focused loop that balances fairness, privacy, delight, and
                  progressive disclosure
                </li>
                <li>
                  Systems design: transactional domain invariants, durable
                  snapshots, idempotency, realtime recovery, distributed rate
                  limiting, and safe external-service boundaries
                </li>
                <li>
                  Frontend depth: React architecture, cache ownership, responsive
                  editorial UI, accessible overlays/forms, reduced motion,
                  deterministic image export, and route-level performance work
                </li>
                <li>
                  Backend depth: FastAPI contracts, async SQLAlchemy, Alembic
                  migration discipline, authorization, WebSocket isolation,
                  analytics aggregation, and concurrency-aware services
                </li>
                <li>
                  Operational ownership: Vercel/Render deployment, predeploy
                  migrations, production configuration validation, security
                  headers, secret boundaries, Redis-backed abuse controls, and
                  provider failure handling
                </li>
                <li>
                  Quality discipline: 100 frontend tests and 275 backend tests,
                  plus TypeScript, ESLint, Ruff, production builds, accessibility
                  scans, responsive Playwright journeys, and security regression
                  coverage
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

          <section aria-labelledby="lessons-heading">
            <MotionSection delay={0.1}>
              <SectionHeading
                symbol="cross"
                headingId="lessons-heading"
                className="my-6"
                headingClassName="font-bold text-center whitespace-normal"
              >
                Lessons Learned
              </SectionHeading>
              <ul className="text-white text-sm md:text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Realtime collaboration is easier to reason about when
                  websocket events invalidate authoritative server state instead
                  of trying to become the state model themselves
                </li>
                <li>
                  Cookie-authenticated websocket routes need the same permission
                  checks as REST routes, especially when group membership
                  controls product access
                </li>
                <li>
                  Small event payloads make reconnects and stale tabs less
                  risky because the next REST fetch repairs the client view
                </li>
                <li>
                  Deterministic product rules matter more once the UI updates in
                  realtime because users can immediately see inconsistent
                  outcomes
                </li>
                <li>
                  Historical products need immutable presentation snapshots, not
                  joins against today’s mutable names, memberships, artwork, and
                  watchlist rows
                </li>
                <li>
                  Playful analytics earn trust when every label maps to explicit
                  metrics, minimum sample sizes, stable tie-breaking, and visible
                  supporting facts
                </li>
                <li>
                  Framework migrations and security passes are safest when
                  treated as controlled inventories with before/after browser
                  journeys, not broad mechanical replacements
                </li>
                <li>
                  Privacy is strongest as a data-shaping rule: cards, realtime
                  events, diagnostics, logs, and API responses should never
                  receive fields they do not need
                </li>
              </ul>
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
                <li>
                  Annual Recap built from the existing durable History, Insights,
                  artwork, typography, privacy, and export foundations
                </li>
                <li>
                  Presence indicators that show who is online, idle, or
                  currently voting in a session
                </li>
                <li>Watch-party integrations beyond Teleparty</li>
                <li>
                  Managed pub/sub for WebSocket fanout across multiple API
                  instances when usage requires horizontal realtime scaling
                </li>
              </ul>
            </MotionSection>
          </section>
        </CybersigilFrame>
      </MotionSection>
    </Layout>
  );
};

export default ArbiterPortfolioCaseStudy;
