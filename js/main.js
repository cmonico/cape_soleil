$(document).ready(function(){
  $(".hamburger_menu").click(function(){
    $(".mobile_nav_text").slideToggle("fast");
    $(".main_nav_phone").toggleClass('main_nav_phone_toggle');

  });
});
