var date;

$(document).ready(
  function()
  {
    date = new Date().getDay();
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

    var t = setTimeout(startTime, 60000);
}
