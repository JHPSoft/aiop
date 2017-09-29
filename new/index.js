
function hidemenu()
{
	$('#menu').css('top','-110px');
	$("#sidebar").css({
	  'left' : '75vw',
	  'visibility' : 'visible'});
}

function showmenu()
{
	  $('#menu').css('top','0px');
	  $("#sidebar").css({
	    'left' :'101vw',
	    'visibility' : 'hidden'});
	  
}

$('#sheet').click(
  function()
  {
    showmenu();
  }
);

/*$("#menu button").click(
  function(){
      $(this).blur();
  });*/

$( "#add" ).click
(function(){hidemenu();});

$('.dropdown-menu a').click(
  function()
  {
    //alert($(this).html());
    $('#dropdown-category').text($(this).html());
    //$('#dropdown-category').app
    //$( "#dropdown-category" ).append( '<span class="caret"></span>' );
  }
);

$('#sidebar #contents-area').on('click', 'div',
  	function()
		{

		  //alert( $(this).data("url"));

		  var url = $(this).data("url");
			var wid = $(this).data("width");
			var hei = $(this).data("height");
			var canresize = $(this).data("resizable");
      var doc_wid = $(window).width();
      var doc_hei = $(window).height();

    console.log(url);


			$('<iframe/>', {
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