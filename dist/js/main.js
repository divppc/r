;$(document).ready(function () {

	var slider = $('.slides');


	slider.owlCarousel({
		items: 1,
		loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        dots: true,
        dotsClass: 'dots',
        dotClass: 'dot'
	});

	$(".cb-btn").on("click", function () {
		$(".modal-bg").fadeIn(400);
		$(".modal.cb").fadeIn(500);
	});

	$(".leave-order").on("click", function () {
		$(".modal-bg").fadeIn(400);
		$(".modal.order").fadeIn(500);
	});

	$(".call-master").on("click", function (e) {
		e.preventDefault();
		$(".modal-bg").fadeIn(400);
		$(".modal.master").fadeIn(500);
	});

	$(".close-btn").on("click", function () {
		$(".modal-bg").fadeOut(400);
		$(".modal").fadeOut(300);
	});

	$("body").on("click", function(e) {
        if($(e.target).closest(".modal").length == 0 &&
        	($(e.target).closest(".cb-btn").length == 0) &&
        	($(e.target).closest(".leave-order").length == 0) &&
        	($(e.target).closest(".call-master").length == 0)) 
        {
            $(".modal-bg").fadeOut(400);
			$(".modal").fadeOut(300);
        };        
    });

});
