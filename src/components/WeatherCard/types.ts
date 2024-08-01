import { WeatherObject } from "store/redux/weatherApp/types"

export interface WeatherDataProps {
  weatherData: WeatherObject
  isSaved: boolean
}
