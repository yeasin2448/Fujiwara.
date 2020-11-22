(function($){
	'use strict';

	//menu top fixed start for mobile menu & desktop menu
	var fixed_top = $(".header-bg");
	$(window).on('scroll', function () {
	    if ($(this).scrollTop() > 10) {
	        fixed_top.addClass("menu-fixed animated fadeInDown");
	    } else {
	        fixed_top.removeClass("menu-fixed fadeInDown");
	    }
	});

	// mobile menu responsive
	$(document).on('click','.mobile-bar',function(){
    $(".mobile-bar").toggleClass("close");
		$(".main-menu").toggleClass("open");
		$(".overlay").addClass("active");
	});


  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY){
    this.width = ( width <= height ) ? height : width;
    this.height = ( width <= height ) ? height : width;
    this.top = posY - (this.height * 0.5);
    this.left = posX - (this.width * 0.5);
  }

  $('.btn').on('mousedown', function(e){
    //appending an element with a class name "btn-ripple"
    var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

    //getting the button's offset position
    var pos = $(this).offset();

    //get the button's width and height
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    //get the cursor's x and y position within the button
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    //adding a css style to the ripple effect
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });

  //this event listener will be triggered once the ripple animation is done
  $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
    $(this).remove();
  });

  // banner slider activation
  $(function () {
    $('.your-slider').carouselLineArrow({
        lineDur: 6000, //duration of line-time animation (ms), default is 5000
        slideDur: 600, //duration of toggle slide animation (ms), default is 500
        heightIsProportional: true, // height of slider is proportional to the width when resized, defaultl is true
        linePosition: 'bottom', // position of line-time: 'bottom' or 'top', default is 'bottom'
        lineHeight: '10px', // height of line-time (px, em, rem, %), default is '5px';
        lineColor: 'orange' // color of line-time, default is 'red'
    });
  })
  


	// wow animation
    new WOW().init();
	
})(jQuery);