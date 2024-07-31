export interface WeatherAppSliceState {
  weather: WeatherObject[]
  error: string | undefined
}

export interface WeatherObject {
  id: string
  temperature: number
  iconCode: string
  city: string
}
