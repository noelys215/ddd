import { Suspense, StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./views/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { registerAnalyticsDefaults } from "./hooks/useAnalytics.ts";

registerAnalyticsDefaults();

const Experience = lazy(() =>
  import("./views/Experience.tsx").then((module) => ({
    default: module.Experience,
  })),
);
const NotFound = lazy(() =>
  import("./views/NotFound.tsx").then((module) => ({
    default: module.NotFound,
  })),
);
const Works = lazy(() =>
  import("./views/Works.tsx").then((module) => ({
    default: module.Works,
  })),
);
const MODWorldwide = lazy(() => import("./views/works/MODWorldwide.tsx"));
const ArbiterPortfolioCaseStudy = lazy(
  () => import("./views/works/Arbiter.tsx"),
);
const AIKnowledgeAssistant = lazy(
  () => import("./views/works/AIKnowledgeAssistant.tsx"),
);
const RedLightGreenLight = lazy(() =>
  import("./views/novella/Games/RedLightGreenLight/RedLightGreenLight.tsx").then(
    (module) => ({
      default: module.RedLightGreenLight,
    }),
  ),
);
const Maze = lazy(() =>
  import("./views/novella/Games/Maze/maze.tsx").then((module) => ({
    default: module.Maze,
  })),
);
const WhackAMole = lazy(
  () => import("./views/novella/Games/WhackAMole/WackAMole.tsx"),
);

const RouteFallback = () => (
  <div className="flex min-h-screen w-full items-center justify-center bg-black px-6 font-custom">
    <div className="w-full max-w-md rounded-md border border-white/15 bg-[#101010] px-6 py-5 text-center">
      <p className="breadcrumb-font text-sm text-pink-500">loading route</p>
      <p className="mt-2 text-sm text-white/75">One moment.</p>
    </div>
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<RouteFallback />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/experience",
    element: withSuspense(Experience),
  },
  {
    path: "*",
    element: withSuspense(NotFound),
  },
  {
    path: "/works",
    element: withSuspense(Works),
  },
  {
    path: "/works/modworldwide",
    element: withSuspense(MODWorldwide),
  },
  {
    path: "/works/arbiter",
    element: withSuspense(ArbiterPortfolioCaseStudy),
  },
  {
    path: "/works/ai-knowledge-assistant",
    element: withSuspense(AIKnowledgeAssistant),
  },
  {
    path: "/maze",
    element: withSuspense(RedLightGreenLight),
  },
  {
    path: "/maze-classic",
    element: withSuspense(Maze),
  },
  {
    path: "/mole",
    element: withSuspense(WhackAMole),
  },
  // {
  // 	path: '/novella/calling',
  // 	element: <Calling />,
  // },
  // {
  // 	path: '/novella/descent',
  // 	element: <Descent />,
  // },
  // {
  // 	path: '/novella/descent/watcher',
  // 	element: <Watcher />,
  // },
  // {
  // 	path: '/novella/descent/watcherSpeaks',
  // 	element: <WatcherSpeaks />,
  // },
  // {
  // 	path: '/novella/descent/obedience',
  // 	element: <Obedience />,
  // },
  // {
  // 	path: '/novella/descent/knowledge',
  // 	element: <Knowledge />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
