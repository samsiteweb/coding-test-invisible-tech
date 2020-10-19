import { config } from "dotenv"
config()

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

export { OPEN_WEATHER_API_KEY }
