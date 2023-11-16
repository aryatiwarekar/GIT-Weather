async function checkWeather(){
    try{
        const responseWunderground = await fetch("https://api.weather.com/v2/pws/observations/current?stationId=IKHED5&format=json&units=m&apiKey=ca805818bd6147fd805818bd61c7fdf6");
        var dataWunderground = await responseWunderground.json();
    }
    catch(err){
        const responseWunderground = await fetch("https://api.weather.com/v2/pws/observations/current?stationId=KMAHANOV10&format=json&units=m&apiKey=ca805818bd6147fd805818bd61c7fdf6");
        var dataWunderground = await responseWunderground.json();
        console.log(err);
    }
    const  weatherIcon = document.querySelector(".weather-icon");
    var openWeatherResponse =await fetch("https://api.openweathermap.org/data/2.5/weather?lat=17.643416&lon=73.464276&appid=02c6fac3d49946f4fcd8ddc0357bc260&units=metric");
    var openWeatherData = await openWeatherResponse.json();
    console.log(dataWunderground);
    console.log(openWeatherData);
    document.querySelector(".city").innerHTML = dataWunderground.observations[0].neighborhood;
    document.querySelector(".temp").innerHTML = dataWunderground.observations[0].metric.temp + " °C";
    document.querySelector(".humidity").innerHTML = dataWunderground.observations[0].humidity + " %";
    document.querySelector(".wind").innerHTML = dataWunderground.observations[0].metric.windSpeed + " km\h";
    document.querySelector(".weather-status").innerHTML = openWeatherData.weather[0].main;

    // document.querySelector(".city").innerHTML = "GIT, Lavel";
    // document.querySelector(".temp").innerHTML = Math.round(openWeatherData.main.temp) + " °C";
    // document.querySelector(".humidity").innerHTML = openWeatherData.main.humidity + " %";
    // document.querySelector(".wind").innerHTML = openWeatherData.wind.speed + " km\h";
    // document.querySelector(".weather-status").innerHTML = openWeatherData.weather[0].description;

    if(openWeatherData.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(openWeatherData.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(openWeatherData.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(openWeatherData.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if(openWeatherData.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

}

checkWeather();
let timerInSeconds = 0;

setInterval(() => {
  timerInSeconds += 1;
//   refreshTimer.innerHTML = `Refreshing page in: ${timerInSeconds} seconds`;

  if (timerInSeconds >= 45) {
    window.location.reload();
  }
}, 1000);



