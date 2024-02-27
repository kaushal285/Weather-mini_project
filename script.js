const apiKey = "0d5a28aebbcc85c51a2e55a43931246f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=vadoadar";

if (typeof document !== 'undefined') {
    let searchBox = document.querySelector(".search input")
    
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/weather-app-img/images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/weather-app-img/images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/weather-app-img/images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/weather-app-img/images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/weather-app-img/images/mist.png"
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

}