import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			fontFamily: {
				sans: ['Chivo Variable', ...defaultTheme.fontFamily.sans],
				display: ['Archivo Black', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [typography],
}
