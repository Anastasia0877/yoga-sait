$(document).ready(function() {
    $('select').niceSelect();
  });

  $(document).ready(function(){
    $('.photo__slider').slick({
        fade: true,
        cssEase: 'linear',
        appendArrows:".photo__slider-arrow"
    });
  });