
export async function getGeolocation(cityName) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=47df926a280ac35168b5c97cf80a9a37`
    const response = await fetch(url);
    return await response.json();
}
export async function getWeather(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=47df926a280ac35168b5c97cf80a9a37`
    const response = await fetch(url);
    return await response.json();
}

export async function getIspInformations(){
    const response = await fetch('https://ipapi.co/json/');
    return await response.json()
}