
function formatWeather(data) {

    console.log(data);

    const formattedData = {
        city: data.location.name,
        country: data.location.country,
        region: data.location.region,
        date: data.location.localtime,
        img_src: data.current.condition.icon,
        condition: data.current.condition.text,
        current_temp: {
            f: Math.round(data.current.temp_f),
            c: Math.round(data.current.temp_c)
        },
        feels_like: {
            f: Math.round(data.current.feelslike_f),
            c: Math.round(data.current.feelslike_c)
        },
        wind: {
            mph: data.current.wind_mph,
            kph: data.current.wind_kph
        },
        forecast_desc: data.forecast.forecastday[0].day.condition.text
    }

    return formattedData;
}

export default async function getWeather(city) {

    const url = (`http://api.weatherapi.com/v1/forecast.json?key=b72bf483a46b47e093b185613230108&q=${city}&days=1&aqi=no&alerts=no`);

    try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) {
            throw new Error(`${city} was not found!`);
        }
        const data = formatWeather(await response.json());
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}