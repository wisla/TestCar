$(function() {

	//Sliders owlCarousel - START CODE
	$('#TopSlider').owlCarousel({
	    navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle : "fade",
        items:1
	});

	$('#StepSlider').owlCarousel({
	    navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle : "fade",
        items:1
	});
	//Sliders owlCarousel - END CODE
	
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
        // animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();
    //WOW Animation  - END CODE

 	// Show Animated Counters
    animatecounters();
    

    //counter number reset while scrolling
    $('.timer').appear();
    $(document.body).on('appear', '.timer', function (e) {
        // this code is executed for each appeared element
        if (!$(this).hasClass('appear')) {
            animatecounters();
            $(this).addClass('appear');
        }
    });

	//Counter Number - START CODE
	function animatecounters() {
	    
	    $('.timer').each(count);
	        function count(options) {
	            var $this = $(this);
	            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	            $this.countTo(options);
	        }

    }
	//Counter Number - END CODE 

	$('.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart').click(function (e) {
	    e.preventDefault();
	});
	$('body').on('touchstart click', function (e) {
	    if ($(window).width() < 992) {
	        if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse').hasClass('in') && !$(e.target).hasClass('navbar-toggle')) {
	            $('.navbar-collapse').collapse('hide');
	        }
	    }
	    else {
	        if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse ul').hasClass('in')) {
	            console.log(this);
	            $('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');
	            $('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');
	            $('.navbar-collapse a.dropdown-toggle').removeClass('active');
	        }
	    }
	});

	//SVG - set path 
	$('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });


	//Portfolio - START CODE
    /*==============================================================*/
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".porfilio-item").click(function (e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".porfilio-item").hasClass("hover")) {
                $(this).closest(".porfilio-item").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".porfilio-item").mouseenter(function () {
            $(this).addClass("hover");
        })
                // handle the mouseleave functionality
                .mouseleave(function () {
                    $(this).removeClass("hover");
                });
    }

    // use for portfolio sotring with masonry

    $portfolio = $('.masonry-items');
    $portfolio_selectors = $('.portfolio-filter > li > a');
    $portfolio_selectors_li = $('.portfolio-filter li');

    hashfilter = "*";
    if(location.hash!=""){
        var temphashfilter = "." + location.hash.substr(1);
        if (temphashfilter==".*")
        {
            temphashfilter="*";
        }

        $portfolio_selectors.each(function(){
                 if ($(this).attr("data-filter") == temphashfilter) {
                    $portfolio_selectors_li.removeClass('active');
                    $portfolio_selectors_li.find('a[data-filter="'+temphashfilter+'"]').parent('li').addClass("active");

                    var autoscrolltoelement = function(){
                        $("html, body").animate({
                         scrollTop: $('.portfolio-filter').parents('section').offset().top-60
                        });
                    };
                    setTimeout(autoscrolltoelement, 500);
                    hashfilter=temphashfilter;
                 }
             });        
    }
    
    

    $portfolio.imagesLoaded(function () {
        $portfolio.isotope({
            filter: hashfilter,
            itemSelector: 'li',
            layoutMode: 'masonry'
        });
    });

    // use for simple masonry ( for example home-photography.html page )

    $masonry_block = $('.masonry-block-items');
    $masonry_block.imagesLoaded(function () {
        $masonry_block.isotope({
            itemSelector: 'li',
            layoutMode: 'masonry'
        });
    });


    $portfolio_selectors.on('click', function () {
        $portfolio_selectors.parent().removeClass('active');
        $(this).parent().addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({filter: selector});
       
        if (selector.substr(1)!="" && selector.substr(1)!="#")
        {
             location.hash = selector.substr(1);     
        }
        else
        {
            location.hash ="*";
        }
        return false;
    });

    $blog = $('.blog-masonry');
    $blog.imagesLoaded(function () {

        //ISOTOPE FUNCTION - FILTER PORTFOLIO FUNCTION
        $blog.isotope({
            itemSelector: '.blog-listing',
            layoutMode: 'masonry'
        });
    });

    $(window).resize(function () {
        setTimeout(function () {
            $portfolio.isotope('layout');
            $blog.isotope('layout');
            $masonry_block.isotope('layout');
        }, 500);
    });
    /*==============================================================*/
    //Portfolio - END CODE

});



