
$("#contents").delegate("iframe.widgets", "mouseover",
  function (event)
  {
    $(this).addClass("onEdit");
    
    $("#resizeHandler").css({
      'background-color' : 'rgba(127,127,127,0.8)',
      'width' : $(this).width(),
      'height' : $(this).height(),
      
      'left' : $(this).position().left,
      'top' : $(this).position().top
      }).fadeIn();
    console.log(event.type);
  }
);



$("#contents").delegate("div#resizeHandler", "mouseleave",
  function (event)
  {
    $("#contents").find('.onEdit').removeClass("onEdit");
    
    
    $("#resizeHandler").css({
      'background-color': 'rgba(127,127,127,0.8)'
      }).fadeOut(500);
    
    console.log(event.type);
  }
);

$( function() {
  $("#resizeHandler").resizable({
    resize : function()
    {
      $(".onEdit").css({
      'width' : $(this).width(),
      'height' : $(this).height()
      });
    }
  });
});
  
  
$( function() {
  $( "#resizeHandler" ).draggable({
    start : function()
    {
      $("#menu").css('top','-110px');
    },
    
    drag : function()
    {
      $(".onEdit").css({
      'left' : $(this).position().left,
      'top' : $(this).position().top
      });
    },
    
    stop : function()
    {
      $("#menu").css('top','0px');
    }
  });
});