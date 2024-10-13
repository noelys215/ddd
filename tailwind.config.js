/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.html',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.ts',
		'./src/**/*.tsx',
	],
	theme: {
		extend: {
			fontFamily: {
				custom: ['EVA', 'serif'],
			},
		},
	},
	plugins: [],
};
