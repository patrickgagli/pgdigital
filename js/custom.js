;
(function($, window, document, undefined) {
    'use strict';
    var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };
    var $screensize = function(element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function(mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
    $(document).ready(function() {
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.animated-row').each(function() {
                var $this = $(this);
                $this.find('.animate').each(function(i) {
                    var $item = $(this);
                    var animation = $item.data('animate');
                    $item.on('inview', function(event, isInView) {
                        if (isInView) {
                            setTimeout(function() {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
        });
        if ($('.facts-list').length) {
            $('.facts-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.services-list').length) {
            var $servicesList = $('.services-list');
            $servicesList.owlCarousel({
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-chevron-left" aria-hidden="true"></i><span class="sr-only">Service précédent</span>',
                    '<i class="bi bi-chevron-right" aria-hidden="true"></i><span class="sr-only">Service suivant</span>'
                ],
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
            $(window).on('load resize', function() {
                $servicesList.trigger('refresh.owl.carousel');
            });
        }
        if ($('.gallery-list').length) {
            $('.gallery-list').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                items: 3,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }
        if ($('.fullpage-default').length) {
            new fullpage('.fullpage-default', {
                licenseKey: 'C7F41B00-5E824594-9A5EFB99-B556A3D5',
                anchors: ['slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06'],
                menu: '#nav',
                lazyLoad: true,
                navigation: true,
                navigationPosition: 'right',
                scrollOverflow: true,
                responsiveWidth: 768,
                responsiveHeight: 600,
                responsiveSlides: true
            });
        }
        $(document).on('click', '.navbar-toggle', function() {
            $('.navbar-collapse').slideToggle(300);
            $(this).attr('aria-expanded', $(this).attr('aria-expanded') !== 'true');
            return false;
        }).on('click', '.navigation-menu > li > a', function() {
            $('.navbar-collapse').slideUp(300);
            $('.navbar-toggle').attr('aria-expanded', 'false');
        }).on('click', '.next-section', function() {
            fullpage_api.moveSectionDown();
        });
        $('.facts-list').on('inview', function(event, isInView) {
            var $factsList = $(this);
            if (!isInView || $factsList.data('counted')) {
                return;
            }
            $factsList.data('counted', true);
            $factsList.find('.count-number').each(function() {
                var $counter = $(this);
                var target = Number($counter.text());
                $counter.prop('Counter', 0).animate({
                    Counter: target
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $counter.text(Math.ceil(now));
                    },
                    complete: function() {
                        $counter.text(target).removeClass('count-number').addClass('counted');
                    }
                });
            });
        });
        $('.skills-row').on('inview', function(event, isInView) {
            $(this).addClass('view');
        });
        $(document).on('click', '.menu-trigger', function() {
            $('body').toggleClass('sidemenu-open');
        }).on('click', '.side-menu .navbar-nav li a', function() {
            $('body').removeClass('sidemenu-open');
        });

        $('#contactForm').on('submit', function(event) {
            event.preventDefault();

            if (!this.checkValidity()) {
                this.reportValidity();
                return;
            }

            var subject = 'Demande de contact de ' + $('#first_name').val() + ' ' + $('#last_name').val();
            var body = $('#message').val() + '\n\nAdresse de réponse : ' + $('#email').val();
            $('#form-messages').text('Ouverture de votre application de messagerie...');
            window.location.href = 'mailto:patrickgagli@yahoo.co.uk?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        });
    });
})(jQuery, window, document);
