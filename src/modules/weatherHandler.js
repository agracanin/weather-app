import { format, parse } from 'date-fns';

function formatWeather(data) {

    console.log(data);

    const dateObj = parse(data.location.localtime, 'yyyy-MM-dd H:mm', new Date());
    const formattedDate = format(dateObj, 'EEEE d MMMM yyyy | h:mm a');

    const formattedData = {
        city: data.location.name,
        country: data.location.country,
        region: data.location.region,
        date: formattedDate,
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
            mph: Math.round(data.current.wind_mph),
            kph: Math.round(data.current.wind_kph)
        },
        forecast_desc: data.forecast.forecastday[0].day.condition.text,
        visibility: {
            miles: data.current.vis_miles,
            kilometers: data.current.vis_km
        },
        humidity: data.current.humidity,
        uv_index: data.current.uv,
        cloudiness: data.current.cloud,
        chance_of_rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
        pressure: data.current.pressure_in
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