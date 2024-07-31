import { useAppDispatch, useAppSelector } from "store/hooks"
import Button from "components/Button/Button"
import {
  weatherAction,
  weatherSelectors,
} from "store/redux/weatherApp/weatherAppSlice"

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
  const dispatch = useAppDispatch()
  const temperature: number = Math.round(
    weatherData.weatherData.temperature - 273.15,
  )

  const onSave = () => {
    dispatch(weatherAction.saveWeatherCard(weatherData.weatherData))
    alert("Weather card was saved")
  }

  const onDelete = () => {
    dispatch(weatherAction.deleteWeatherCard(weatherData.weatherData.id))
    alert("Weather card was deleted")
  }
  const URL_PICTURE = `http://openweathermap.org/img/w/${weatherData.weatherData.iconCode}.png`

  return (
    <WeatherCardContainer>
      <ResponseContainer>
        <ResultContainer>
          <Degrees>{temperature}°</Degrees>
          <City>{weatherData.weatherData.city}</City>
        </ResultContainer>
        <WeatherPicture src={URL_PICTURE}></WeatherPicture>
      </ResponseContainer>
      <ButtonsContainer>
        <Button name="Save" isTransparent onClick={onSave} />
        <Button name="Delete" isTransparent onClick={onDelete} />
      </ButtonsContainer>
    </WeatherCardContainer>
  )
}

export default WeatherCard
