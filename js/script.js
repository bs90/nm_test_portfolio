$(function(){
  $(".clicktoscroll").click(function(){
    $("#allweb").animate({
      left: - $(this).attr("number")*1020
    },500);
  });
  $("a[rel=ds_group]").fancybox({
     'transitionIn'    : 'none',
     'transitionOut'   : 'none',
     'titlePosition'   : 'over',
     'titleFormat'   : function(title, currentArray, currentIndex, currentOpts) {
     return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
   }
 });
  $("a[rel=pt_group]").fancybox({
     'transitionIn'    : 'none',
     'transitionOut'   : 'none',
     'titlePosition'   : 'over',
     'titleFormat'   : function(title, currentArray, currentIndex, currentOpts) {
     return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
   }
 });
});
