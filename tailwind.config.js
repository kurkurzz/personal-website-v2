module.exports = {
	content: ["./src/**/*.{html,js}","./index.html","./index_test.html"],
	theme: {
		extend: {
			colors: {
				'asteroid-dark': '#0F2027',
				'asteroid-mid': '#203A43',
				'asteroid-light': '#2C5364'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			fontFamily: {
				'poppins': ['Poppins'],
			}
		},
		container: {
			center: true,
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
	],
}
