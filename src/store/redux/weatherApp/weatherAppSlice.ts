import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { WeatherAppSliceState } from "./types"
import axios from "axios"

const appWeatherInitialState: WeatherAppSliceState = {
  weather: [],
  error: undefined,
}

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: appWeatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (payload: any) => {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}",
        )
        return response
      },
      {
        pending: (state: WeatherAppSliceState) => {
          state.error = undefined
        },
        fulfilled: (state: WeatherAppSliceState, action) => {},
        rejected: (state: WeatherAppSliceState, action) => {
          state.error = action.error.message
        },
      },
    ),
    saveWeatherCard: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<string>) => {},
    ),
    deleteWeatherCard: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<string>) => {},
    ),
    deleteAllCards: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<string>) => {},
    ),
  }),
  selectors: {},
})
