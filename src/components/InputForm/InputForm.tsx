import Input from "components/Input/Input"
import { ButtonContainer, InputFormContainer } from "./styles"
import Button from "components/Button/Button"

function InputForm() {
  return (
    <InputFormContainer>
      <Input id="city" name="city" placeholder="Colrado"/>
      <ButtonContainer>
        <Button name="Search" />
      </ButtonContainer>
    </InputFormContainer>
  )
}
export default InputForm
