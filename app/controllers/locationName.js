import { currentTimeByLocationName, weatherByLocationName } from "../services"
import { RESPONSE } from "../utils"

const { ERROR } = RESPONSE

const getWeatherByLocationName = async location => {
  try {
    const weather = await weatherByLocationName(location)
    return weather
  } catch (error) {
    return ERROR("An error occured when getting weather", 400)
  }
}

const getCurrentTimeByLocationName = async location => {
  try {
    const currentTime = await currentTimeByLocationName(location)
    return currentTime
  } catch (error) {
    return ERROR("An error occured when getting current time", 400)
  }
}

export { getWeatherByLocationName, getCurrentTimeByLocationName }
