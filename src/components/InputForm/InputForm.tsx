import * as Yup from "yup"
import { useFormik } from "formik"

import { useAppDispatch, useAppSelector } from "store/hooks"
import { weatherAction } from "store/redux/weatherApp/weatherAppSlice"
import { weatherSelectors } from "store/redux/weatherApp/weatherAppSlice"
import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { ButtonContainer, InputControlForm, InputFormContainer } from "./styles"
import { FormNames } from "./types"

function InputForm() {
  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    [FormNames.CITY]: Yup.string().required("City name is missing"),
  })

  const formik = useFormik({
    initialValues: { [FormNames.CITY]: "" },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      dispatch(weatherAction.getWeather(values[FormNames.CITY]))
      helpers.resetForm()
    },
  })

  const { isPending } = useAppSelector(weatherSelectors.weatherState)

  return (
    <InputFormContainer onSubmit={formik.handleSubmit}>
      <InputControlForm>
        <Input
          id="city"
          name={FormNames.CITY}
          placeholder="Colorado"
          value={formik.values[FormNames.CITY]}
          onChange={formik.handleChange}
          error={formik.errors[FormNames.CITY]}
        />
      </InputControlForm>
      <ButtonContainer>
        <Button name="Search" type="submit" disabled={isPending} />
      </ButtonContainer>
    </InputFormContainer>
  )
}
export default InputForm
