import getWeather from "./modules/weatherHandler";
import renderPage from "./modules/domHandler";


const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.submit-button');


getWeather("London").then(renderPage).catch(error => console.log(error));

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (searchInput.value === "") return;

    const weatherData = await getWeather(searchInput.value);
    renderPage(weatherData);
});