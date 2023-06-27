export const weather = {
    city_name: '',
    temperature: 0,
    temp_max: 0,
    temp_min: 0,
    feels_like: 0,
    pressure: 0,
    wind_speed: 0,
    humidity: 0,
    description: '',
    icon: '',
    setWeather(weather) {
        this.city_name = weather.name
        this.temperature = weather.main.temp
        this.temp_max = weather.main.temp_max
        this.temp_min = weather.main.temp_min
        this.feels_like = weather.main.feels_like
        this.pressure = weather.main.pressure
        this.wind_speed = weather.wind.speed
        this.humidity = weather.main.humidity
        this.description = weather.weather[0].description
        this.icon = weather.weather[0].icon
        
    }
}