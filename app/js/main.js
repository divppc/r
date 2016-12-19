;$(document).ready(function () {

	var slider = $('.slides');


	slider.owlCarousel({
		items: 1,
		loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        dots: true,
        // controlsClass: 'main-slider',
        dotsClass: 'dots',
        dotClass: 'dot'
	});


	// $('.left-arrow').click(function() {
	//     slider.trigger('prev.owl.carousel');
	// });

	// $('.right-arrow').click(function() {
	//     slider.trigger('next.owl.carousel');
	// });

});
