import type { MediaItem } from "../../../components/media";
import watchlist from "../../../assets/works/arbiter/arbiter_watchlist_2026.webp";
import watchlistDetail from "../../../assets/works/arbiter/arbiter_watchlist_detail_2026.webp";
import moodSetup from "../../../assets/works/arbiter/arbiter_mood_setup_2026.webp";
import friends from "../../../assets/works/arbiter/arbiter_friends_2026.webp";
import history from "../../../assets/works/arbiter/arbiter_history_2026.webp";
import insights from "../../../assets/works/arbiter/arbiter_insights_2026.webp";
import cardCreator from "../../../assets/works/arbiter/arbiter_card_creator_2026.webp";
import voting from "../../../assets/works/arbiter/arbiter_voting_2026.webp";

export type ProductMoment = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  engineeringNote: string;
  media: MediaItem[];
};

export type EngineeringChallenge = {
  number: string;
  title: string;
  problem: string;
  decision: string;
  outcome: string;
  flow: string[];
  code?: string;
};

export type EngineeringNote = {
  title: string;
  body: string;
};

export const heroMedia: MediaItem = {
  src: watchlist,
  alt: "Arbiter group watchlist showing movie artwork, search controls, group navigation, and friends",
};

export const productMoments: ProductMoment[] = [
  {
    number: "01",
    eyebrow: "Build",
    title: "A shared shortlist that belongs to the group",
    description:
      "Members add films independently through TMDB search or manual entry. The list persists between sessions, records who contributed each title, and keeps connected members current without turning the watchlist into another disposable poll.",
    engineeringNote:
      "Group-scoped writes broadcast a small update event, then each client refetches the authoritative watchlist.",
    media: [
      {
        src: watchlistDetail,
        alt: "A focused view of Matcha Club's shared Arbiter watchlist",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Shape the night",
    title: "Set the mood before dealing the deck",
    description:
      "The host starts with emotional cues, then optionally adds runtime, genre, or a short note. This turns an imprecise request such as “easygoing, but not too long” into structured session criteria without pretending to read the group’s mind.",
    engineeringNote:
      "Stable cue identifiers and structured constraints survive into History and later analytics.",
    media: [
      {
        src: moodSetup,
        alt: "Arbiter's Tonight Feels Like setup with emotional cues and optional constraints",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Decide",
    title: "A synchronized decision session",
    description:
      "Every participant receives the same frozen deck and can vote or undo a vote in realtime. Arbiter resolves a deterministic winner, handles ties consistently, and moves the group into a Teleparty handoff instead of ending at a result screen.",
    engineeringNote:
      "The interaction feels immediate, while all permission checks and state transitions remain server-owned.",
    media: [
      {
        src: voting,
        alt: "An Arbiter movie-night session with a synchronized film deck ready for group voting",
      },
    ],
  },
  {
    number: "04",
    eyebrow: "Bring people together",
    title: "Persistent friends, groups, and private requests",
    description:
      "Friendships exist independently from groups, so people connect once and can be invited into future movie-night groups. Requests stay inside the authenticated product, while blocking, ownership controls, and notification badges keep the social model clear.",
    engineeringNote:
      "Public usernames support correction; unknown-email responses remain privacy preserving.",
    media: [
      {
        src: friends,
        alt: "Arbiter's account surface for finding friends and managing pending requests",
      },
    ],
  },
  {
    number: "05",
    eyebrow: "Remember",
    title: "Movie nights become a group archive",
    description:
      "Completed nights retain the winner, participants, mood, candidates, and watched state. Those facts power an editorial History, explainable Group Personality, and privacy-safe cards that turn the decision into a keepsake.",
    engineeringNote:
      "Insights use explicit definitions and sample thresholds; share cards never include names, votes, tokens, or private links.",
    media: [
      {
        src: history,
        alt: "Arbiter Movie Night History with winners, moods, participants, and watched states",
      },
      {
        src: insights,
        alt: "Arbiter Insights showing Group Personality and factual taste metrics",
      },
      {
        src: cardCreator,
        alt: "Arbiter Movie Night Card creator with format, template, and privacy controls",
      },
    ],
  },
];

export const challenges: EngineeringChallenge[] = [
  {
    number: "01",
    title: "Realtime state without fragile client logic",
    problem:
      "Account notifications, watchlist changes, and session votes can arrive from several people at once. Mirroring every backend transition in browser state would create a second, increasingly unreliable state machine.",
    decision:
      "FastAPI remains authoritative. WebSocket messages identify the semantic change, and TanStack Query invalidates only the affected account, group, session, History, or Insights key. Reconnects refetch canonical state, so missed events repair themselves.",
    outcome:
      "The UI stays responsive without trusting stale pushed payloads or duplicating winner, membership, and completion rules in React.",
    flow: [
      "FastAPI mutation",
      "Semantic WebSocket event",
      "Targeted query invalidation",
      "Canonical state refetched",
    ],
    code: `if (message.type === "session_updated" && message.session_id === sessionId) {
  void queryClient.invalidateQueries({
    queryKey: ["session-state", sessionId],
    exact: true,
  });
}`,
  },
  {
    number: "02",
    title: "A social model built around authorization",
    problem:
      "Friend requests, group invitations, ownership, blocking, and membership all create object-level permission boundaries. An unpredictable identifier is never enough to decide who may read or mutate an object.",
    decision:
      "The final product uses authenticated in-app requests rather than legacy invite links or codes. The API derives the acting user from a revocable cookie session, enforces target/owner/member rules server-side, and makes request decisions idempotent and race-aware.",
    outcome:
      "Users can find a public username, privately invite by email, transfer group ownership, or block another account without exposing private group data or trusting client-supplied identity.",
    flow: [
      "Username or email lookup",
      "In-app request",
      "Server-side object authorization",
      "Idempotent decision",
    ],
  },
  {
    number: "03",
    title: "Durable history and deterministic insights",
    problem:
      "Current watchlists, profiles, group names, and third-party metadata are mutable. Reconstructing an old night from today’s records would eventually make the memory incomplete or misleading.",
    decision:
      "Completion is transactional and idempotent. It freezes the minimum useful snapshots for participants, candidates, criteria, group context, and outcome. Watched confirmation distinguishes a decision from a film the group actually watched.",
    outcome:
      "Historical nights remain intelligible after members leave or titles change. Versioned aggregates then produce factual statistics and affectionate Group Personality labels through explicit rules and minimum sample thresholds.",
    flow: [
      "Completed-session snapshot",
      "Movie Night History",
      "Versioned aggregates",
      "Insights and Group Personality",
    ],
  },
];

export const engineeringNotes: EngineeringNote[] = [
  {
    title: "Authentication and social security",
    body:
      "Arbiter uses revocable HttpOnly cookie sessions, verified Google subject binding, and hashed one-time magic-link grants. Friendship and group mutations derive identity server-side, reject cross-user identifier substitution, and combine account/IP Redis limits with strict request schemas.",
  },
  {
    title: "WebSocket event model",
    body:
      "Three authenticated channels cover account notifications, group watchlists, and active sessions. Origin and membership checks run before subscription; compact events carry IDs and reasons rather than private snapshots or votes. Ping/pong, reconnect, and refetch behavior recover from stale tabs and transient disconnects.",
  },
  {
    title: "Historical snapshot schema",
    body:
      "Completed-session records preserve public participant identity, candidate metadata, criteria, timing, winner context, and safe watch-party facts. They intentionally omit email, authentication data, and expired Teleparty URLs. Constraints and indexes protect duplicate completion under retries or concurrent clients.",
  },
  {
    title: "Card export and artwork pipeline",
    body:
      "The lazy-loaded card studio supports three deterministic templates at 1080×1080 and 1080×1920. Artwork selection, luminance classification, crop rules, title fitting, font readiness, and a final privacy sanitizer keep browser-generated PNGs sharp and safe. Web Share uses a generated file with download fallback.",
  },
  {
    title: "HeroUI v3 migration and bundle strategy",
    body:
      "A controlled v2-to-v3 migration inventoried every component, overlay, slot override, and accessibility contract before removing v2. A later bundle pass introduced route and overlay boundaries for Insights, Movie Detail, feedback, avatars, cards, export, and onboarding without relocating WebSocket ownership or Query state.",
  },
  {
    title: "Accessibility and responsive validation",
    body:
      "The product uses semantic labels, visible focus, focus trapping/restoration, accessible errors and loading states, 44px mobile targets, reduced-motion paths, and contrast-tested warm-dark tokens. Playwright journeys cover keyboard use, mobile reflow, short viewports, zoom-equivalent layouts, and multi-user workflows.",
  },
  {
    title: "Security hardening",
    body:
      "A whole-application audit added narrow CORS and Origin rules, security headers, URL allowlists, request/resource limits, response minimization, log redaction, SSRF protections, and Redis-backed abuse controls. Tests exercise auth replay/revocation, cross-user access, WebSocket room isolation, injection payloads, and card privacy.",
  },
  {
    title: "First-time guidance",
    body:
      "Driver.js is loaded only for eligible authenticated users or manual replay. A versioned preference follows the account across devices, with a minimal local fallback to prevent duplicate launch. Stable product-level targets, missing-target filtering, mobile variants, cleanup, and focus restoration keep the five-step tour optional and resilient.",
  },
];

export const qualityItems = [
  {
    label: "Automated tests",
    value: "100 frontend · 275 backend",
    detail: "Unit, integration, migration, authorization, and security coverage.",
  },
  {
    label: "Browser journeys",
    value: "Multi-user Playwright",
    detail: "Auth, groups, realtime sessions, History, Insights, cards, and onboarding.",
  },
  {
    label: "Accessibility",
    value: "Axe + manual review",
    detail: "Keyboard, focus, contrast, zoom, touch targets, and reduced motion.",
  },
  {
    label: "Production discipline",
    value: "Migrations + security gates",
    detail: "TypeScript, ESLint, Ruff, builds, dependency scans, and deployment checks.",
  },
];
