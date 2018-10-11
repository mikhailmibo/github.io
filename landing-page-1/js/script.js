
(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

/*---------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
  $("#top-navigation").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),

      top = $(id).offset().top;
    
    $('body,html').animate({scrollTop: top}, 500);
  });
});

$(document).ready(function(){
  $("#footer-navigation").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),

      top = $(id).offset().top;
    
    $('body,html').animate({scrollTop: top}, 500);
  });
});



$(document).ready(function () {
 
    var show = true;
    var countbox = ".about-us-digits";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.spincrement').spincrement({
                thousandSeparator: "",
                duration: 4200
            });
             
            show = false;
        }
    });
 
});


/*---------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            arrows: false,
            slidesToScroll: 1,
          }
           
        },    
        {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1
        }
      }]
     });

});

/*-------------------------------------------------*/
$(document).ready(function(){

    $(".slider-nav").on("click", ".opacity-feature", function(){
        $(".slider-nav .opacity-feature").removeClass("active-office");
        $(this).toggleClass("active-office");
    });
});

/*-------------------------------------------------*/

