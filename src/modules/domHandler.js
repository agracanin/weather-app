
export default function renderPage(weatherData) {
    renderWeather(weatherData);
    forecastRender(weatherData);
}



function renderWeather(weatherData) {
    console.log(weatherData);
    const city = document.querySelector('.city-name');
    const country = document.querySelector('.country-name');
    const date = document.querySelector('.location-date');
    const icon = document.querySelector('.weather-img');
    const temp = document.querySelector('.temp');
    const weatherDesc = document.querySelector('.weather-desc');
    const feelsLike = document.querySelector('.feels-like');
    const forecastDesc = document.querySelector('.forecast-desc');


    if (weatherData.country === "United States of America") {
        country.textContent = weatherData.region;
        temp.textContent = `${weatherData.current_temp.f} °F`;
        feelsLike.textContent = `${weatherData.feels_like.f} °`;
    } else {
        country.textContent = weatherData.country;
        temp.textContent = `${weatherData.current_temp.c} °C`
        feelsLike.textContent = `${weatherData.feels_like.c}°`;
    }

    city.textContent = `${weatherData.city}, `;
    icon.src = weatherData.img_src;
    weatherDesc.textContent = weatherData.condition;
    forecastDesc.textContent = weatherData.forecast_desc;
    date.textContent = weatherData.date;
}

function forecastRender(weatherData) {
    const windSpeed = document.querySelector('.wind-label');
    const humidity = document.querySelector('.humidity-label');
    const uv = document.querySelector('.uv-label');
    const visibility = document.querySelector('.visibility-label');
    const cloudiness = document.querySelector('.cloudiness-label');
    const rainChance = document.querySelector('.rain-chance-label');
    const sunrise = document.querySelector('.sunrise-label');
    const sunset = document.querySelector('.sunset-label');
    const pressure = document.querySelector('.pressure-label');

    // Units Check
    if (weatherData.country === "United States of America") {
        windSpeed.textContent = `${weatherData.wind.mph} mph`;
        visibility.textContent = `${weatherData.visibility.miles} mi`;
    } else {
        windSpeed.textContent = `${weatherData.wind.kph} kph`;
        visibility.textContent = `${weatherData.visibility.kilometers} km`;
    }

    humidity.textContent = `${weatherData.humidity}%`;
    uv.textContent = weatherData.uv_index;
    cloudiness.textContent = `${weatherData.cloudiness}%`;
    rainChance.textContent = `${weatherData.chance_of_rain}%`;
    sunrise.textContent = weatherData.sunrise;
    sunset.textContent = weatherData.sunset;
    pressure.textContent = `${weatherData.pressure} inHg`
}