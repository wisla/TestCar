$(function() {

	$('#TopSlider').owlCarousel({
	    navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle : "fade",
        items:1
	});

	//Full Screen Header - START CODE
	function SetResizeContent() {
	    var minheight = $(window).height();
	    $(".full-screen").css('min-height', minheight);
	    
	    var minwidth = $(window).width();
	    $(".full-screen-width").css('min-width', minwidth);
	}

	SetResizeContent();
	//Full Screen Header - END CODE

	//Window Resize Events - START CODE
	$(window).resize(function () {
	    //Position Fullwidth Subnavs fullwidth correctly
	    $('.dropdown-fullwidth').each(function () {
	        $(this).css('width', $('.row').width());
	        var subNavOffset = -($('nav .row').innerWidth() - $('.menu').innerWidth() - 15);
	        $(this).css('left', subNavOffset);
	    });
	    SetResizeContent();
	    setTimeout(function () {
	        SetResizeHeaderMenu();
	    }, 200);
	    if ($(window).width() >= 992 && $('.navbar-collapse').hasClass('in')) {
	        $('.navbar-collapse').removeClass('in');
	        //$('.navbar-collapse').removeClass('in').find('ul.dropdown-menu').removeClass('in').parent('li.dropdown').addClass('open');
	        $('.navbar-collapse ul.dropdown-menu').each(function () {
	            if ($(this).hasClass('in')) {
	                $(this).removeClass('in'); //.parent('li.dropdown').addClass('open');
	            }
	        });
	        $('ul.navbar-nav > li.dropdown > a.dropdown-toggle').addClass('collapsed');
	        $('.logo').focus();
	        $('.navbar-collapse a.dropdown-toggle').removeClass('active');
	    }

	    // setTimeout(function () {
	    //     SetParallax();
	    // }, 1000);
	});
	//Window Resize Events - END CODE


	// Shrink nav on scroll
	$(window).scroll(function () {
	    if ($(window).scrollTop() > 10) {
	        $('nav').addClass('bg-nav');
	    } else {
	        $('nav').removeClass('bg-nav');
	    }

	});
	// Resize Header Menu
	function SetResizeHeaderMenu() {
	    var width = jQuery('nav.navbar').children('div.container').width();
	    $("ul.mega-menu-full").each(function () {
	        jQuery(this).css('width', width + 'px');
	    });
	}

	//WOW Animation  - START CODE
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();
    //WOW Animation  - END CODE

});
