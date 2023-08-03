
export default function renderWeather(weatherData) {
    if (!weatherData) return;


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