var state = 3;

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
				$('#add').css('z-index', '5' );
			break;

			case 1:
				state++;
				$('#alert_second').addClass('hidden');
				$('#alert_third').removeClass('hidden');
				$('#add').css('z-index', '0' );
				$('#move').css('z-index', '5' );
			break;

			case 2:
				state++;
				$('#alert_third').addClass('hidden');
				$('#alert_fourth').removeClass('hidden');
				$('#move').css('z-index', '0' );
				$('#save').css('z-index', '5' );
			break;

			default:
			$('#graypanel').css('display', 'none' );
			$('#tutorial').css('display', 'none' );
			$('#save').css('z-index', '0' );
			break;
		}
	}
);



function hidemenu()
{
	//$('#menu').slideUp();
	//$("#sidebar").css('width','33vw');
	$("#sidebar").css('left','67vw');
}

$( "#add" ).click
(
		function()
	{
		hidemenu();
	}
);

$( "#move" ).click
(
	function()
	{
	//$('#menu').slideDown();
	//$("#sidebar").css('width','0vw');
	$("#sidebar").css('left','101vw');
	}
);