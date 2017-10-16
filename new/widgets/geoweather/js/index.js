// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
/*if ("geolocation" in navigator) {
  $('.js-geolocation').show();
} else {
  $('.js-geolocation').hide();
}*/


function getGeolocation()
{
  navigator.geolocation.getCurrentPosition(function(position)
  {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
    var json4store = {
      'latitude' : position.coords.latitude,
      'longitude' : position.coords.longitude
    };
    localStorage.setItem('prevGeo', JSON.stringify(json4store));
  });
}
/* Where in the world are you? */
$('#js-geolocation').on('click', function() {
  getGeolocation();
});


$(document).ready(function() {
  $(window).resize(
{
  function()
  {
/*    if( $(window).width() < 450 && $(window).height() < 300)
    {
      $('#divlater').css('display : none;');
      $('#divtoday').addClass('height100').removeClass('height66');
    }
    else
    {
      $('#divlater').css('display : black;');
      $('#divtoday').removeClass('height100').addClass('height66');
    }*/
  }
});

  var prevGeo = JSON.parse(localStorage.getItem('prevGeo'));
  var geoData;
  if (localStorage.getItem("prevGeo") === null)
  {
    geoData = 'Seoul','';
    loadWeather(geoData); //@params location, woeid
  }
  else
  {
    geoData = prevGeo.latitude+','+prevGeo.longitude;
    loadWeather(geoData);
  }
  
  setInterval(loadWeather(geoData), 600000); //Update the weather every 10 minutes.
});

$("#resetgeo").click(
  function()
  {
    localStorage.removeItem('prevGeo');
  }
);

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      
      $("#today_cond").html('<i class="bigicon icon icon-'+weather.code+'"></i>');
      $("#today_H").html('<span>H : '+weather.high+'</span>');
      $("#today_L").html('<span>L : '+weather.low+'</span>');
      $("#today_temp").html('<span>'+weather.temp+'&deg;'+weather.units.temp+'</span>');
      $("#n_cond").html('<i class="smallicon icon icon-'+weather.forecast[1].code+'"></i>');
      $("#n_day").html('<span>'+weather.forecast[1].day+'</span>');
      $("#n_H").html('<span> H : '+weather.forecast[1].high+'</span>');
      $("#n_L").html('<span> L : '+weather.forecast[1].low+'</span>');
      $("#t_cond").html('<i class="smallicon icon icon-'+weather.forecast[2].code+'"></i>');
      $("#t_day").html('<span>'+weather.forecast[2].day+'</span>');
      $("#t_H").html('<span> H : '+weather.forecast[2].high+'</span>');
      $("#t_L").html('<span> L : '+weather.forecast[2].low+'</span>');
      
/*      html = '<div id="divleft"><i class="icon-'+weather.code+'"></i></div>';
      html += '<div id="divright"><ul><li><h3>H : '+weather.high+'  L : '+weather.low+'</h3></li>';
      html += '<li><h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2></li></ul></div>';
      

      
      $("#weather").html(html);*/
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}