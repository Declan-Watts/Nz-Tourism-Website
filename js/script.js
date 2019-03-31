// Preloader
$(window).on('load', function() {
  preloaderFadeOutTime = 1000;
  function hidePreloader() {
    var preloader = $('#preloader');
    preloader.fadeOut(preloaderFadeOutTime, function() {});
    $('#Header_heading').removeClass('invisible');
    $('#Header_heading').addClass('visible');
  }

  hidePreloader();
});

// Heading change on scroll down
$(document).ready(function() {
  // Setting Variables for the scroll check (so it doesnt spam)
  // and scroll_heading ID
  var $scrlCHQ = 0;
  var $scrlHD = $('.Scroll_heading');
  var $scrlTXT = $('#Scrl_txt');
  var $scrlNAV = $('#navbar-top');
  var $scrlHR = $('.welcome-hr');
  // This listens for the browsers scroll,
  // And then does an if statement to see where the
  // scroll position is
  $(window).scroll(function() {
    // This checks too see if the page is scrolled down or too the scrollTop
    // Then if it has been scrolled down, it checks if the text has already been changed
    // If it hasnt then it will change the text and set $scrlCHQ to 1 (meaning true)
    if ($(this).scrollTop() > 100) {
      if ($scrlCHQ == 0) {
        $scrlTXT.fadeOut(400);
        $scrlNAV.removeClass('bg-custom');
        $scrlNAV.addClass('bg-custom2');
        $scrlHD.fadeOut(400, function() {
          $scrlHD.removeClass('white');
          $scrlHD.addClass('black');
          $scrlHR.addClass('hr-expand');
          $scrlHD.fadeIn(1000);
          $scrlCHQ = 1;
        });
      }
      // This checks too see if the page is scrolled too the top
      // and if it has been scrolled to the top, it checks if the text has already been changed
      // If it hasnt then it will change the text back and set $scrlCHQ to 0 (meaning false)
    } else if ($scrlCHQ == 1) {
      $scrlTXT.fadeIn(400);
      $scrlNAV.removeClass('bg-custom2');
      $scrlNAV.addClass('bg-custom');
      $scrlHR.addClass('hr-expand');
      $scrlHD.fadeOut(400, function() {
        $scrlHD.removeClass('black');
        $scrlHR.removeClass('hr-expand');
        $scrlHD.addClass('white');
        $scrlHD.fadeIn(200);
        $scrlCHQ = 0;
      });
    }
  });
});
