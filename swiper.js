import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
// import 'swiper/swiper-bundle.css';
var swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	observer: true,
	observeParents: true,
	parallax:true,
	slidesPerView: 1,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 850px
		850: {
		slidesPerView: 2,
		spaceBetween: 20
		},
		// when window width is >= 1200px
		1200: {
			slidesPerView: 3,
			spaceBetween: 40
		},
	}
});