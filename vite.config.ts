import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Radar from 'vite-plugin-radar';

export default defineConfig(({ mode }) => {
	// Load environment variables for the current mode (e.g., development or production)
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [
			react(),
			Radar({
				analytics: {
					// Use the environment variable
					id: env.VITE_GA_TRACKING_ID,
				},
			}),
		],
		define: {
			'process.env.VITE_GA_TRACKING_ID': JSON.stringify(process.env.VITE_GA_TRACKING_ID),
		},
		optimizeDeps: {
			exclude: ['enbla-carousel-fade'],
		},
	};
});
