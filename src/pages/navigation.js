import React, { Component } from "react"
import styled from "styled-components"
import { H2, H3 } from "./typography"
import Layout, { CTX } from "../components/layout"
import LogoImage from "../images/PL_Logo.svg"
import CSS from '../components/CSS'

const PrimaryNav = styled.nav`
  width: 100%;
  border: solid 1px #ccc;

  .inner {
    max-width: 128rem;
    margin: 0 auto;
    padding: 1rem 6.7rem;
    display: flex;
    align-content: center;
    align-items: center;
  }

  ol {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    float: left;
    padding-right: 3rem;
  }
`

const Logo = styled.div`
  svg {
    width: 117px;
    height: auto;
    margin-right: 3rem;
    vertical-align: middle;
  }
`
const RightNav = styled.div`
  float: right;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #000;
`

class Navigation extends Component {
  render() {
    return (
      <Layout title="Navigation">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Primary navigation</H2>
                <PrimaryNav>
                  <div className="inner">
                    <Logo>
                      <LogoImage />
                    </Logo>
                    <ol>
                      <li>Procurement Excellence</li>
                      <li>Category Management</li>
                      <li>Category Intelligence</li>
                      <li>Expert Network</li>
                      <li>Tools</li>
                      <li>Events</li>
                    </ol>

                    <RightNav >

                    </RightNav>

                  </div>
                </PrimaryNav>

                <H3>Navigation row wrapper</H3>
                <CSS>
                  {`width: 100%;
                    height: auto;
                    `}
                </CSS>

                <H3>Navigation inner</H3>

                <CSS>
                  {`width: ${1280 / baseFont}rem;
                    height: auto;
                    padding:  ${ 16 / baseFont}rem ${67 / baseFont}rem;
                    `}
                </CSS>

                <H3>Logo</H3>

                <Logo>
                  <LogoImage />
                </Logo>

                <CSS>
                  {`width: 117px;
                    height: auto;
                    margin-right: ${30 / baseFont}rem;
                    vertical-align: middle;`}
                </CSS>

                <H3>First level navigation link</H3>

                <CSS>
                  {`
                    font-size: ${15 / baseFont}rem;
                    font-family: 'Roboto', sans-serif;                 
                    font-weight: 300;
                  `}
                </CSS>

                <H3>Search</H3>

                <CSS>
                  {`
                    font-size: ${15 / baseFont}rem;
                    font-family: 'Roboto', sans-serif;                 
                    font-weight: 300;
                  `}
                </CSS>

                <H3>Avatar</H3>

                <CSS>
                  {`
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        border: 1px solid #cccccc;
                  `}
                </CSS>

                <H2>Footer</H2>

                <Footer>
                  <div className="inner" />
                </Footer>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Navigation
