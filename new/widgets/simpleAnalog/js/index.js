var updateClock = function() {
  var d = new Date();
  var h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds();
  
  $('.hour-hand').css('webkit-transform', 'rotate(' + (h % 12 * 30) + 'deg)');
  $('.minute-hand').css('webkit-transform', 'rotate(' + m * 6 + 'deg)');
  $('.second-hand').css('webkit-transform', 'rotate(' + s * 6 + 'deg)');
};

$(function() {
  setInterval(updateClock, 1000);
});