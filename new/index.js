
function hidemenu(){
	$('#menu').css('top','-110px');
}

function showmenu(){
	  $('#menu').css('top','0px');
}

function showside(){
	$("#sidebar").css({
	  'left' : '75vw',
	  'visibility' : 'visible'});
}

function hideside(){
	  $("#sidebar").css({
	    'left' :'102vw',
	    'visibility' : 'hidden'});
}

$('#backgroundimages').click(
  function()
  {
    hideside();
    showmenu();
  }
);


$( "#add" ).click
(
  function(){
    hidemenu();
    showside();
  }
);

/*사이드바 카테고리 클릭 시*/
$('.dropdown-menu a').click(
  function()  {
    $('#dropdown-category').text($(this).html());
  }
);

/*위젯 추가*/
$('#sidebar #contents-area').on('click', 'div',
  	function()
		{
		  var url = $(this).data("url");
			var wid = $(this).data("width");
			var hei = $(this).data("height");
			var canresize = $(this).data("resizable");
      var doc_wid = $(window).width();
      var doc_hei = $(window).height();
      var tmpid;
      for(var i = 0; i <= $('.widgets').length ; i++)
        if($('#'+i).length == '0')
          tmpid=i;
          
			$('<iframe/>', {
			  id : tmpid  ,
			  class : "widgets",
				frameborder : "0",
				src : url,
				width : wid,
				height : hei,
			}).css({
			    left :  (doc_wid - wid) / 2 + "px",
			    top : (doc_hei - hei) / 2 + "px"
			}).data("resizable",canresize).appendTo('#sheet');

      showmenu();
      hideside();
		}
);

$("#save").mouseleave(
  function()
  {
    if( $("#save i").hasClass("glyphicon-wrench") )
    {
      $("#menu").addClass("out");
      $("#menu").removeClass("in");
      $("#menu").css({"opacity" : "0"});
      
    }
});

$("#menu").mouseenter(
  function()
  {
    $("#menu").addClass("in");
    $("#menu").removeClass("out");
    $("#menu").css({"opacity" : "1"});
});



/*edit.js에 있던 scripts*/

/*변수들 문제없으면 맨 위로*/
var clicked = 0;
var highest = 5000;
var lowest = 5000;

var onEdit ;

$("#save").click
(
	function()
	{
    if (clicked == "0")   //저장
    {
      clicked = "2";
      $("#menu").css('left','-68px');
      $( "#save i" ).addClass( "glyphicon-wrench" );
      $( "#save i" ).removeClass(  "glyphicon-save" );
      $( "#add" ).addClass("disabled");
      $("#sidebar").css('display','none');
      $("#save").trigger('mouseleave');
    }
    else                  //수정
    {
      clicked = "0";
      $("#menu").css('left','0px');
      $( "#save i" ).addClass(  "glyphicon-save" );
      $( "#save i" ).removeClass(  "glyphicon-wrench" );
      $( "#add" ).removeClass("disabled");
      $("#sidebar").css('display','block');
      $("#save").trigger('mouseenter');
    }
	}
);


$("#contents").delegate("iframe.widgets", "mouseover",
  function (event)
  {
    if(clicked == "0")
    {
      onEdit = '#' + $(this).attr('id');
      $("body").data("onEdit",onEdit);
      
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
    if(clicked == "0" && $('.bootstrapMenu').css('display') == 'none' )
    {
      onEdit = '';
      $("body").data("onEdit","");
      $("#resizeHandler").fadeOut(100);
    }
  }
);


/*$("#removeicon").click
(
  function()
  {
    $('.onEdit').remove();
    $("#resizeHandler").fadeOut(100);
  }
);
*/

$( function() {
  $("#resizeHandler").resizable({

    minHeight: 35,
    minWidth: 35,
    start : function()
    {
      clicked = 1;
      hidemenu();
      hideside();
    },
    
    resize : function()
    {
      $(onEdit).css({
      'width' : $(this).width(),
      'height' : $(this).height()
      });
    },
    
    stop : function()
    {
      clicked = 0;
      showmenu();
    }
  });
});
  
$(function()
{
  $('.widgets').draggable({
    containment:"#sheet",
    snap: true,
    snapMode: "both"
  });
});

  
$( function() {
  $( "#resizeHandler" ).draggable({
    containment:"#sheet",
    snap: true,
    snapMode: "both",
    
    start : function()
    {
      clicked = 1;
      hidemenu();
      hideside();
    },
    
    drag : function()
    {
      $(onEdit).css({
      'left' : $(this).position().left,
      'top' : $(this).position().top
      });
    },
    
    stop : function()
    {
      clicked = 0;
      showmenu();
    }
  });
});



var menu = new BootstrapMenu('#resizeHandler', {

  actions: [{
      name: '앞으로 가져오기',
      onClick: function() {
        $(onEdit).css('z-index', Number($(onEdit).css("z-index")) + 1 );
        if($(onEdit).css( "z-index") > highest) highest = $(onEdit).css( "z-index");
      }
    }, {
      name: '뒤로 보내기',
      onClick: function() {
        $(onEdit).css('z-index', Number($(onEdit).css("z-index")) - 1 );
        if($(onEdit).css( "z-index") < lowest) lowest = $(onEdit).css( "z-index");
      }
    }, {
      name: '맨 앞으로 가져오기',
      onClick: function() {
        $(onEdit).css( "z-index", highest++);
      }
    }, {
      name: '맨 뒤로 보내기',
      onClick: function() {
        $(onEdit).css( "z-index", lowest--);
        
      }
  }]
});

var bgmenu = new BootstrapMenu('#backgroundimages', {

  actions: [{
      name: '배경이미지 변경',
      onClick: function()
      {
        var bgsrc = prompt("이미지 주소 입력", "");

        if (bgsrc !== null || bgsrc != ""){
          localStorage.setItem("bgsrc", bgsrc);
          $("#backgroundimages").css("background-image" , "url("+bgsrc+")");
        }
      }
    }, {
      name: '투명도 조절',
      onClick: function()
      {
        var bgopac = prompt("배경 투명도 (0~100)", "");

        if (bgopac >= 0 && bgopac <= 100){
          localStorage.setItem("bgopac", bgopac);
          $("#backgroundimages").css("opacity" , bgopac/100);
        }
        else
          alert("0~100사이의 숫자를 입력하세요");
      }
    }]
});

$(window).bind('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        if(String.fromCharCode(event.which).toLowerCase() == 's')
        {
            event.preventDefault();
            $("#save").trigger('click');
        }
    }
});


function chkbg(){
  if (localStorage.getItem("bgsrc") === null)
  {
  //...
  }
  else
  {
    $("#backgroundimages").css("background-image" , "url("+ localStorage.getItem("bgsrc") +")");
    $("#backgroundimages").css("opacity" , localStorage.getItem("bgopac")/100);
  }
}