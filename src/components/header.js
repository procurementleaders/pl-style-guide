import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { H1 } from "./../pages/typography"

const HeaderWrapper = styled.header`
  width: 100%;
  overflow-x: hidden;
  .header__inner {
    padding: 3.75rem 1.5rem;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
`

const PageTitle = styled(H1)`
  margin: 0;
`

const Header = ({ siteTitle, title }) => (
  <HeaderWrapper
    style={{
      background: `#f4f4f4`,
    }}
  >
    <div className="header__inner">
      <PageTitle>{title || siteTitle}</PageTitle>
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
