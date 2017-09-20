var state = 0;

$( "#tutorial" ).click
(
	function()
	{
		switch(state)
		{
			case 0:
				state++;
				$('#alert_first').addClass('hidden');
				$('#alert_second').removeClass('hidden');
				$('#add').css('z-index', '7' );
			break;

			case 1:
				state++;
				$('#alert_second').addClass('hidden');
				$('#alert_third').removeClass('hidden');
				$('#add').css('z-index', '0' );
				$('#move').css('z-index', '7' );
			break;

			case 2:
				state++;/**/
				$('#alert_third').addClass('hidden');
				$('#alert_fourth').removeClass('hidden');
				$('#move').css('z-index', '0' );
				$('#save').css('z-index', '7' );
			break;

			default:
			$('#graypanel').css('display', 'none' );
			$('#tutorial').css('display', 'none' );
			$('#save').css('z-index', '0' );
			$('#menu').css('z-index', '5')
			break;
		}
	}
);



function hidemenu()
{
	$('#menu').css('top','-110px');
	$("#sidebar").css('left','67vw');
}

function showmenu()
{
	  $('#menu').css('top','0px');
	  $("#sidebar").css('left','101vw');
}

$( "#add" ).click
(function(){hidemenu();});

$( "#move" ).click
(function(){showmenu();});

$( "#save" ).click
(
	function()
	{
	    
	}
);

$( "#sidebar div" ).click
(
		function()
		{
		  
		  
		  var url = $(this).data("url");
			var wid = $(this).data("width");
			var hei = $(this).data("height");
      var doc_wid = $(window).width();
      var doc_hei = $(window).height();
	   

			$('<iframe/>', {
			  class : "widgets",
				frameborder : "0",
				src : url,
				width : wid,
				height : hei,
			}).css({
			    left :  (doc_wid - wid) / 2 + "px",
			    top : (doc_hei - hei) / 2 + "px"
			}).appendTo('#contents');
	/*
			$('<div/>', {
			    class : "widgets",
				text : url,
				width : wid,
				height : hei
			}).css({
			    left :  (doc_wid - wid) / 2 + "px",
			    top : (doc_hei - hei) / 2 + "px"
			}).appendTo('#contents');
*/
      showmenu();
			
		}
);