$(document).ready(function(){
  $(".hamburger_menu").click(function(){
    $(".mobile_nav_text").slideToggle("fast");
    $(".main_nav_phone").toggleClass('main_nav_phone_toggle');
  });

  $(".aboutjq").click(function(){
    $(".mobile_nav_text").hide("fast");
    $(".main_nav_phone").toggleClass('main_nav_phone_toggle');
  });

  /* Modal State */
  $(".submit-button").click(function(){
    $(".contact-modal").css({"display": "block"});
  });

  $(".close_modal").click(function(){ /* Closes Modal By X */
    $(".contact-modal").css({"display": "none"});
  });
});
