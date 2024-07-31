import {} from "./types"
import {
  ButtonsContainer,
  City,
  Degrees,
  ResponseContainer,
  ResultContainer,
  WeatherCardContainer,
  WeatherPicture,
} from "./styles"
import Button from "../Button/Button"

function WeatherCard() {
  return (
    <WeatherCardContainer>
      <ResponseContainer>
        <ResultContainer>
          <Degrees>18</Degrees>
          <City>LA</City>
        </ResultContainer>
        <WeatherPicture src="https://png.pngtree.com/png-clipart/20230315/ourmid/pngtree-sun-cartoon-cute-doodle-summer-png-image_6646856.png"></WeatherPicture>
      </ResponseContainer>
      <ButtonsContainer>
        <Button name="Save" isTransparent/>
        <Button name="Delete" isTransparent/>
      </ButtonsContainer>
    </WeatherCardContainer>
  )
}

export default WeatherCard
