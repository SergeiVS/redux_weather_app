import Button from "components/Button/Button"

import {
  ButtonsContainer,
  City,
  Degrees,
  ResponseContainer,
  ResultContainer,
  WeatherCardContainer,
  WeatherPicture,
} from "./styles"
import { WeatherDataProps } from "./types"

function WeatherCard(weatherData: WeatherDataProps) {
  const temperature: number = Math.round(
    weatherData.weatherData.temperature - 273.15,
  )

  const URL_PICTURE = `http://openweathermap.org/img/w/${weatherData.weatherData.iconCode}.png`

  return (
    <WeatherCardContainer>
      <ResponseContainer>
        <ResultContainer>
          <Degrees>{temperature}°</Degrees>
          <City>{weatherData.weatherData.city}</City>
        </ResultContainer>
        <WeatherPicture src="URL_PICTURE"></WeatherPicture>
      </ResponseContainer>
      <ButtonsContainer>
        <Button name="Save" isTransparent />
        <Button name="Delete" isTransparent />
      </ButtonsContainer>
    </WeatherCardContainer>
  )
}

export default WeatherCard
