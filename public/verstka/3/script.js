$(document).ready(function(){
  var touch=$('#menu-touch');
  var menu=$('.nav');
  $(touch).on('click',function(e){
    e.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function(){
    var wid=$(window).width();
    if(wid>768 && menu.is(':hidden')){
      menu.removeAttr('style');
    }
  });
});