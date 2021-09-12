var swiper = new Swiper(".swiper-container", {

	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	centeredSlides: true,

   autoplay: {
      delay: 5000,
      disableOnInteraction: true,
   },

	keyboard: {
		enabled: true,
	},

	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},

	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},

 });