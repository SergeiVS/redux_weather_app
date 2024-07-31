import { useAppDispatch, useAppSelector } from "store/hooks"
import { useEffect } from "react"
import { v4 } from "uuid"

import { weatherAction, weatherSelectors } from "store/redux/weatherApp/weatherAppSlice"
import { WeatherObject } from "store/redux/weatherApp/types"

import { PageWrapper, DeleteButtonControl } from "./styles"

import Button from "components/Button/Button"
import WeatherCard from "components/WeatherCard/WeatherCard"

function Weathers() {
  const dispatch = useAppDispatch()
  const { } = useAppSelector(
  weatherSelectors.weatherState,
  )
  
 

  const deleteAllCards = () => {
    dispatch(weatherAction.deleteAllCards())
  }

  return (
    <PageWrapper>
      {/* {weatherCards.length > 0 && ()} */}
      <DeleteButtonControl>
        <Button
          name="Delete all cards"
          onClick={deleteAllCards}
          isTransparent={false}
        />
      </DeleteButtonControl>
    </PageWrapper>
  )
}

export default Weathers
