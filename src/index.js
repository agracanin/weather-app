import getWeather from "./modules/weatherHandler";
import renderWeather from "./modules/domHandler";


const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.submit-button');


getWeather("London").then(renderWeather).catch(error => console.log(error));

searchForm.addEventListener('submit', (e) => {
    e.preventDefault;
});

searchBtn.addEventListener('click', async () => {
    if (searchInput.value === "") return;

    const weatherData = await getWeather(searchInput.value);
    renderWeather(weatherData);
})