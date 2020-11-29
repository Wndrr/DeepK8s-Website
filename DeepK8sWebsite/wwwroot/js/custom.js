/*  Theme Name: Crafton - SaaS & Software Html5 Landing Page
    Author: VBThemes
    Version: 1.0.0
    Created:April 2019
    File Description:Main JS file of the template
*/

(function($) {

    'use strict';

    function initNavbarStickey() {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    }

    function initSmoothLink() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    function initScrollspy() {
        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    }

    function initTesti() {
        $(document).ready(function() {
            $("#landing_testi").owlCarousel({
                autoPlay: 28000,
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]
            });
        });

    }

    function initMfpvideo() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });

        $('.video_zoome').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    function initBackTotop() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.back_top_angle_up').fadeIn();
            } else {
                $('.back_top_angle_up').fadeOut();
            }
        });
        $('.back_top_angle_up').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    }

    function initPortfolio() {
        $(window).on('load', function() {
            var $container = $('.projects-wrapper');
            var $filter = $('#filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click", function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    }

    function initCounter() {
        var a = 0;
        $(window).on('scroll', function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter_value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
                });
                a = 1;
            }
        });
    }

    function init() {
        initNavbarStickey();
        initSmoothLink();
        initScrollspy();
        initTesti();
        initMfpvideo();
        initPortfolio();
        initBackTotop();
        initCounter();
    }
    init();

})(jQuery)