import { useCallback } from "react";
import { useLocation } from "react-router-dom";

export const APP_NAME = "portfolio";

export type EventValue = string | number | boolean | null;
export type EventProperties = Record<string, EventValue | undefined>;
export type AnalyticsProperties = Record<string, unknown>;

type PostHogClient = {
  capture?: (eventName: string, properties?: AnalyticsProperties) => void;
  identify?: (userId: string, properties?: AnalyticsProperties) => void;
  register?: (properties: EventProperties) => void;
};

const getPosthogClient = (): PostHogClient | undefined => {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { posthog?: PostHogClient }).posthog;
};

export const registerAnalyticsDefaults = (): void => {
  const posthogClient = getPosthogClient();
  posthogClient?.register?.({ app: APP_NAME });
};

export const trackEvent = (
  eventName: string,
  properties: AnalyticsProperties = {},
): void => {
  const posthogClient = getPosthogClient();
  posthogClient?.capture?.(eventName, {
    app: APP_NAME,
    ...properties,
  });
};

export const identifyUser = (
  userId: string,
  properties: AnalyticsProperties = {},
): void => {
  const posthogClient = getPosthogClient();
  posthogClient?.identify?.(userId, {
    app: APP_NAME,
    ...properties,
  });
};

export const useAnalytics = () => {
  const location = useLocation();

  const track = useCallback(
    (eventName: string, properties: AnalyticsProperties = {}) => {
      trackEvent(eventName, {
        path: location.pathname,
        ...properties,
      });
    },
    [location.pathname],
  );

  const identify = useCallback(
    (userId: string, properties: AnalyticsProperties = {}) => {
      identifyUser(userId, properties);
    },
    [],
  );

  return {
    track,
    identify,
    appName: APP_NAME,
  };
};
