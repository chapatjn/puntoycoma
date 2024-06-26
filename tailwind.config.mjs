/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
		  fontFamily: {
			sans: ['Montserrat', 'sans-serif'], // Add Montserrat to the default sans family
		  },
		},
	  },
}

