document.addEventListener("DOMContentLoaded", function() {
});


//прелодер
$(window).on('load', function(){
	$('.preloader').delay(500).fadeOut('slow');
});


	// Custom JS
$(document).ready(function() {
	
	// $(".cat-1").mouseenter(function(){
	// 	$(".first-img").toggleClass("active");
	// });

	$(".contactme-line").click(function(){
		$(".contactme-wrapper").toggleClass("active");
		$(".author-sec-wrapper").toggleClass("active");
		$(".contactme-line").toggleClass("active");
		return false;
	});

	$(".cat-1").hover(function(){
		$(".wall-1").toggleClass("show");
		return false;
	});

	$(".cat-2").hover(function(){
		$(".wall-2").toggleClass("show");
		return false;
	});

	$(".cat-3").hover(function(){
		$(".wall-3").toggleClass("show");
		return false;
	});

	$(".cat-4").hover(function(){
		$(".wall-4").toggleClass("show");
		return false;
	});



}); //document ready

