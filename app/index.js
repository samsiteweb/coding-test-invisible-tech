import {
  currentTimAndWeatherByLocationName,
  currentTimAndWeatherByPostalCode
} from "./helpers"

import { VALIDATION, RESPONSE } from "./utils"
const { isValidInputArray, isLocation, isPostalCode } = VALIDATION
const { ERROR } = RESPONSE

const logCurrentTimeAndWeatherByLocationNameOrPostalCode = async inputArrayData => {
  if (!isValidInputArray(inputArrayData))
    return ERROR("Invalid input array, input must be an array of values", 400)

  inputArrayData.forEach(async element => {
    // Get current time and weather by location name
    if (isLocation(element)) {
      const location = element.toLowerCase().trim()
      const response = await currentTimAndWeatherByLocationName(location)
      console.log(response)
      return response
    }

    // Get current time and weather by postal code
    if (isPostalCode(element)) {
      const postalCode = element
      const response = await currentTimAndWeatherByPostalCode(postalCode)
      console.log(response)
      return response
    }
  })
}

const appEntry = async input => {
  await logCurrentTimeAndWeatherByLocationNameOrPostalCode(input)
}

export { appEntry, logCurrentTimeAndWeatherByLocationNameOrPostalCode }
