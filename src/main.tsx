import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import { Home } from "./views/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { registerAnalyticsDefaults } from "./hooks/useAnalytics.ts";
import RouterLayout from "./components/RouterLayout.tsx";
import RouteFallback from "./components/RouteFallback.tsx";

registerAnalyticsDefaults();

const router = createBrowserRouter([
  {
    element: <RouterLayout />,
    HydrateFallback: RouteFallback,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/experience",
        lazy: async () => ({
          Component: (await import("./views/Experience.tsx")).Experience,
        }),
      },
      {
        path: "*",
        lazy: async () => ({
          Component: (await import("./views/NotFound.tsx")).NotFound,
        }),
      },
      {
        path: "/works",
        lazy: async () => ({
          Component: (await import("./views/Works.tsx")).Works,
        }),
      },
      {
        path: "/works/modworldwide",
        lazy: async () => ({
          Component: (await import("./views/works/MODWorldwide.tsx")).default,
        }),
      },
      {
        path: "/works/arbiter",
        lazy: async () => ({
          Component: (await import("./views/works/Arbiter.tsx")).default,
        }),
      },
      {
        path: "/works/ai-knowledge-assistant",
        lazy: async () => ({
          Component: (await import("./views/works/AIKnowledgeAssistant.tsx"))
            .default,
        }),
      },
      {
        path: "/maze",
        lazy: async () => ({
          Component: (
            await import("./views/novella/Games/RedLightGreenLight/RedLightGreenLight.tsx")
          ).RedLightGreenLight,
        }),
      },
      {
        path: "/maze-classic",
        lazy: async () => ({
          Component: (await import("./views/novella/Games/Maze/maze.tsx")).Maze,
        }),
      },
      {
        path: "/mole",
        lazy: async () => ({
          Component: (
            await import("./views/novella/Games/WhackAMole/WackAMole.tsx")
          ).default,
        }),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Analytics />
    </HelmetProvider>
  </StrictMode>,
);
