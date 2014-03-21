$(function(){
  $(".dmenu").click(function(){
    $("#allweb").animate({
      left: - 1020*$(this).attr("number")
    },500);
  });
});