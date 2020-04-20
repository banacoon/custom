
$(window).ready(function(){
	$('.slider').bxSlider();
});

// Mobile nav animation
$('.bar-button').click(function() {
    $('.bar-button span:nth-child(1)').toggleClass('first');
    $('.bar-button span:nth-child(2)').toggleClass('middle');
    $('.bar-button span:nth-child(3)').toggleClass('last');
    $("#scrollBar").slideToggle(500);
});

// Form inputs label animation
$('.name-field .form__input').click(function(){
	$('#name-label').addClass('label--focus')
});

$('.mail-field .form__input').click(function(){
	$('#mail-label').addClass('label--focus')
});

$('.form__text').click(function(){
	$('#text-label').addClass('label--focus')
});

$('.field-label').click(function(){
	$(this).addClass('label--focus')
});