import { ArrowsOutSimpleIcon, XIcon } from "@phosphor-icons/react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import CodeBlock from "../../../components/CodeBlock";
import { MediaAsset } from "../../../components/MediaAsset";
import SectionHeading from "../../../components/SectionHeading";
import { isVideoMedia, type MediaItem } from "../../../components/media";
import type {
  EngineeringChallenge as EngineeringChallengeContent,
  EngineeringNote,
  ProductMoment as ProductMomentContent,
} from "./arbiterContent";

type CaseStudySectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  spacing?: "default" | "compact";
};

export function CaseStudySection({
  id,
  title,
  children,
  className = "",
}: CaseStudySectionProps) {
  return (
    <section aria-labelledby={id} className={`py-12 md:py-14 ${className}`}>
      <SectionHeading
        symbol="cross"
        headingId={id}
        className="!mt-0 mb-8"
        headingClassName="font-bold text-center whitespace-normal"
      >
        {title}
      </SectionHeading>
      {children}
    </section>
  );
}

type MediaFrameProps = {
  media: MediaItem;
  caption?: string;
  eager?: boolean;
  className?: string;
};

function VideoLightbox({
  media,
  reducedMotion,
  children,
}: {
  media: Extract<MediaItem, { kind: "video" }>;
  reducedMotion: boolean;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const previousBodyOverflow = useRef("");

  const restorePage = () => {
    document.body.style.overflow = previousBodyOverflow.current;
    const modalVideo = modalVideoRef.current;
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
    if (!reducedMotion) {
      void previewRef.current
        ?.querySelector("video")
        ?.play()
        .catch(() => undefined);
    }
    triggerRef.current?.focus();
  };

  const openDialog = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    previousBodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    previewRef.current?.querySelector("video")?.pause();
    dialog.showModal();
    if (!reducedMotion) {
      void modalVideoRef.current?.play().catch(() => undefined);
    }
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  useEffect(
    () => () => {
      if (dialogRef.current?.open) {
        document.body.style.overflow = previousBodyOverflow.current;
      }
    },
    [],
  );

  return (
    <>
      <div
        ref={previewRef}
        className="case-study-video-lightbox-trigger relative"
        data-lightbox="case-study-video"
      >
        {children}
        <button
          ref={triggerRef}
          type="button"
          aria-label="Open video in lightbox"
          className="group absolute inset-0 flex items-start justify-end p-3 text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-pink-400"
          onClick={openDialog}
        >
          <span className="flex size-11 items-center justify-center rounded-full border border-white/55 bg-black/65 shadow-lg transition-colors group-hover:border-pink-400 group-hover:bg-black/85 motion-reduce:transition-none">
            <ArrowsOutSimpleIcon aria-hidden="true" size={20} weight="bold" />
          </span>
        </button>
      </div>
      <dialog
        ref={dialogRef}
        aria-label={`Expanded video: ${media.alt}`}
        className="case-study-video-lightbox m-auto max-h-[calc(100dvh-2rem)] w-[min(94vw,80rem)] overflow-visible border-0 bg-transparent p-0 text-white"
        onClose={restorePage}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className="relative overflow-hidden rounded-md border border-white/20 bg-black shadow-[0_2rem_7rem_rgba(0,0,0,0.75)]">
          <button
            type="button"
            aria-label="Close video"
            className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full border border-white/40 bg-black/80 text-white transition-colors hover:border-pink-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400 motion-reduce:transition-none"
            onClick={closeDialog}
          >
            <XIcon aria-hidden="true" size={20} weight="bold" />
          </button>
          <video
            ref={modalVideoRef}
            className="block max-h-[calc(100dvh-2rem)] w-full bg-black object-contain"
            controls
            muted
            playsInline
            poster={media.poster}
            preload="metadata"
          >
            {media.sources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>
        </div>
      </dialog>
    </>
  );
}

export function MediaFrame({
  media,
  caption,
  eager = false,
  className = "",
}: MediaFrameProps) {
  const reducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const mediaAsset = (
    <MediaAsset
      media={media}
      active={!reducedMotion}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      preload={eager ? "metadata" : "none"}
      onLoad={() => setImageLoaded(true)}
      className="block h-auto w-full object-cover"
    />
  );

  return (
    <figure className={`min-w-0 ${className}`}>
      <div className="overflow-hidden rounded-md border border-white/15 bg-black/50 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
        {isVideoMedia(media) ? (
          <VideoLightbox media={media} reducedMotion={Boolean(reducedMotion)}>
            {mediaAsset}
          </VideoLightbox>
        ) : (
          <div
            className="arbiter-image-lightbox-trigger"
            data-lightbox="case-study-image"
          >
            {imageLoaded ? (
              <Zoom
                a11yNameButtonZoom="Enlarge image"
                a11yNameButtonUnzoom="Close enlarged image"
                classDialog="arbiter-image-lightbox"
                zoomMargin={24}
              >
                {mediaAsset}
              </Zoom>
            ) : (
              mediaAsset
            )}
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-white/60">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function ProductMoment({
  moment,
  reverse,
}: {
  moment: ProductMomentContent;
  reverse?: boolean;
}) {
  const isGallery = moment.media.length > 1;

  return (
    <article className="grid items-center gap-8 border-b border-white/10 py-10 last:border-b-0 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:gap-12 md:py-14">
      <div className={reverse ? "md:order-2" : ""}>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-pink-400">
          {moment.number} / {moment.eyebrow}
        </p>
        <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
          {moment.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
          {moment.description}
        </p>
        <p className="mt-5 border-l border-pink-500/60 pl-4 text-sm leading-relaxed text-white/60">
          {moment.engineeringNote}
        </p>
      </div>

      <div
        className={`${reverse ? "md:order-1" : ""} ${
          isGallery ? "grid gap-3 sm:grid-cols-3" : ""
        }`}
      >
        {moment.media.map((media, index) => (
          <MediaFrame
            key={media.kind === "video" ? media.sources[0]?.src : media.src}
            media={media}
            caption={
              isGallery
                ? ["History", "Insights", "Card studio"][index]
                : undefined
            }
          />
        ))}
      </div>
    </article>
  );
}

export function FlowDiagram({
  items,
  label,
}: {
  items: string[];
  label: string;
}) {
  return (
    <figure className="mt-7" aria-label={label}>
      <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
        {items.map((item, index) => (
          <div key={item} className="contents">
            <div className="rounded border border-white/15 bg-black/40 px-3 py-3 text-center text-sm leading-snug text-white/75">
              {item}
            </div>
            {index < items.length - 1 ? (
              <span aria-hidden="true" className="text-center text-pink-500">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <figcaption className="sr-only">{items.join(" followed by ")}</figcaption>
    </figure>
  );
}

export function EngineeringChallenge({
  challenge,
}: {
  challenge: EngineeringChallengeContent;
}) {
  return (
    <article className="border-b border-white/10 py-10 first:pt-0 last:border-b-0 last:pb-0 md:py-14">
      <div className="grid gap-6 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-10">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-pink-400">
          Challenge {challenge.number}
        </p>
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
            {challenge.title}
          </h3>
          <div className="mt-5 grid gap-5 text-sm leading-relaxed text-white/75 md:grid-cols-3 md:text-base">
            <p>
              <strong className="mb-1 block text-white">Problem</strong>
              {challenge.problem}
            </p>
            <p>
              <strong className="mb-1 block text-white">Decision</strong>
              {challenge.decision}
            </p>
            <p>
              <strong className="mb-1 block text-white">Outcome</strong>
              {challenge.outcome}
            </p>
          </div>
          <FlowDiagram
            items={challenge.flow}
            label={`${challenge.title} data flow`}
          />
          {challenge.code ? (
            <div className="mt-7">
              <p className="mb-2 text-sm text-white/60">
                Targeted client invalidation
              </p>
              <CodeBlock code={challenge.code} />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ArchitectureDiagram() {
  const services = [
    "Authentication",
    "Friends and groups",
    "Session engine",
    "History and insights",
    "Movie metadata",
  ];

  return (
    <figure
      className="mx-auto mt-10 max-w-3xl"
      aria-labelledby="architecture-caption"
    >
      <div className="space-y-3 rounded-md border border-white/15 bg-black/40 p-4 sm:p-6">
        <div className="rounded border border-pink-500/35 px-4 py-4 text-center">
          <strong className="block text-white">React + TanStack Query</strong>
          <span className="mt-1 block text-sm text-white/60">
            Responsive product UI and server-state cache
          </span>
        </div>
        <div className="text-center font-mono text-xs uppercase tracking-[0.18em] text-pink-400">
          REST + WebSockets
        </div>
        <div className="rounded border border-white/15 px-4 py-5">
          <strong className="block text-center text-white">FastAPI</strong>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <span
                key={service}
                className="rounded border border-white/10 bg-white/[0.03] px-2 py-3 text-center text-sm leading-snug text-white/70"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center text-pink-500" aria-hidden="true">
          ↓
        </div>
        <div className="rounded border border-white/15 px-4 py-4 text-center">
          <strong className="block text-white">PostgreSQL + Redis</strong>
          <span className="mt-1 block text-sm text-white/60">
            Durable relational state and distributed abuse controls
          </span>
        </div>
      </div>
      <figcaption
        id="architecture-caption"
        className="mt-4 text-center text-sm leading-relaxed text-white/60"
      >
        React communicates with FastAPI through typed REST requests and three
        authenticated WebSocket channels. FastAPI owns domain transitions and
        persists canonical state in PostgreSQL; Redis coordinates rate limits.
      </figcaption>
    </figure>
  );
}

export function EngineeringNotes({ notes }: { notes: EngineeringNote[] }) {
  return (
    <div className="divide-y divide-white/10">
      {notes.map((note) => (
        <details key={note.title} className="group">
          <summary className="flex min-h-14 list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-white marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400">
            <span>{note.title}</span>
            <span
              aria-hidden="true"
              className="text-xl font-light text-pink-400 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-white/65 md:text-base">
            {note.body}
          </p>
        </details>
      ))}
    </div>
  );
}
