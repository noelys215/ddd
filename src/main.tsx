import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './views/Home.tsx';
import { Experience } from './views/Experience.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Home />
		{/* <Experience /> */}
	</StrictMode>
);
