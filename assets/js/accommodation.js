var city = paris
$.getJSON("api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=fe767e37e56f5430e6ee4b7337d52151",function(data){
    console.log(data);

    var icon = "http.openweathermap.org/img/w/"+ data.weather[0].icon +".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $(".temp").append(temp);
    $(".weather").append(weather);

});