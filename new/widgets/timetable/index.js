var date;
var h_min = 24;
var h_max = 0;
var hour_block;
$(document).ready(
  function()
  {
    date = new Date().getDay();
    date = 2;
    check_highlight();
    startTime();
    
  }
);

function check_highlight()
{
    $('.vertical').removeClass('shadow');
    switch(date)
    {
      case 1:
        $('#mon').addClass('shadow');
      break;
      case 2:
        $('#tue').addClass('shadow');
      break;
      case 3:
        $('#wed').addClass('shadow');
      break;
      case 4:
        $('#thu').addClass('shadow');
      break;
      case 5:
        $('#fir').addClass('shadow');
      break;
    }
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    
    $("#currentTime").css({
      top : "calc(" + ((h*3600+m*60)-h_min*3600)/3600 / hour_block * 100 + "vh - 20px)"
    });
    $("#showtime").css({
      top : "calc(" + ((h*3600+m*60)-h_min*3600)/3600 / hour_block * 100 + "vh - 30px)"
    }).text(h+" : " +m);
    var t = setTimeout(startTime, 1000);
}

$(function () {
       $( ".inputtimer" ).change(function() {
          var max = parseInt($(this).attr('max'));
          var min = parseInt($(this).attr('min'));
          $(this).val( Math.round($(this).val())  );
          
          if ($(this).val() > max)
          {
              $(this).val(max);
          }
          else if ($(this).val() < min)
          {
              $(this).val(min);
          }
        });
    });
    
    
$('#onok').click(
  function()
  {
    var selected_day = $('.active a').html();
    var classname = $('#classname').val();
    var classnum = $('#classnum').val();
    var starttime = Number($('#starttime').val());
    var endtime = Number($('#endtime').val());
    
    
    if(starttime > endtime)
      alert("시작 시간과 종료 시간을 확인해주세요");
    else
    {
      var targetday;
      //console.log(selected_day + " " + classname + " "+ classnum + " " + starttime + " ~ " + endtime  );
      
      switch(selected_day){ case "월요일": targetday = "mon";break;  case "화요일": targetday = "tue";break; case "수요일": targetday = "wed";break; case "목요일": targetday = "thu";break; case "금요일": targetday = "fri";break;}
      
      if(h_min > starttime)
        h_min = starttime;
      
      if(h_max < endtime)
        h_max = endtime;
      
      hour_block = (h_max - h_min);
      
  		var divs = $('<div/>', {
  		  class : "myclass panel"
  		}).attr({
  		  "data-starttime" : starttime,
  		  "data-endtime" : endtime
  		});

  		var tomid = $('<div/>',{
  		  class : "tomiddle"
  		}).appendTo(divs);
  		
  			var cname = $('<p/>', {
    		  text : classname
    		}).appendTo(tomid);
    		
    		var cnum = $('<p/>', {
    		  text : classnum
    		}).appendTo(tomid);
  		
  		$(divs).appendTo('#'+targetday);
  
      
      $('.myclass').each(
        function()
        {
          $(this).css({
            height : ($(this).data("endtime")-$(this).data("starttime")) / hour_block * 100 + "vh",
            top : ($(this).data("starttime") - h_min) / hour_block * 100 + "vh"
          })
          console.log($(this).data("starttime"));
        });
    }
  }
);