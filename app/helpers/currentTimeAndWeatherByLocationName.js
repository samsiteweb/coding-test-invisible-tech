import {
  getWeatherByLocationName,
  getCurrentTimeByLocationName
} from "../controllers"
import { RESPONSE } from "../utils"

const { SUCCESS, ERROR } = RESPONSE

const currentTimAndWeatherByLocationName = async location => {
  try {
    const response = await getWeatherByLocationName(location)
    const currentTime = await getCurrentTimeByLocationName(location)
    const { weather, cod } = response
    if (response && cod === 200) {
      return SUCCESS(cod, weather, currentTime)
    } else {
      const {
        response: {
          data: { cod, message }
        }
      } = response
      return ERROR(message, cod)
    }
  } catch (error) {
    return ERROR(
      "Current time and weather of Location Could not be found, make sure you inputed a valid location",
      404
    )
  }
}

export { currentTimAndWeatherByLocationName }
