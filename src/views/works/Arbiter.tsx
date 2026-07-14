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
  { src: arbiterAiSelection, alt: "Arbiter AI selection" },
  { src: arbiterAiDeckDelt, alt: "Arbiter AI deck dealt" },
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
                Arbiter is a realtime group decision platform for deciding what
                to watch. The product combines social graph constraints,
                group-scoped watchlists, AI-assisted deck generation,
                deterministic voting, and a post-decision Teleparty handoff.
                <br />
                <br />
                The major engineering update was moving collaborative state from
                polling to websocket-driven invalidation. Session pages and
                group watchlists now receive lightweight server events after
                writes, then refresh the authoritative React Query cache.
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
                Choosing what to watch in a group usually devolves into chaotic
                messaging threads, uneven participation, and decision fatigue.
                <br />
                <br />
                Existing products focus on media discovery, not collaborative
                coordination. The actual challenge is turning subjective group
                preference negotiation into a fast, fair, and repeatable
                decision process that stays synchronized while several users
                are adding titles, voting, undoing votes, shuffling, ending
                sessions, or sharing the final watch-party link.
              </p>
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
                  React 19, TypeScript, Vite 7, HeroUI, Tailwind 4, Framer
                  Motion, and React Query for the client application
                </li>
                <li>
                  FastAPI, async SQLAlchemy, Pydantic, Alembic, and PostgreSQL
                  for the API and persistence layer
                </li>
                <li>
                  Native browser WebSocket clients connected to FastAPI
                  websocket routes for realtime session and watchlist events
                </li>
                <li>
                  TMDB for title metadata, OpenAI for optional constraint
                  parsing and candidate reranking, Google OAuth and magic links
                  for authentication
                </li>
                <li>
                  Vercel for the frontend, Render for the API, managed Postgres,
                  and predeploy migrations
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
                    External APIs: TMDB, OpenAI, OAuth, Email
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
                  Users, friendships, groups, and group memberships model the
                  social permission boundary before collaboration starts
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
                  Tonight sessions persist constraints, timing, AI metadata,
                  status, winner fields, and watch-party handoff state
                </li>
                <li>
                  Session candidates freeze an ordered deck, while votes enforce
                  one mutable yes/no vote per user per session
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
                  Protected REST routes handle auth, friends, groups, watchlist
                  operations, TMDB search, session creation, voting, shuffle,
                  end-session, and watch-party updates
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
                  reasoned event such as <code>vote_cast</code>,
                  <code>item_added</code>, or <code>watch_party_updated</code>
                </li>
                <li>
                  Pydantic response models keep pushed events intentionally
                  small while the subsequent refetch returns the complete typed
                  session or watchlist state
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
                <div>Friendship Invite</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Invite-Only Group</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>Realtime Shared Watchlist</div>
                <div className="text-pink-500" aria-hidden="true">
                  ↓
                </div>
                <div>AI-Assisted Session Setup</div>
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
                  Websocket routes reject unauthorized clients with
                  <code> WS_1008_POLICY_VIOLATION </code> before accepting a
                  subscription
                </li>
                <li>
                  Reconnect timers, ping/pong keepalives, and server-side socket
                  cleanup keep realtime behavior resilient to network drops
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
                  or group cache keys rather than blasting the whole app cache
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
                  Replaced polling-oriented collaborative updates with
                  websocket-triggered cache invalidation for sessions and shared
                  watchlists
                </li>
                <li>
                  Preserved backend authority by keeping writes and full state
                  reads on typed REST endpoints
                </li>
                <li>
                  Added realtime coverage for vote casting, vote undo, session
                  creation, shuffle, session end, watch-party updates, and
                  watchlist mutations
                </li>
                <li>
                  Kept winner resolution deterministic and auditable even as
                  clients became realtime
                </li>
                <li>
                  Expanded the project beyond CRUD into a collaborative product
                  system with auth, social gating, AI fallback behavior,
                  migration discipline, and integration tests
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
                  Group preference modeling for personalized candidate decks
                </li>
                <li>
                  Presence indicators that show who is online, idle, or
                  currently voting in a session
                </li>
                <li>Streaming AI rerank to reduce perceived latency</li>
                <li>Watch-party integrations beyond Teleparty</li>
                <li>
                  Durable pub/sub or managed realtime infrastructure for
                  multi-instance API scaling beyond the current in-memory hub
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
