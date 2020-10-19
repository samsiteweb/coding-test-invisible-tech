
const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`
const WEATHER_FROM_LOCATION = `${API_BASE_URL}q=`
const WEATHER_FROM_POSTAL_CODE = `${API_BASE_URL}zip=`


const API = {
    WEATHER_FROM_LOCATION,
    WEATHER_FROM_POSTAL_CODE,
}

export default API
