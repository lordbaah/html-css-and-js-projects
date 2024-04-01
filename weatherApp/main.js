const apikey = "f718a12d1e98f554e5d2aab7afcd8669";

const weatherData = document.querySelector(".weather-result");
const cityInput = document.querySelector(".input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit" ,(event)=>{
    event.preventDefault();
    const cityName = cityInput.value;
    getWeatherdata(cityName);
})

async function getWeatherdata (cityName){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`)

        if (!response.ok) {
            throw new Error("Network response not okay")
        }

        const data = await response.json();
        console.log(data);
        
// manupulating DOM
        // weatherData.style.display = "block"

        // // temperature
        // let temperatureText = document.querySelector(".temp");
        // temperatureText.textContent = `${data.main.temp} °C`;

        // // city
        // let cityText = document.querySelector(".city_name");
        // cityText.textContent = `${data.name}`;

        // let descriptionText = document.querySelector(".desc");
        // descriptionText.textContent = `${data.weather[0].description}`;

        // // humidity
        // let humidity = document.querySelector(".humidity");
        // humidity.textContent = `${data.main.humidity} %`;

        // // wind speed
        // let windspeed = document.querySelector(".wind");
        // windspeed.textContent = `${data.wind.speed} m/s`;


        // // pressure
        // let pressure = document.querySelector(".pressure");
        // pressure.textContent = `${data.main.pressure} `;

        // // country name
        // let countryCode = document.querySelector(".country-code");
        // countryCode.textContent = `${data.sys.country} `;


        // // feels like
        // let feelsLike = document.querySelector(".feels-like");
        // feelsLike.textContent = `${data.main.feels_like} `;


        // // inserting icon
        // let icon = document.querySelector(".icon");
        // let weatherIcon = data.weather[0].icon;
        // icon.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon}.png" style= 'height:90px'  alt="img">`;

        let weatherIcon = data.weather[0].icon;

        weatherData.innerHTML =`
        <div class="icon-wrapper">
            <div class="icon">
                
                <img class="weather-img"  src="img/weather/${weatherIcon}.svg" alt="">
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

        <div class="city-info">
            <h2 class="city_name">${data.name}</h2>
            <h3 class="country-code">${data.sys.country}</h3>
            <p class="feels-like">feels like: ${Math.round(data.main.feels_like)}</p>
        </div>

        <div class="details_wrapper">
            <div class="details">
                <div class="icon-2">
                    <img src="humidity-svgrepo-com.svg" alt="">
                </div>
                <div>
                    <h2 class="details-head">Humidity</h2>
                    <p class="humidity details-paragragh">${data.main.humidity} %</p>
                </div>
            </div>

            <div class="details">
                <div class="icon-2">
                    <img src="cloud-wind-icon.svg" alt="">
                </div>
                <div>
                    <h2 class="details-head">Wind speed<h2>
                    <p class="wind details-paragragh">${data.wind.speed} kmph</p>
                </div>
            </div>

            <div class="details">
                <div class="icon-2">
                    <img src="steam-air-icon.svg" alt="">
                </div>
                <div>
                    <h2 class="details-head">Pressure</h2>
                    <p class="Pressure details-paragragh">${data.main.pressure} Pa</p>
                </div>
            </div>
        </div>
        `

    } catch (error) {
    }
}