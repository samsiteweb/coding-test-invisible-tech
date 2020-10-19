import {
  getCurrentTimeByPostalCode,
  getWeatherByPostalCode
} from "../controllers"
import { RESPONSE } from "../utils"

const { SUCCESS, ERROR } = RESPONSE

const currentTimAndWeatherByPostalCode = async postalCode => {
  try {
    const response = await getWeatherByPostalCode(postalCode)
    const currentTime = await getCurrentTimeByPostalCode(postalCode)
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
      "Current time and weather of Postal Code Could not be found, make sure you inputed a valid postal code",
      404
    )
  }
}

export { currentTimAndWeatherByPostalCode }
