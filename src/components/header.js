import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { H1 } from "./../pages/typeography"

const HeaderWrapper = styled.header`
  .header__inner {
    padding: 3.75rem 4.1875rem;
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
  }
`

const Header = ({ siteTitle, title }) => (
  <HeaderWrapper
    style={{
      background: `#f4f4f4`,
    }}
  >
    <div className="header__inner">
      <H1>{title || siteTitle}</H1>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
