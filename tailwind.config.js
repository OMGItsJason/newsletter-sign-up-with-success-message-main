/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			robotoregular: ['Roboto-Regular', 'Helvetica', 'Arial', 'sans-serif'],
			robotobold: ['Roboto-Bold', 'Helvetica', 'Arial', 'sans-serif']
		}
	},
	plugins: []
};
