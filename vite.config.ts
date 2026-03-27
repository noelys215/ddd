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
		build: {
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (!id.includes('node_modules')) return undefined;

						if (id.includes('@shikijs') || id.includes('/shiki/')) {
							return 'vendor-shiki';
						}

						if (
							id.includes('embla-carousel') ||
							id.includes('react-medium-image-zoom')
						) {
							return 'vendor-carousel';
						}

						if (id.includes('framer-motion')) {
							return 'vendor-motion';
						}

						if (
							id.includes('@phosphor-icons/react') ||
							id.includes('react-powerglitch') ||
							id.includes('use-scramble')
						) {
							return 'vendor-ui-effects';
						}

						if (
							id.includes('/react/') ||
							id.includes('/react-dom/') ||
							id.includes('react-router') ||
							id.includes('react-helmet-async') ||
							id.includes('/scheduler/')
						) {
							return 'vendor-react';
						}
					},
				},
			},
		},
		optimizeDeps: {
			exclude: ['embla-carousel-fade'],
		},
	};
});
