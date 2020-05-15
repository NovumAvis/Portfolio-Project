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

// Маска формы для input телефона
var formMaskElement = document.getElementById('callback');
if (formMaskElement){
	$("#phone-order").inputmask({
		mask: "+7 (999) 999-99-99",
		greedy: false,
		clearMaskOnLostFocus: false,
	});
	$("#email-order").inputmask({
		mask: "*{3,20}@*{3,20}.*{2,7}",
		greedy: false,
		clearMaskOnLostFocus: false
	});
}



//Для Ajax формы + анимация feetback при успешной отправки формы
$(".form").submit(function() {
		$('.success').addClass('active');
		setTimeout(function() {
			$('.success').removeClass('active');
			$(document.getElementById("callback").reset());
		}, 3000);
	return false;
}); 
 
//Активация "Связаться" с добавлением заблюренного оверлея
	$(".contactme-line").click(function(){
		$(".contactme-wrapper").toggleClass("active");
		$(".author-sec-wrapper").toggleClass("active");
		$(".contactme-line").toggleClass("active");
		$(".overlay-glass").toggleClass("overlayIt");
		$(".overlay-wrapper").toggleClass("blurIt");
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

