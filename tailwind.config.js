module.exports = {
	content: ["./src/**/*.{html,js}","./index.html","./index_test.html"],
	theme: {
		extend: {
			colors: {
				'asteroid-dark': '#0F2027',
				'asteroid-mid': '#203A43',
				'asteroid-light': '#2C5364'
			}
		},
		container: {
			center: true,
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
