var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
let locationIcon = document.querySelector(".weather-icon");

fetch(
  "http://api.weatherapi.com/v1/current.json?key=1037032084d74f14a7b95708220101&q=Ulaanbaatar&aqi=no"
)
  .then((response) => response.json())
  .then((data) => {
    var tempValue = data.current.temp_c;
    var nameValue = data.location.name;
    var icon = data.current.condition.icon;
    main.innerHTML = nameValue;
    temp.innerHTML = tempValue + "'C";
    locationIcon.innerHTML = `<img src="${"https:" + icon}">`;
    console.log(data);
    console.log(icon);
  });
