import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './views/Home.tsx';
import { Experience } from './views/Experience.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './views/NotFound.tsx';
import { Works } from './views/Works.tsx';
import Atalanta from './views/works/Atalanta.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { LiftLab } from './views/works/LiftLab.tsx';
import { Gloria } from './views/works/Gloria.tsx';
import { Calling } from './views/novella/Chapters/_00/Calling.tsx';
import { Descent } from './views/novella/Chapters/_01/Descent.tsx';
import { Watcher } from './views/novella/Chapters/_01/Watcher.tsx';
import { WatcherSpeaks } from './views/novella/Chapters/_01/WatcherSpeaks.tsx';
import { Obedience } from './views/novella/Chapters/_01/Obedience.tsx';
import { Knowledge } from './views/novella/Chapters/_01/Knowledge.tsx';
import { Maze } from './views/novella/Games/Maze/maze.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/experience',
		element: <Experience />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/works',
		element: <Works />,
	},
	{
		path: '/works/atalanta',
		element: <Atalanta />,
	},
	{
		path: '/works/liftlab',
		element: <LiftLab />,
	},
	{
		path: '/works/gloria',
		element: <Gloria />,
	},
	{
		path: '/maze',
		element: <Maze />,
	},
	{
		path: '/novella/calling',
		element: <Calling />,
	},
	{
		path: '/novella/descent',
		element: <Descent />,
	},
	{
		path: '/novella/descent/watcher',
		element: <Watcher />,
	},
	{
		path: '/novella/descent/watcherSpeaks',
		element: <WatcherSpeaks />,
	},
	{
		path: '/novella/descent/obedience',
		element: <Obedience />,
	},
	{
		path: '/novella/descent/knowledge',
		element: <Knowledge />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</StrictMode>
);
