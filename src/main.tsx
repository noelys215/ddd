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
import { Calling } from './views/novella/Chapters/_01/Calling.tsx';

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
		path: '/novella/calling',
		element: <Calling />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</StrictMode>
);
