import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginRadar } from 'vite-plugin-radar';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const posthogKey = env.VITE_POSTHOG_KEY;
	const posthogHost = env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

	return {
		plugins: [
			react(),
			VitePluginRadar({
				posthog: {
					enabled: Boolean(posthogKey),
					token: posthogKey,
					api_host: posthogHost,
					config: {
						capture_pageview: true,
					},
				},
			}),
		],
		optimizeDeps: {
			exclude: ['enbla-carousel-fade'],
		},
	};
});
