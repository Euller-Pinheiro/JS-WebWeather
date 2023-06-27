export const screen = {
    card: document.querySelector('.card'),
    renderCityWeather(weather, coordinates){
        this.card.innerHTML = `
        <h2 class="city-name"> ${weather.city_name} </h2>
        <h3 class="state"> ${coordinates.state} </h3>
        <div class="weather">
            <div class="weather-info">
                <div class="temperature">
                    <div class="actual-temperature">
                        <img src="http://openweathermap.org/img/w/${weather.icon}.png" alt="weather icon"/>
                        <h3> ${Math.ceil(weather.temperature)}ºC </h3>
                    </div>
                    <p class="weather-description"> ${weather.description} </p>
                </div>
                <div class="predicted-temperature">
                    <div class="min-temperature">
                        <img src="./src/icons/min-temperature.png" alt="atmospheric pressure">
                        <span>${Math.ceil(weather.temp_min)}ºC</span>
                    </div>
                    <div class="max-temperature">
                        <img src="./src/icons/max-temperature.png" alt="atmospheric pressure">
                        <span>${Math.ceil(weather.temp_max)}ºC</span>
                    </div>
                    <p class="feels-like"> Sensação <span>${Math.ceil(weather.feels_like)}ºC</span> </p>
                </div>    
            </div>
        </div>
        <hr>
        <ul class="metrics">
            <li class="info">
                <img src="./src/icons/pressure.png" alt="atmospheric pressure">
                <span class="units">${weather.pressure}hPa</span>
            </li>
            <li class="info"> 
                <img src="./src/icons/wind.png" alt="wind icon"/>
                <span class="units">${Math.ceil(weather.wind_speed)} km/h</span>
            </li>
            <li class="info"> 
                <img src="./src/icons/humidity.png" alt="humidity icon"/>
                <span class="units">${weather.humidity}%</span>
            </li>
        </ul>
    `
    },
    renderCityNotFound(){
        this.card.innerHTML = `<h1 class="city-not-found">Cidade não encontrada</h1> `
    }
}