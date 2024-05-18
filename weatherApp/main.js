const apiKey = "f718a12d1e98f554e5d2aab7afcd8669";

const weatherData = document.querySelector(".weather-result");
const cityInput = document.querySelector(".input");
const formEl = document.querySelector("form");
const loader = document.querySelector(".loader");

const hideloader = () => {
    loader.classList.remove('show');
};

const showloader = () => {
    loader.classList.add('show');
};

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityName = cityInput.value.trim();
    if (cityName) {
        showloader();
        weatherData.innerHTML = '';
        getWeatherData(cityName);
    } else {
        weatherData.innerHTML = `<p>Please enter a valid city name</p>`;
    }
});

async function getWeatherData(cityName) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data. Please check the city name.");
        }

        const data = await response.json();
        const countryCode = data.sys.country;
        const countryName = await getCountryName(countryCode);
        let weatherIcon = data.weather[0].icon;

        const localTime = getLocalTime(data.timezone);

        weatherData.innerHTML = `
        <div class="icon-wrapper">
            <div class="icon">
                <img class="weather-img" src="img/weather/${weatherIcon}.svg" alt="Weather Icon">
            </div>
            <div class="temp-wrapper">
                <h1 class="temp">${Math.round(data.main.temp)} °C</h1>
                <p class="desc">${data.weather[0].description}</p>
            </div>
        </div>

        <div class="temp-high-low">
            <p class="temp-low">Low: ${Math.round(data.main.temp_min)} °C</p>
            <p class="temp-high">High: ${Math.round(data.main.temp_max)} °C</p>
        </div>

        <p class="feels-like">Feels like: ${Math.round(data.main.feels_like)} °C</p>

        <div class="city-info">
            <h2 class="city_name">${data.name}</h2>
            <h3 class="country-code">${countryName}</h3>
            <p class="local-time">${localTime}</p>
        </div>

        <div class="details_wrapper">
            <div class="details">
                <div class="icon-2">
                    <img src="humidity-svgrepo-com.svg" alt="Humidity Icon">
                </div>
                <div>
                    <h2 class="details-head">Humidity</h2>
                    <p class="humidity details-paragraph">${data.main.humidity} %</p>
                </div>
            </div>

            <div class="details">
                <div class="icon-2">
                    <img src="cloud-wind-icon.svg" alt="Wind Speed Icon">
                </div>
                <div>
                    <h2 class="details-head">Wind Speed</h2>
                    <p class="wind details-paragraph">${data.wind.speed} km/h</p>
                </div>
            </div>

            <div class="details">
                <div class="icon-2">
                    <img src="steam-air-icon.svg" alt="Pressure Icon">
                </div>
                <div>
                    <h2 class="details-head">Pressure</h2>
                    <p class="pressure details-paragraph">${data.main.pressure} Pa</p>
                </div>
            </div>
        </div>
        `;
    } catch (error) {
        weatherData.innerHTML = `<p>An error occurred: ${error.message}</p>`;
    } finally {
        hideloader();
    }
}

async function getCountryName(countryCode) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        if (!response.ok) {
            throw new Error("Failed to fetch country data.");
        }
        const countryData = await response.json();
        return countryData[0].name.common;
    } catch (error) {
        console.error("Error fetching country name:", error);
        return countryCode; // Fallback to country code if fetching fails
    }
}


function getLocalTime(timezoneOffset) {
    const now = new Date();
    const localTime = new Date(now.getTime() + timezoneOffset * 1000);
    return localTime.toLocaleString();
}
