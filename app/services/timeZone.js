import cityTimeZone from "city-timezones"
import postalCodeToTimeZone from "zipcode-to-timezone"
const { lookupViaCity } = cityTimeZone
const { lookup } = postalCodeToTimeZone

const timeZoneByLocationName = async location => {
  const response = lookupViaCity(location)
  return response && Array.isArray(response) && response.length > 0
    ? response[0].timezone
    : ""
}

const timeZoneByPostalCode = async postalCode => {
  const response = lookup(postalCode)
  return response ? response : ""
}

export { timeZoneByLocationName, timeZoneByPostalCode }
