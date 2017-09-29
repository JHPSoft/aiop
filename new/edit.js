var clicked = 0;
var highest = 5000;
var lowest = 5000;


$( "#save" ).click
(
	function()
	{
    if (clicked == "0")
    {
      clicked = "2";
      $("#menu").css('left','-68px');
      $( "#save i" ).addClass( "glyphicon-wrench" );
      $( "#save i" ).removeClass(  "glyphicon-save" );
      $( "#add" ).addClass("disabled");
      $("#sidebar").css('display','none');
    }
    else
    {
      clicked = "0";
      $("#menu").css('left','0px');
      $( "#save i" ).addClass(  "glyphicon-save" );
      $( "#save i" ).removeClass(  "glyphicon-wrench" );
      $( "#add" ).removeClass("disabled");
      $("#sidebar").css('display','block');
    }
	}
);


$("#contents").delegate("iframe.widgets", "mouseover",
  function (event)
  {
    if(clicked == 0)
    {
      $(this).addClass("onEdit");
      
      $("#resizeHandler").css({
        'width' : $(this).width(),
        'height' : $(this).height(),
        
        'left' : $(this).position().left,
        'top' : $(this).position().top
        }).fadeIn(250);
    }
  }
);



$("#contents").delegate("div#resizeHandler", "mouseleave",
  function (event)
  {
    if(clicked == 0 && $('.bootstrapMenu').css('display') == 'none' )
    {
      $("#contents").find('.onEdit').removeClass("onEdit");
      console.log( $('.bootstrapMenu').css('display'));
      $("#resizeHandler").fadeOut(100);
    }
  }
);


$("#removeicon").click
(
  function()
  {
    $('.onEdit').remove();
    $("#resizeHandler").fadeOut(100);
  }
);


$( function() {
  $("#resizeHandler").resizable({

    minHeight: 35,
    minWidth: 35,
    start : function()
    {

    
      clicked = 1;
      $("#menu").css('top','-110px');
    },
    
    resize : function()
    {
      $(".onEdit").css({
      'width' : $(this).width(),
      'height' : $(this).height()
      });
    },
    
    stop : function()
    {
      clicked = 0;
      $("#menu").css('top','0px');
    }
  });
});
  
  
$( function() {
  $( "#resizeHandler" ).draggable({
    start : function()
    {
      clicked = 1;
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
      clicked = 0;
      $("#menu").css('top','0px');
    }
  });
});



var menu = new BootstrapMenu('#resizeHandler', {

  actions: [{
      name: '앞으로 가져오기',
      onClick: function() {
        $(".onEdit").css('z-index', Number($(".onEdit").css("z-index")) + 1 );
        if($(".onEdit").css( "z-index") > highest) highest = $(".onEdit").css( "z-index");
      }
    }, {
      name: '뒤로 보내기',
      onClick: function() {
        $(".onEdit").css('z-index', Number($(".onEdit").css("z-index")) - 1 );
        if($(".onEdit").css( "z-index") < lowest) lowest = $(".onEdit").css( "z-index");
      }
    }, {
      name: '맨 앞으로 가져오기',
      onClick: function() {
        $(".onEdit").css( "z-index", highest++);
      }
    }, {
      name: '맨 뒤로 보내기',
      onClick: function() {
        $(".onEdit").css( "z-index", lowest--);
        
      }
  }]
});