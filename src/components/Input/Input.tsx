import { InputProps } from "./types"
import { StyledInput, ErrorContainer, InputWrapper } from "./styles"

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
    <InputWrapper>
      <StyledInput
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        $error={error}
        value={value}
        onChange={onChange}
      />
      {!!error && <ErrorContainer>{error}</ErrorContainer>}
    </InputWrapper>
  )
}

export default Input
