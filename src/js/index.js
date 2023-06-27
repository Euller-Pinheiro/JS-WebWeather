import { getGeolocation, getWeather, getIspInformations } from "./services/services.js";
import { coordinates } from "./objects/coordinates.js";
import { weather } from "./objects/weather.js";
import { screen } from './objects/screen.js'

const form = document.getElementById('form');
const cityName = document.getElementById('city');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const geoData = await getGeolocation(cityName.value);

    if (geoData.length === 0) {
        screen.renderCityNotFound();
        return;
    };

    coordinates.setCoordinates(geoData[0]);
    const currentWeather = await getWeather(coordinates.latitude, coordinates.longitude);

    weather.setWeather(currentWeather);
    screen.renderCityWeather(weather, coordinates);
})  


const renderWeatherInformations = async () => {
    const response = await getIspInformations()
    if (response.error === true) return;

    const { latitude, longitude } = response;

    coordinates.setCoordinatesFirstLoad(response)

    const currentWeather = await getWeather(latitude, longitude);

    weather.setWeather(currentWeather);
    screen.renderCityWeather(weather, coordinates);
}

renderWeatherInformations();