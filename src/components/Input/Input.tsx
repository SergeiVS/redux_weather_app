import { InputProps } from "./types"
import { StyledInput, ErrorContainer } from "./styles"

function Input({
  id,
  name,
  type = "text",
  placeholder,
  disabled,
  error,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <StyledInput
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        $error={error}
        // value - это значение самого инпута, т.е то значение котрое введет потенциальный пользователь
        value={value}
        // onChange - функция, которая срабатывает, когда пользователь что-то вводит в инпут
        onChange={onChange}
      />
      {!!error && <ErrorContainer>{error}</ErrorContainer>}
    </>
  )
}

export default Input
