$(document).ready(function () {
  heroSwiper();
  literatureToggle();
  scrollUp();
  scrollLink();
  runAction();
  accordion();

  if ($('.eye__pupil').length) {
    eyeMove();
  }

  mobMenu();
  productAscent();

  if ($('.protection-road').length && $(window).width() > 992) {
    protectionRoadAnim();
    homeLineAnimation();
  }

  whereBuySwiper();
  reviewsSwiper();
});

function heroSwiper() {

  if ($(".hero-block__content-slider").length && $(".hero-block__product-img-slider").length && $(".hero-block__woman-img-slider").length) {
  
    var contentSlider = new Swiper('.hero-block__content-slider .swiper-container', {
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      allowTouchMove: false,
      fadeEffect: {
        crossFade: true
      },
    }); 

    var productImgSlider = new Swiper('.hero-block__product-img-slider .swiper-container', {
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      allowTouchMove: false,
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: contentSlider
      }
    }); 

    var womanImgSlider = new Swiper('.hero-block__woman-img-slider .swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 120,
      effect: 'fade',
      allowTouchMove: false,
      autoplay: {
        delay: 3000,
      },
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: productImgSlider
      }
    });

    $('.hero-block .swiper-button-prev').click(function (e) {
      heroSliderPrev();
    });

    $('.hero-block .swiper-button-next').click(function (e) {
      heroSliderNext();
    });

    function heroSliderNext() {
      womanImgSlider.slideNext();
      productImgSlider.slideNext();
      contentSlider.slideNext();
    }

    function heroSliderPrev() {
      womanImgSlider.slidePrev();
      productImgSlider.slidePrev();
      contentSlider.slidePrev();
    }
  }
}

function homeLineAnimation() {
  $(document).scroll(function () {
    var linesTop = $('.protection-road__load-line');
    var linesTopScroll =
      $(document).scrollTop() - $('.protection-road__load-line').offset().top + $(window).height() / 1.3;
    var percent;
    var linesTopHeight = linesTop.height();

    if ($(document).scrollTop() > $('.protection-road__load-line').offset().top - $(window).height()) {
      percent = Math.round((linesTopScroll / linesTopHeight) * 100);

      if (percent >= 0 && percent <= 100) {
        gsap.to($('#paint0_linear_1'), {
          duration: 0.4,
          attr: { offset: (percent - 10) / 100 },
        });

        gsap.to($('#paint0_linear_2'), {
          duration: 0.4,
          attr: { offset: percent / 100 },
        });
      }
    }
  });
}

function scrollLink() {
  $('.js-scroll').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - $('.header').height() }, 500);
    }
    return false;
  });
}

function literatureToggle() {
  $('.literature-block__top.js-btn').click(function (e) {
    e.preventDefault();
    var toggled = $(this).closest('.literature-block').find('.literature-block__bottom');
    toggled.slideToggle();
  });
}

function scrollUp() {
  $('.scroll-up').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
}

function eyeMove() {
  var apple = animateEye('.eye__white-eye', 10, 1.5);
  var lens = animateEye('.eye__pupil', 20, 1.2);
  var blik = animateEye('.eye__blik', 25, 0.5);

  $('html').mousemove(function (e) {
    apple(e);
    lens(e);
    blik(e);
  });
}

function animateEye(elem, radius, dur) {
  var r = radius || 15;
  var el = $(elem);
  var x1 = el.offset().left,
    y1 = el.offset().top;

  $(window).resize(function () {
    x1 = el.offset().left;
    y1 = el.offset().top;
  });

  return function (e) {
    var x2 = e.pageX;
    var y2 = e.pageY;
    var y = (r * (y2 - y1)) / Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) + y1;
    var x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
    y = y - y1 + 1;
    x = x - x1;

    gsap.to(el, {
      x: x,
      y: y,
      duration: dur || 1,
    });
  };
}

function mobMenu() {
  $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.mob-menu').toggleClass('open');
    $(this).toggleClass('close-menu');
  });
}

function productAscent() {
  $(document).scroll(function () {
    if ($(document).scrollTop() > $(document).height() / 5) {
      $('.product-ascent').addClass('show');
    }
  });

  $('.product-ascent__close').on('click', function () {
    $(this).parent().addClass('shown');
  });
}

function protectionRoadAnim() {
  var step1Completed = false;
  var step2Completed = false;
  var step3Completed = false;
  var step4Completed = false;
  var step5Completed = false;
  var step6Completed = false;
  var step7Completed = false;

  $(document).scroll(function () {
    if (step1Completed == false) {
      if ($(document).scrollTop() > $('#protection-road__row-1').offset().top - $(window).height() + 350) {
        $('.protection-road').attr('data-step', 'data-step-1');
        step1Completed = true;
      }
    }

    if (step2Completed == false) {
      if ($(document).scrollTop() > $('#protection-road__row-2').offset().top - $(window).height() + 160) {
        $('.protection-road').attr('data-step', 'data-step-2');
        step2Completed = true;
      }
    }

    if (step3Completed == false) {
      if ($(document).scrollTop() > $('#protection-road__row-2').offset().top - $(window).height() + 350) {
        $('.protection-road').attr('data-step', 'data-step-3');
        step3Completed = true;
      }
    }

    if (step4Completed == false) {
      if ($(document).scrollTop() > $('#protection-road__row-3').offset().top - $(window).height()) {
        $('.protection-road').attr('data-step', 'data-step-4');
        step4Completed = true;
      }
    }

    if (step5Completed == false) {
      if ($(document).scrollTop() > $('#protection-road__row-3').offset().top - $(window).height() + 350) {
        $('.protection-road').attr('data-step', 'data-step-5');
        step5Completed = true;
      }
    }

    if (step6Completed == false) {
      if ($(document).scrollTop() > $('#protection-road__row-4').offset().top - $(window).height() + 350) {
        $('.protection-road').attr('data-step', 'data-step-6');
        step6Completed = true;
      }
    }

    if (step7Completed == false) {
      if ($(document).scrollTop() > $('#protection-road__row-5').offset().top - $(window).height() + 350) {
        $('.protection-road').attr('data-step', 'data-step-7');
        step7Completed = true;
      }
    }
  });
}

function runAction() {
  var firstRun = false;

  if (getInternetExplorerVersion() !== -1) {
    $('.eyes-action__img').css('background-size', 'contain');
  }

  setPipple({
    selector: '.eyes-action__img',
    url: 'assets/images/img-1.png',
  });

  $('.eyes-action__btn').click(function (e) {
    e.preventDefault();
    var that = $(this);
    that.attr('disabled', 'disabled');

    if (firstRun) {
      $('.eyes-action__img .clean-desc').animate({ opacity: 0 }, 1000);
      $('.eyes-action').removeClass('show-active').removeClass('snake').removeClass('show-active-back');
    }

    var timeOut = setTimeout(
      function () {
        showActive({
          setImage: function () {
            $('.eyes-action__img').ripples('set', 'imageUrl', 'assets/images/img-1-1.png');
            for (var i = 0; i < 3; i++) {
              addSingleRipple('.eyes-action__img');
            }
          },
          done: function () {
            that.removeAttr('disabled');
            that.find('.btn-text').text('Повторить действие');
            $('.eyes-action__img .clean-desc').animate({ opacity: 1 }, 1000, function () {
              $('.eyes-action__img').ripples('destroy');
              setPipple({
                selector: '.eyes-action__img',
                url: 'assets/images/img-1.png',
              });
            });
            clearTimeout(timeOut);
            firstRun = true;
          },
        });
      },
      firstRun ? 1000 : 0
    );
  });
}

function showActive(opts) {
  $('.eyes-action')
    .addClass('show-active')
    .animate({ opacity: 1 }, 1000, function () {
      opts.setImage && opts.setImage();
      $('.eyes-action')
        .addClass('snake')
        .animate({ opacity: 1 }, 1000, function () {
          $('.eyes-action')
            .addClass('show-active-back')
            .animate({ opacity: 1 }, 2000, function () {
              opts.done && opts.done();
            });
        });
    });
}

function setPipple(opts) {
  if ($(opts.selector).length) {
    $(opts.selector).ripples({
      imageUrl: opts.url,
      perturbance: 0.02,
      interactive: false,
    });
  }
}

var time = 0;
function addRipples(obj) {
  window.requestAnimationFrame(function animate() {
    time++;
    if (time % (60 * (obj.duration / 1000)) === 0) {
      obj.draw();
    }
    obj.requesIds['action_id'] = window.requestAnimationFrame(animate);
  });
}

function addSingleRipple(selector) {
  var x = Math.random() * $(selector).outerWidth();
  var y = Math.random() * $(selector).outerHeight();
  var dropRadius = 20;
  var strength = 0.04 + Math.random() * 0.04;
  $(selector).ripples('drop', x, y, dropRadius, strength);
}

function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  } else if (navigator.appName == 'Netscape') {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

function whereBuySwiper() {
  if ($(".swiper-container").length) {
    var mySwiper = new Swiper('.where-buy .swiper-container', {

      slidesPerView: "auto",
      slidesPerColumn: 1,

      navigation: {
        nextEl: '.where-buy .swiper-button-next',
        prevEl: '.where-buy .swiper-button-prev',
      },
      breakpoints: {
        991: {
          slidesPerView: 4,
          slidesPerColumn: 2,
        },
      }
    }) 
  }
      
}

function accordion() {
  $('.elements-details__accordion-head').click(function(e) {
    if ($(this).parent().hasClass("open")) {
      $(".elements-details__accordion").removeClass("open");
      $(".elements-details__accordion-hidden").slideUp(); 
    } else {
      $(".elements-details__accordion").removeClass("open");
      $(".elements-details__accordion-hidden").slideUp();
      $(this).parent().addClass("open");
      $(this).parent().find(".elements-details__accordion-hidden").slideDown();
    }
    
	});
}

function reviewsSwiper() {
  if ($(".swiper-container").length) {
    var mySwiper = new Swiper('.reviews-section .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.reviews-section .swiper-button-next',
        prevEl: '.reviews-section .swiper-button-prev',
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
        },
      }

    }) 
  }
}