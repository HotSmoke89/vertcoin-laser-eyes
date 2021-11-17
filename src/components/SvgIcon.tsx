import React from "react"
import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface SvgIconProps {
  iconKey: string
}

const renderIconKey = (iconKey: string) => {
  switch (iconKey) {
	case "vertcoin":
      return "\\e978"
	case "discord":
      return "\\e979"
    case "twitter":
      return "\\e900"
    case "telegram":
      return "\\e901"
    case "instagram":
      return "\\e905"
    case "download":
      return "\\e904"
    case "photo":
      return "\\e902"
    case "share":
      return "\\e903"
    case "github":
      return "\\f09b"
    default:
      return ""
  }
}

const Icon = styled.i<SvgIconProps>`
  font-family: "icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  font-size: ${rem(24)};

  &:before {
    content: ${(props) => `"${renderIconKey(props.iconKey)}"`};
  }
`

const SvgIcon: React.FC<SvgIconProps> = ({ iconKey, ...props }: SvgIconProps) => {
  return <Icon iconKey={iconKey} {...props} />
}

export default SvgIcon
