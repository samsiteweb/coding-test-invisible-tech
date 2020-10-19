import { currentTimeByPostalCode, weatherByPostalCode } from "../services"
import { RESPONSE } from "../utils"

const { ERROR } = RESPONSE

const getWeatherByPostalCode = async postalCode => {
  try {
    const weather = await weatherByPostalCode(postalCode)
    return weather
  } catch (error) {
    return ERROR("An error occured when getting weather", 400)
  }
}

const getCurrentTimeByPostalCode = async postalCode => {
  try {
    const currentTime = await currentTimeByPostalCode(postalCode)
    return currentTime
  } catch (error) {
    return ERROR("An error occured when getting current time", 400)
  }
}

export { getWeatherByPostalCode, getCurrentTimeByPostalCode }
