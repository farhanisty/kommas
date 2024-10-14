/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'custom': {
				'dark': '#000',
				'darkblue': '#14213D',
				'yellow': '#FCA311',
				'gray': '#E5E5E5',
				'light': '#FFFFFF'
			}
		},
	},
	plugins: [],
}
