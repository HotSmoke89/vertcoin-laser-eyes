import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface ButtonProps {}

const Button = styled.button<ButtonProps>`
  padding: ${rem(16)} ${rem(36)};
  border-radius: ${rem(16)};
  position: relative;
  letter-spacing: 0;
  line-height: 1;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${(props) => rem(props.theme.fontSize.lead)};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.dark};
  transition: background-color ${(props) => props.theme.transition.base};
  appearance: none;
  cursor: pointer;
  outline: none !important;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  i {
    font-size: ${rem(48)};
    margin: ${rem(-7)} ${rem(15)} ${rem(-7)} ${rem(-15)};
  }

  i,
  span {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
  }

  @media all and (max-width: 580px) {
    border-radius: 12px;
    padding: 10px 16px;
    width: 100%;
    font-size: 14px;
    line-height: normal;

    i {
      font-size: 32px;
    }
  }
`

export default Button
