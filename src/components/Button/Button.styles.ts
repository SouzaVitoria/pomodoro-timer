import styled, { css } from "styled-components"

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

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /* ${props => css`background-color: ${buttonVariants[props.variant]}`} */
`