# MOD Portfolio Site

MOD's official company website and case-study platform, built fully in-house by a cross-functional team of developers, designers, and account managers.

The site is intentionally engineered as a content system, not a hardcoded marketing site:

- pages are defined in JSON
- routes are generated automatically from filenames
- sections are rendered through reusable React blocks
- storytelling is driven by motion, media, and layout composition

## Project Links

- **Live Site:** `https://themoderati.com`
- **Frontend Code:** This repository
- **Backend/API:** Not required (file-driven architecture inside Next.js)

## Executive Summary

- **Platform type:** Portfolio + case study + brand website
- **Framework:** Next.js 15 App Router
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS 4 + custom CSS variables
- **Animation:** `motion/react`, `framer-motion`, Lenis smooth scrolling
- **Signature UI:** Apple-style liquid glass interactions using `@liquidglass/react`
- **Analytics:** PostHog integration (optional via env vars)
- **Content routes from JSON:** 16
- **Production behavior:** statically generated (SSG)

## In-House Build Model

This site reflects how MOD ships work internally:

- **Designers** shape visual language, layout rhythm, and art direction.
- **Account managers** drive narrative clarity, case-study framing, and business context.
- **Developers** translate both into a modular system of reusable blocks and scalable content patterns.

That collaboration model is embedded directly into the architecture: non-engineering stakeholders can iterate on page content rapidly through structured JSON while design/engineering quality remains consistent via shared components.

## Why Hiring Managers Care

- Demonstrates **product thinking**, not just page-building.
- Shows **system design maturity** (schema-like JSON + block composition).
- Balances **brand expression with maintainability**.
- Includes advanced **interaction engineering** and **accessibility protections**.
- Ships with real operational concerns covered: SEO metadata, sitemap generation, telemetry, and static pre-rendering.

## Architecture Deep Dive

### 1) Route + Content Engine

The app uses a catch-all App Router route at `src/app/[[...slug]]/page.tsx`.

At build/runtime:

1. Requested slug is read (`/work/xfinity-leadership` -> `['work', 'xfinity-leadership']`).
2. `getPageData()` resolves the slug against files in `src/app/data/pages`.
3. Matching JSON is parsed.
4. `ContentTransformer` maps each `content[].type` to a React block component.
5. The page renders as an ordered stack of block instances.

### 2) File-Name to URL Mapping

The route map is generated from filenames:

- `index.json` -> `/`
- `approach.json` -> `/approach`
- `work.united-airlines.json` -> `/work/united-airlines`

Dot-separated file names become nested URL segments.

### 3) Block Rendering Layer

`src/components/blocks/index.ts` exports the available blocks.  
`ContentTransformer` creates a case-insensitive component map, allowing JSON `type` values to select the block dynamically.

This architecture gives the team:

- repeatable page construction
- reusable UX patterns
- low-friction content iteration

without sacrificing brand-level customization.

### 4) Layout + Global Experience

- Shared layout includes persistent Nav + Footer around all slug pages.
- Nav theme is route-aware (`light` / `dark`) and can be overridden per page.
- Global smooth-scrolling is handled by Lenis through a provider at the root layout.
- Footer integrates animated controls and Lenis-driven "scroll to top."

## Rendering and Runtime Behavior

### Static Generation

The app uses `generateStaticParams()` from JSON-driven slugs, so content routes are pre-rendered at build time.

Verified production build output:

- `Generating static pages (21/21)`
- `● /[[...slug]]` uses SSG with generated paths
- Shared first-load JS: ~102 kB
- Dynamic content shell first-load JS: ~183 kB

### Request Lifecycle

```text
Incoming request
  -> Next.js App Router match (/[[...slug]])
  -> Load matching JSON page definition
  -> Inject metadata (title/description) from JSON
  -> Render block list through ContentTransformer
  -> Hydrate interactive client components (motion, video lightboxes, nav overlay)
```

### SEO

- Metadata is generated per page from JSON.
- Sitemap is generated from the same static slug map.
- `sitemap.ts` and `sitemap.xml/route.ts` derive URLs from one source of truth.

## Content Model

Each page is a JSON document with metadata + content blocks:

```json
{
  "metadata": { "title": "Page Title", "description": "SEO description" },
  "nav": { "variant": "light" },
  "content": [
    { "type": "title", "props": { "text": "..." } },
    { "type": "image", "props": { "src": "...", "alt": "..." } }
  ]
}
```

### Real Scale in This Repo

- 16 JSON-defined routes
- rich case-study pages composed from mixed media + animated narrative blocks
- 20+ reusable block types across homepage, culture, approach, and work pages

## Interaction and Motion Engineering

The motion system is not decorative; it supports storytelling and hierarchy.

- **Scroll reveal typography:** word-level progression with highlight-to-final-color transitions.
- **Hero sequences:** animated text choreography, including timed sequence variants.
- **Media interactions:** fullscreen video lightboxes with keyboard escape handling.
- **Work browse UX:** animated tiles, motion-enhanced hover states, and dynamic "next project" flow.
- **Navigation behavior:** animated desktop active-pill transitions and focus-locked mobile overlay.
- **Liquid glass controls:** Apple-style glass buttons backed by `@liquidglass/react`, with fallback logic and runtime initialization handling.

## Accessibility and Resilience

The codebase includes explicit safeguards for inclusive behavior:

- Focus locking and focus restoration for overlays/dialogs.
- Keyboard support in carousel and modal interactions.
- `prefers-reduced-motion` handling across motion-heavy components.
- ARIA labels and semantic sectioning patterns in reusable blocks.
- Graceful fallbacks when optional services (PostHog) are not configured.

## Major Feature Systems

- **Homepage experience:** full-screen cinematic video hero + featured work rails + culture narrative.
- **Work index:** small-tile grid for breadth and large-tile rails for highlighted projects.
- **Case study template:** title + context + service tags + media proof + progression CTA.
- **Approach page:** animated brand statements, marquee client logos, and service framework sections.
- **Culture page:** rotating value statements + narrative blocks + recruiting CTA flow.

## Core Routes

- `/`
- `/approach`
- `/culture`
- `/work`
- `/work/arcudi-wines`
- `/work/bluevine`
- `/work/comcast-business`
- `/work/corkcicle`
- `/work/philadelphia-eagles`
- `/work/philadelphia-union`
- `/work/project`
- `/work/united-airlines`
- `/work/whole-foods`
- `/work/xfinity-gateway`
- `/work/xfinity-leadership`
- `/example` (component showcase/developer reference)

## Repository Structure

```text
src/
  app/
    [[...slug]]/        # Dynamic route + page data loader
    data/
      pages/            # JSON page definitions (source of truth)
      global/           # nav/footer config
  components/
    blocks/             # Reusable page-section components
    Nav.tsx Footer.tsx  # Global shell
  utils/
    hooks/              # scroll reveal + telemetry hooks
    logging/            # PostHog wrapper
public/
  case-studies/         # Media assets
  videos/ logos/ WT/    # Supporting media libraries
```

## Local Development

### Prerequisites

- Node `22.18.0` (`.nvmrc`)
- npm

### Setup

```bash
nvm use
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:3000`.

### Scripts

```bash
npm run dev          # Dev server (Turbopack)
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # ESLint checks
npm run fix          # ESLint + Prettier auto-fix
npm run prettier     # Run Prettier directly
npm run setup        # One-shot setup script
```

## Environment Variables

From `.env.example`:

```bash
NEXT_PUBLIC_POSTHOG_KEY=<ph_project_api_key>
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

PostHog is optional. When the key is missing, telemetry methods fail safely without blocking app behavior.

## Authoring New Pages / Case Studies

1. Add a JSON file in `src/app/data/pages`.
2. Use dot-separated naming to define route depth.
3. Build the `content` array with existing block types.
4. Add assets under `public/case-studies/...` (or related media folders).
5. Validate locally with `npm run dev`.
6. Confirm production behavior with `npm run build`.

## What This Project Demonstrates

- Frontend architecture for a real brand/business surface
- Scalable content-driven rendering patterns
- Advanced motion and media UX
- Practical accessibility implementation
- Cross-functional delivery between engineering, design, and account teams

## Future Enhancements

- Add schema validation for page JSON at build-time.
- Add visual regression tests for animation-heavy sections.
- Add a CMS adapter while preserving the current block contract.
- Improve remote media optimization and delivery policy.
