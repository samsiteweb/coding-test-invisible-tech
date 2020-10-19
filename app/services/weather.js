import { makeApiCall, locationUrl, postalCodeUrl } from "./http"
import { RESPONSE } from "../utils"

const { ERROR } = RESPONSE
const weatherByLocationName = async location => {
  try {
    const url = locationUrl(location)
    const { data } = await makeApiCall(url)
    return data
  } catch (error) {
    return ERROR("An Error Occured While getting weather")
  }
}

const weatherByPostalCode = async location => {
  try {
    const url = postalCodeUrl(location)
    const { data } = await makeApiCall(url)
    return data
  } catch (error) {
    return ERROR("An Error Occured While getting weather")
  }
}

export { weatherByLocationName, weatherByPostalCode }
