export interface VideoSource {
  src: string;
  type: string;
}

export type MediaItem =
  | {
      alt: string;
      width?: number;
      height?: number;
      kind?: "image";
      src: string;
    }
  | {
      alt: string;
      width?: number;
      height?: number;
      kind: "video";
      poster?: string;
      sources: VideoSource[];
    };

export const isVideoMedia = (
  media: MediaItem,
): media is Extract<MediaItem, { kind: "video" }> => media.kind === "video";

export const getMediaSourceKey = (media: MediaItem) =>
  isVideoMedia(media)
    ? media.sources.map(({ src }) => src).join("|")
    : media.src;
