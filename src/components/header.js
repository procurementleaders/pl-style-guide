import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { H1 } from "./../pages/typography"

const HeaderWrapper = styled.header`
  .header__inner {
    padding: 3.75rem 4.1875rem;
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
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
