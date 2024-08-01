import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

import { WeatherAppSliceState, WeatherObject } from "./types"
import axios from "axios"
import { Alert } from "@mui/material"

const appWeatherInitialState: WeatherAppSliceState = {
  currentWeatherData: undefined,
  weather: [],
  error: undefined,
  isPending: false,
}

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: appWeatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (cityName: string) => {
        const APP_ID = "73a6b6af307bc742012b18f99bc9df73"
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`,
        )
        return response
      },
      {
        pending: (state: WeatherAppSliceState) => {
          state.error = undefined
          state.isPending = true
        },
        fulfilled: (state: WeatherAppSliceState, action) => {
          const id = v4()
          const temperature = action.payload.data.main.temp
          const iconCode = action.payload.data.weather[0].icon
          const city = action.payload.data.name
          state.isPending = false
          state.currentWeatherData = {
            id: id,
            temperature: temperature,
            iconCode: iconCode,
            city: city,
          }
        },
        rejected: (state: WeatherAppSliceState, action) => {
          state.error = action.error.message
          state.isPending = false
        },
      },
    ),
    saveWeatherCard: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<WeatherObject>) => {
        state.weather = [...state.weather, action.payload]
        state.currentWeatherData = undefined
      },
    ),
    deleteWeatherCard: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<string>) => {
        state.currentWeatherData = undefined
        state.weather = state.weather.filter((weaterCard: WeatherObject) => {
          return weaterCard.id !== action.payload
        })
      },
    ),
    deleteAllCards: create.reducer(() => appWeatherInitialState),
  }),
  selectors: {
    weatherState: (state: WeatherAppSliceState) => state,
  },
})

export const weatherAction = weatherAppSlice.actions

export const weatherSelectors = weatherAppSlice.selectors
