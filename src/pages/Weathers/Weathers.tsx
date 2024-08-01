import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherAction,
  weatherSelectors,
} from "store/redux/weatherApp/weatherAppSlice"
import { WeatherObject } from "store/redux/weatherApp/types"
import Button from "components/Button/Button"
import WeatherCard from "components/WeatherCard/WeatherCard"

import { PageWrapper, DeleteButtonControl } from "./styles"

function Weathers() {
  const dispatch = useAppDispatch()
  const { weather } = useAppSelector(weatherSelectors.weatherState)

  const weatherCards = weather.map((weatherObject: WeatherObject) => (
    <WeatherCard weatherData={weatherObject} isSaved={true} />
  ))

  const deleteAllCards = () => {
    dispatch(weatherAction.deleteAllCards())
  }

  return (
    <PageWrapper>
      {weatherCards}
      {weather.length > 0 && (
        <DeleteButtonControl>
          <Button
            name="Delete all cards"
            onClick={deleteAllCards}
            isTransparent={false}
          />
        </DeleteButtonControl>
      )}
    </PageWrapper>
  )
}

export default Weathers
