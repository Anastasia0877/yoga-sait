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

    // burger-menu
$('.menu-icon').on('click', function(){
  $('.menu-icon, .menu').toggleClass("active");
  // $('body').toggleClass("overlay");
})

$(document).click(function(e) {
  if (!$(e.target).hasClass("active") &&
      $(e.target).parents(".site-nav").length === 0) {
        $('.menu-icon, .menu').removeClass("active");
        // $('body').removeClass("overlay");
  }
});
$('.menu-item').on('click', function(){
  $('.menu-icon, .menu').removeClass("active");
  // $('body').removeClass("overlay");
})  