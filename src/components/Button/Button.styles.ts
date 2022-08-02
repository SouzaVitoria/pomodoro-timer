import styled from "styled-components"

export type ButtonVariant = "primary" | "secondary";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 80px;
  height: 30px;

  ${props => `background-color: ${buttonVariants[props.variant]}`}
`