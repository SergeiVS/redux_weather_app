import { useAppDispatch, useAppSelector } from "store/hooks"
import Button from "components/Button/Button"
import { weatherAction } from "store/redux/weatherApp/weatherAppSlice"

import {
  ButtonsContainer,
  ButtonWrapper,
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
    setTimeout(() => alert("Weather card was deleted"), 500)
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
        {!weatherData.isSaved && (
          <ButtonWrapper>
            <Button name="Save" isTransparent onClick={onSave} />
          </ButtonWrapper>
        )}
        <ButtonWrapper>
          <Button name="Delete" isTransparent onClick={onDelete} />
        </ButtonWrapper>
      </ButtonsContainer>
    </WeatherCardContainer>
  )
}

export default WeatherCard
