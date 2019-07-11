jQuery(document).ready(function(){
  "use strict";
  $('.slider').ripples({
    dropRadius: 10,
    perturbance: 0.01
    });

    var typed = new Typed(".text", {
      strings: ["We are Awesome Developers.", "We are <strong class='primary'>SPARKY.</strong>", "We are <strong class='secondary'>Awesome Developers.</strong>"],
      smartBackspace: true, // Default value
      loop: true,
      typeSpeed: 80
    });

    $(window).scroll(function(){
      var top = $(window).scrollTop();
      if(top > 70){
        $('header').addClass('transparent-bg');
      }
      else {
        if($('header').hasClass('transparent-bg')){
          $('header').removeClass('transparent-bg');
        }
      }
    });
});
