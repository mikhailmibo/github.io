/*---------BURGER-MENU SETTINGS-------*/

var openButton = document.getElementById('open-icon');
var closeButton = document.getElementById('close-icon');

function showSideMenu() {
document.getElementById('side-menu').style.width = '100%';
}
openButton.addEventListener('click', showSideMenu);

function hideSideMenu() {
document.getElementById('side-menu').style.width = '0';
}
closeButton.addEventListener('click', hideSideMenu);
			
/*---------SLIDER SETTINGS-------*/

$('.header__slider').slick({
arrows: false,
autoplay: true,
infinite: true,
autoplaySpeed: 2000,
adaptiveHeight: true
});
				

$('.left').click(function(){
  $('.header__slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.header__slider').slick('slickNext');
})

/*---------SCROLL-TOP SETTINGS-------*/

			
$(function() {

	$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
	$('#toTop').fadeIn();
	 
	} else {
	 
	$('#toTop').fadeOut();
	 
	}
	 
	});
	 
	$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},800);

	});
 
});


			