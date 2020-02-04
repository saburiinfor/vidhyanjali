/**
 This file is meant to have all custom JS code we will be using for our website.
 Maintained by Vidhyanjali.
 @2020
 */
(function ($) {
  
  "use strict";
  
  let swtichSlider = function() {
    $('#eventsContainer').on('click', '.events', function (event) {
      let parentElementNo = event.target.id.toString().replace(/(event-)/,'') - 1;
      // Stop the running slider before hiding it
      $('#eventsCarousels .arrow1.active .vi_slider').data('nivoslider').stop();
      // Hide all elements except the desired one
      $('#eventsCarousels .arrow1').removeClass('active').addClass('hide');
      $('#eventsCarousels .arrow1:eq('+ parentElementNo +')').removeClass('hide').addClass('active').find('.vi_slider').nivoSlider();
    });
  };
  swtichSlider();
  // On page load start the default slider for active arrow box.
  $('#eventsCarousels .arrow1').addClass('hide');
  $('#eventsCarousels .arrow1.active .vi_slider').removeClass('hide').nivoSlider();
  
})(jQuery);