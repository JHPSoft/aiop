$( "#sidebar div" ).click
(
		function()
		{
		    var url = $(this).data("url");
			var wid = $(this).data("width");
			var hei = $(this).data("height");
            var doc_wid = $(window).width();
	        var doc_hei = $(window).height();
	        

		/*
			$('<iframe/>', {
				frameborder : "0",
					src : tmp,
				width : wid,
				height : hei
			}).appendTo('#contents');
		*/

            
			$('<div/>', {
			    class : "onArrange ui-widget-content",
				text : url,
				width : wid,
				height : hei
			}).css({
			    left :  (doc_wid - wid) / 2 + "px",
			    top : (doc_hei - hei) / 2 + "px"
			}).appendTo('#contents');
			
			$(".onArrange").draggable();
		}
);