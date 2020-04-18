document.addEventListener("DOMContentLoaded", function() {
});
	// Custom JS
$(document).ready(function() {
	
	// $(".cat-1").mouseenter(function(){
	// 	$(".first-img").toggleClass("active");
	// });



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

