// https://api.openweathermap.org/data/2.5/weather?q=London&appid=e55f4249ad35c206cf3065236b7d3bc6&units=metric

const apiKey = "e55f4249ad35c206cf3065236b7d3bc6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png"
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png"
    } else if (data.weather[0].main === "rain") {
        weatherIcon.src = "./images/rain.png"
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png"
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./images/mist.png"
    }

    weather.style.display = "block"
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

});

