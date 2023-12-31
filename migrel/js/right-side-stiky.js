// STICKY

function testTheiaStickySidebars() {
  var me = {};
  me.scrollTopStep = 1;
  me.currentScrollTop = 0;
  me.values = null;

  window.scrollTo(0, 1);
  window.scrollTo(0, 0);

  $(window).scroll(
    (function(me) {
      return function(event) {
        var newValues = [];

        // Get sidebar offsets.
        $('.theiaStickySidebar').each(function() {
          newValues.push($(this).offset().top);
        });

        if (me.values != null) {
          var ok = true;

          for (var j = 0; j < newValues.length; j++) {
            var diff = Math.abs(newValues[j] - me.values[j]);
            if (diff > 1) {
              ok = false;

              console.log('Offset difference for sidebar #' + (j + 1) + ' is ' + diff + 'px');

              // Highlight sidebar.
              $($('.theiaStickySidebar')[j]).css('background', 'yellow');
            }
          }

          if (ok == false) {
            // Stop test.
            $(this).unbind(event);

            alert('Bummer. Offset difference is bigger than 1px for some sidebars, which will be highlighted in yellow. Check the logs. Aborting.');

            return;
          }
        }

        me.values = newValues;

        // Scroll to bottom. We don't cache ($(document).height() - $(window).height()) since it may change (e.g. after images are loaded).
        if (me.currentScrollTop < $(document).height() - $(window).height() && me.scrollTopStep == 1) {
          me.currentScrollTop += me.scrollTopStep;
          window.scrollTo(0, me.currentScrollTop);
        }
        // Then back up.
        else if (me.currentScrollTop > 0) {
          me.scrollTopStep = -1;
          me.currentScrollTop += me.scrollTopStep;
          window.scrollTo(0, me.currentScrollTop);
        }
        // Then stop.
        else {
          $(this).unbind(event);

          alert('Great success!');
        }
      };
    })(me)
  );
}

function offsetBottom(element) {
  return $(window).height() - element.offset().top - element.height();
}
var initialOffset = $('.articles-prev__col--1').offset().top;

// if ($(window).width() > 766) {
//   $(window).scroll(function() {
//     var scrollDiff = $(window).scrollTop() + 2 * $('.header').height() + 26 - initialOffset;

//     if (scrollDiff > 0 && $(window).scrollTop() + $('.header').height() + $('.articles-prev__col--1').height() - $('.other-articles').offset().top < 0) {
//       $('.articles-prev__col--1').css({
//         position: 'fixed',
//         top: $('.header').height(),
//         bottom: 'auto',
//       });

//       $('.articles-prev__col--1').removeClass('to-bottom');
//     } else if ($(window).scrollTop() + $('.header').height() + $('.articles-prev__col--1').height() - $('.other-articles').offset().top > 0) {
//       $('.articles-prev__col--1').css({
//         position: 'absolute',
//         bottom: '0',
//         top: 'auto',
//       });

//       $('.articles-prev__col--1').addClass('to-bottom');
//     } else {
//       $('.articles-prev__col--1').css({
//         position: 'relative',
//         top: '0',
//         bottom: 'auto',
//       });

//       $('.articles-prev__col--1').removeClass('to-bottom');
//     }
//   });
// }

$(window).scroll(function() {
  if ($(window).width() > 766) {
    var scrollDiff = $(window).scrollTop() + 2 * $('.header').height() + 26 - initialOffset;

    if (scrollDiff > 0 && $(window).scrollTop() + $('.header').height() + $('.articles-prev__col--1').height() - $('.other-articles').offset().top < 0) {
      $('.articles-prev__col--1').css({
        position: 'fixed',
        top: $('.header').height(),
        bottom: 'auto',
      });

      $('.articles-prev__col--1').removeClass('to-bottom');
    } else if ($(window).scrollTop() + $('.header').height() + $('.articles-prev__col--1').height() - $('.other-articles').offset().top > 0) {
      $('.articles-prev__col--1').css({
        position: 'absolute',
        bottom: '0',
        top: 'auto',
      });

      $('.articles-prev__col--1').addClass('to-bottom');
    } else {
      $('.articles-prev__col--1').css({
        position: 'relative',
        top: '0',
        bottom: 'auto',
      });

      $('.articles-prev__col--1').removeClass('to-bottom');
    }
  } else {
    $('.articles-prev__col--1').css({
      position: 'relative',
      top: '',
      bottom: '',
    });
  }
});

$(window).resize(function() {
  if ($(window).width() > 766) {
    $('.articles-prev__col--1').css({
      position: 'relative',
      top: '',
      bottom: '',
    });
    initialOffset = $('.articles-prev__col--1').offset().top;
    var scrollDiff = $(window).scrollTop() + 2 * $('.header').height() + 26 - initialOffset;

    if (scrollDiff > 0 && $(window).scrollTop() + $('.header').height() + $('.articles-prev__col--1').height() - $('.other-articles').offset().top < 0) {
      $('.articles-prev__col--1').css({
        position: 'fixed',
        top: $('.header').height(),
        bottom: 'auto',
      });

      $('.articles-prev__col--1').removeClass('to-bottom');
    } else if ($(window).scrollTop() + $('.header').height() + $('.articles-prev__col--1').height() - $('.other-articles').offset().top > 0) {
      $('.articles-prev__col--1').css({
        position: 'absolute',
        bottom: '0',
        top: 'auto',
      });

      $('.articles-prev__col--1').addClass('to-bottom');
    } else {
      $('.articles-prev__col--1').css({
        position: 'relative',
        top: '0',
        bottom: 'auto',
      });

      $('.articles-prev__col--1').removeClass('to-bottom');
    }
  } else {
    $('.articles-prev__col--1').css({
      position: 'relative',
      top: '',
      bottom: '',
    });
  }
});
// end STICKY
