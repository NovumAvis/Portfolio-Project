document.addEventListener("DOMContentLoaded", function() {
});


//прелодер
$(window).on('load', function(){
	$('.preloader').delay(500).fadeOut('slow');
});


	// Custom JS
$(document).ready(function() {
	

// Type Image Zoom - картинка с анимацией + проверка на наличие необходимого id 
var popupElement = document.getElementById('popup-is-here');
if (popupElement){
	$('.image-popup-zoom').magnificPopup({
		type: 'image'
		});
}


//анимация feetback при успешной отправки формы
$(".form").submit(function() {
	var th = $(this);
	$.ajax({
	type: "GET",
	url: 'mail.php',
	data: th.serialize()
	}).done(function(){ 
		$('.success').addClass('active').css('display', 'flex').hide().fadeIn();
		setTimeout(function() {
			$('.success').removeClass('active').fadeOut();
			var magnificPopup = $.magnificPopup.instance; 
			magnificPopup.close(); 
			th.trigger("reset");
		}, 3000);
	}); 
	return false;
}); 
 

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

