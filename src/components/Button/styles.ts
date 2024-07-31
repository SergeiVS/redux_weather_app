import styled from "@emotion/styled"

import { colors } from "styles/colors"

interface StyledButtonProps {
  $isTransparent?: boolean
}

const getButtonColor = (
  disbled: boolean | undefined,
  $isTransparent: boolean | undefined,
) => {
  if ($isTransparent) {
    return colors.TRANSPARENT
  } else if (disbled) {
    return colors.DISABLED
  } else {
    return colors.BUTTON_BLUE
  }
}

const getButtonBorder = ($isTransparent: boolean | undefined) => {
  if ($isTransparent) {
    return "1px solid white"
  } else {
    return "none"
  }
}

export const StyledButton = styled("button")<StyledButtonProps>`
  height: 48px;
  width: 100%;
  border: ${({ $isTransparent }) => getButtonBorder($isTransparent)};
  border-radius: 50px;
  font-size: 20px;
  color: white;
  padding: 12px;

  background-color: ${({ disabled, $isTransparent }) =>
    getButtonColor(disabled, $isTransparent)};

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: gray;
  }
`

export const ButtonImg = styled("img")`
  width: 20px;
  height: 20px;
`
