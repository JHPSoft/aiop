$( "#sidebar div" ).click
(
		function()
		{
		var tmp = $(this).data("url");
			var wid = $(this).data("width");
			var hei = $(this).data("height");

		/*
			$('<iframe/>', {
				frameborder : "0",
					src : tmp,
				width : wid,
				height : hei
			}).appendTo('#contents');
		*/

			$('<div/>', {
			class : "onArrange",
					text : tmp,
				width : wid,
				height : hei
			}).appendTo('#contents');
		}
);