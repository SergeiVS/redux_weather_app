import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 709px;
  height: 220px;
  border-radius: 40px;
  padding: 36px;
  gap: 20px;
  outline: none;
  background: ${colors.WEATHER_CARD_BACKGROUND};
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`

export const ResponseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 150px;
`

export const ResultContainer = styled.div``

export const Degrees = styled.p`
  font-size: 57px;
  font-weight: bold;
`
export const City = styled.p`
  font-size: 20px;
`

export const WeatherPicture = styled.img`
  height: 74px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 95px;
  padding-left: 152px;
  padding-right: 152px;
`
export const ButtonWrapper = styled.div`
  width: 150px;
`
