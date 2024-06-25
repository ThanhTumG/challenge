const BASE_URL = "https://api.openweathermap.org/data/2.5"

const apiWeather = process.env.REACT_APP_API_WEATHER;
const apiWeatherCity = process.env.REACT_APP_API_WEATHER_CITY

export const getWeatherByLocation = async (lat, lon) => {
    try {
        const response = await fetch(

            `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${apiWeather}&units=metric`
        );
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error);
    }
};

export const getWeatherByCity = async (city) => {
    try {
        const response = await fetch(
            `${BASE_URL}/forecast?appid=${apiWeatherCity}=${city.replace(' ', '%20')}&units=metric`
        );
        const json = await response.json();
        return json
    } catch (error) {
        return "error"
    }
};

export const getCity = async () => {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error(error);
    }
};