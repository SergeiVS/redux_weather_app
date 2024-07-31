import styled from "@emotion/styled"

import { colors } from "../../src/styles/colors"

interface StyledInputProps {
  $error: string | undefined
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 48px;
  border: 1px solid white;
  border-radius: 40px;
  padding: 20px;
  outline: none;
  background: rgba(255, 255, 255, 0.3);

  &::placeholder {
    color: white;
    font-size: 16px;
  }
`

export const ErrorContainer = styled.div`
  color: ${colors.ERROR};
  font-size: 18px;
`
