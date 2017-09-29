"use strict";

var run = setInterval(function () {
  var today = new Date(),
      h = today.getHours(),
      m = today.getMinutes();
  if (h > 12) {
    h = h - 12;
  }
  if(h < 10)
    document.querySelector("#hour").innerHTML = "0" + h;
  else
    document.querySelector("#hour").innerHTML = h;

  if (m < 10) 
    document.querySelector("#min").innerHTML = "0" + m;
  else 
    document.querySelector("#min").innerHTML = m;


}, 1000);