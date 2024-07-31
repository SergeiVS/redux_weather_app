import Input from "components/Input/Input"
import { ButtonContainer, InputFormContainer } from "./styles"
import Button from "components/Button/Button"
import * as Yup from "yup"
import { FormNames } from "./types"
import { useFormik } from "formik"
import { useAppDispatch } from "store/hooks"
import { weatherAction } from "store/redux/weatherApp/weatherAppSlice"

function InputForm() {
  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    [FormNames.CITY]: Yup.string().required("City name is missing"),
  })

  const formik = useFormik({
    initialValues: { [FormNames.CITY]: "" },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: values => {
      dispatch(weatherAction.getWeather(values[FormNames.CITY]))
    },
  })

  return (
    <InputFormContainer onSubmit={formik.handleSubmit}>
      <Input
        id="city"
        name={FormNames.CITY}
        placeholder="Colrado"
        value={formik.values[FormNames.CITY]}
        onChange={formik.handleChange}
      />
      <ButtonContainer>
        <Button name="Search" type="submit" />
      </ButtonContainer>
    </InputFormContainer>
  )
}
export default InputForm
