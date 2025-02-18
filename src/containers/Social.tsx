import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import SvgIcon from "../components/SvgIcon"
import Dropdown from "../components/Dropdown"

/**
 * Types
 */
interface Props {}
interface LinkProps {
  href?: string
  target?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray};

  span {
    margin: 0 ${rem(5)};
  }

  a {
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media all and (max-width: 915px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`

const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(5)};
`

const Social: React.FC<Props> = () => {
  return (
    <Wrapper>
      <span>
        {"Powered by Vertcoin Community "}
      </span>
      <SocialLink href="https://discord.gg/vertcoin" target="_blank" rel="noreferrer">
        <SvgIcon iconKey="discord" />
      </SocialLink>
	  <SocialLink href="https://vertcoin.org" target="_blank" rel="noreferrer">
        <SvgIcon iconKey="vertcoin" />
      </SocialLink>
      <SocialLink href="https://github.com/HotSmoke89/vertcoin-laser-eyes" target="_blank" rel="noreferrer">
        <SvgIcon iconKey="github" />
      </SocialLink>
    </Wrapper>
  )
}

export default Social
