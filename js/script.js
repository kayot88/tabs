$(document).ready(function(){
    //////////



    /////////

    $("#container").radialProgress("init", {
      'size': 70,
      'fill': 5
  }).radialProgress("to", {'perc': 78, 'time': 1000});

    $(function () {
      $("#rateYo").rateYo({
         starWidth: "20px",
         spacing: "6px",
         precision: 2,
     });
  });
    $('.ba-tab-menu__item').on('click', function(e){
      e.preventDefault();
      $('.ba-tab-menu__item').removeClass('ba-tab-menu__item--active');
      $(this).addClass('ba-tab-menu__item--active');

      $('.ba-tab').removeClass('ba-tab--active');
      $( $(this).attr('href') ).addClass('ba-tab--active');
  })
    
    $('.open-overlay').click(function() {
      if ($(this).hasClass('bar-top-right')) {
        $(this).removeClass('bar-top-right');
    } else {
     $(this).addClass('bar-top-right');   
 }

 var overlay_navigation = $('.overlay-navigation'),
 nav_item_1 = $('nav li:nth-of-type(1)'),
 nav_item_2 = $('nav li:nth-of-type(2)'),
 nav_item_3 = $('nav li:nth-of-type(3)'),
 nav_item_4 = $('nav li:nth-of-type(4)'),
 nav_item_5 = $('nav li:nth-of-type(5)'),
 top_bar = $('.bar-top'),
 middle_bar = $('.bar-middle'),
 bottom_bar = $('.bar-bottom');

 overlay_navigation.toggleClass('overlay-active');
 if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
} else {
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
    nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
}
});

});
