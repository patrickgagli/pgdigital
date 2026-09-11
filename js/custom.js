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

    var alignResponsiveSection = function(sectionName) {
        sectionName = sectionName || window.location.hash.slice(1);
        var section = sectionName && document.querySelector('[data-section="' + sectionName + '"]');
        if (section && document.body.classList.contains('fp-responsive')) {
            var header = document.getElementById('header');
            var headerHeight = header ? header.offsetHeight : 0;
            var sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo(0, Math.max(0, sectionTop - headerHeight));
        }
    };

    var refreshResponsiveCarousels = function() {
        if (document.body.classList.contains('fp-responsive')) {
            $('.owl-carousel').trigger('refresh.owl.carousel');
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
            setTimeout(alignResponsiveSection, 1500);
        });
        var initComponents = function(formConfig) {
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
                responsiveSlides: true,
                afterLoad: function(origin, destination) {
                    if (destination && destination.anchor) {
                        setTimeout(function() {
                            alignResponsiveSection(destination.anchor);
                        }, 0);
                    }
                },
                afterResponsive: function(isResponsive) {
                    if (isResponsive) {
                        setTimeout(refreshResponsiveCarousels, 0);
                    }
                }
            });
            refreshResponsiveCarousels();
        }
        $(document).on('click', '.navbar-toggle', function() {
            $('.navbar-collapse').slideToggle(300);
            var isExpanded = $(this).attr('aria-expanded') !== 'true';
            $(this).attr('aria-expanded', isExpanded);
            $('body').toggleClass('mobile-menu-open', isExpanded);
            return false;
        }).on('click', '.navigation-menu > li > a', function() {
            $('.navbar-collapse').slideUp(300);
            $('.navbar-toggle').attr('aria-expanded', 'false');
            $('body').removeClass('mobile-menu-open');
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

        initContactForm(formConfig);
        };

        var dataReady = (window.PGDigital && window.PGDigital.ready) || Promise.resolve(null);
        dataReady.then(function(data) {
            initComponents(data && data.form);
        }, function() {
            initComponents(null);
        });
    });

    var defaultFormConfig = {
        endpoint: '',
        accessKey: '',
        recipient: 'patrickgagli@yahoo.co.uk',
        subjectPrefix: 'Demande de contact de',
        storage: {
            draftKey: 'pgdigital:contact:draft',
            outboxKey: 'pgdigital:contact:outbox',
            maxQueued: 10
        },
        messages: {
            sending: 'Envoi en cours…',
            success: 'Merci ! Votre message a bien été envoyé.',
            queued: 'Envoi impossible pour le moment. Votre message est conservé et sera renvoyé automatiquement.',
            flushed: 'Vos messages en attente viennent d\'être envoyés.',
            draftRestored: 'Un brouillon de message a été restauré.',
            mailto: 'Ouverture de votre application de messagerie…'
        }
    };

    var storage = {
        read: function(key, fallback) {
            try {
                var raw = window.localStorage.getItem(key);
                return raw ? JSON.parse(raw) : fallback;
            } catch (error) {
                return fallback;
            }
        },
        write: function(key, value) {
            try {
                window.localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                /* stockage indisponible ou saturé */
            }
        },
        remove: function(key) {
            try {
                window.localStorage.removeItem(key);
            } catch (error) {
                /* stockage indisponible */
            }
        }
    };

    function initContactForm(config) {
        var $form = $('#contactForm');
        if (!$form.length) {
            return;
        }

        var settings = $.extend(true, {}, defaultFormConfig, config || {});
        var $status = $('#form-messages');
        var $submit = $('#contactBtn');
        var submitLabel = $submit.text();
        var fields = ['last_name', 'first_name', 'email', 'message'];

        function setStatus(text, state) {
            $status.removeClass('text-success text-danger');
            if (state) {
                $status.addClass(state === 'success' ? 'text-success' : 'text-danger');
            }
            $status.text(text);
        }

        function setBusy(isBusy) {
            $submit.prop('disabled', isBusy).text(isBusy ? settings.messages.sending : submitLabel);
        }

        function collect() {
            var values = {};
            fields.forEach(function(name) {
                values[name] = $.trim($form.find('[name="' + name + '"]').val() || '');
            });
            return values;
        }

        function fill(values) {
            fields.forEach(function(name) {
                if (values && typeof values[name] === 'string') {
                    $form.find('[name="' + name + '"]').val(values[name]);
                }
            });
        }

        function hasContent(values) {
            return fields.some(function(name) {
                return values[name];
            });
        }

        function buildPayload(values) {
            return {
                access_key: settings.accessKey,
                subject: settings.subjectPrefix + ' ' + values.first_name + ' ' + values.last_name,
                from_name: values.first_name + ' ' + values.last_name,
                name: values.first_name + ' ' + values.last_name,
                email: values.email,
                message: values.message,
                savedAt: new Date().toISOString()
            };
        }

        function post(payload) {
            if (typeof window.fetch !== 'function') {
                return Promise.reject(new Error('fetch indisponible'));
            }
            return window.fetch(settings.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(function(response) {
                if (!response.ok) {
                    throw new Error('Réponse ' + response.status);
                }
                return response;
            });
        }

        function queue(payload) {
            var outbox = storage.read(settings.storage.outboxKey, []);
            if (!Array.isArray(outbox)) {
                outbox = [];
            }
            outbox.push(payload);
            storage.write(settings.storage.outboxKey, outbox.slice(-settings.storage.maxQueued));
        }

        function flushOutbox(notify) {
            var outbox = storage.read(settings.storage.outboxKey, []);
            if (!isConfigured() || !Array.isArray(outbox) || !outbox.length) {
                return;
            }
            var remaining = outbox.slice();
            var sendNext = function() {
                if (!remaining.length) {
                    storage.remove(settings.storage.outboxKey);
                    if (notify) {
                        setStatus(settings.messages.flushed, 'success');
                    }
                    return;
                }
                var payload = remaining[0];
                return post(payload).then(function() {
                    remaining.shift();
                    storage.write(settings.storage.outboxKey, remaining);
                    return sendNext();
                }, function() {
                    /* la file est conservée pour une prochaine tentative */
                });
            };
            sendNext();
        }

        function isConfigured() {
            return Boolean(settings.endpoint && settings.accessKey);
        }

        function sendByMail(values) {
            var subject = settings.subjectPrefix + ' ' + values.first_name + ' ' + values.last_name;
            var body = values.message + '\n\nAdresse de réponse : ' + values.email;
            setStatus(settings.messages.mailto);
            window.location.href = 'mailto:' + settings.recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        }

        var draft = storage.read(settings.storage.draftKey, null);
        if (draft && hasContent(draft)) {
            fill(draft);
            setStatus(settings.messages.draftRestored);
        }

        $form.on('input change', 'input, textarea', function() {
            var values = collect();
            if (hasContent(values)) {
                storage.write(settings.storage.draftKey, values);
            } else {
                storage.remove(settings.storage.draftKey);
            }
        });

        $form.on('submit', function(event) {
            event.preventDefault();

            // Champ piège invisible : rempli uniquement par les robots.
            if ($.trim($form.find('[name="company"]').val() || '')) {
                setStatus(settings.messages.success, 'success');
                return;
            }

            if (!this.checkValidity()) {
                this.reportValidity();
                return;
            }

            var values = collect();

            if (!isConfigured()) {
                sendByMail(values);
                storage.remove(settings.storage.draftKey);
                return;
            }

            var payload = buildPayload(values);
            setBusy(true);
            setStatus(settings.messages.sending);
            post(payload).then(function() {
                $form[0].reset();
                storage.remove(settings.storage.draftKey);
                setStatus(settings.messages.success, 'success');
            }, function() {
                queue(payload);
                setStatus(settings.messages.queued, 'error');
            }).then(function() {
                setBusy(false);
            });
        });

        $(window).on('online', function() {
            flushOutbox(true);
        });
        flushOutbox(false);
    }
})(jQuery, window, document);
