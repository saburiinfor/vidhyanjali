/**
 This file is meant to have all custom JS code we will be using for our website.
 Maintained by Vidhyanjali.
 @2020
 */
(function ($) {
  
  "use strict";
  
  var swtichSlider = function() {
    $('#eventsContainer li.eventItem').on('click', 'span', function () {
      var parentElementNo = Math.parseInt($(this).id);
      console.log(parentElementNo);
    });
  };
  swtichSlider();
  
})(jQuery);