import React, { Component } from "react"
import styled from "styled-components"
import { H2 } from "./typography"
import Layout, { CTX } from "../components/layout"
import Logo from "../images/PL_Logo.svg"

const PrimaryNav = styled.nav`
  width: 100%;
  border-bottom: solid 1px #ccc;

  .inner {
    max-width: 128rem;
    margin: 0 auto;
    padding: 2.5rem 6.7rem;
    display: flex;
    align-content: center;
    align-items: center;
  }

  svg {
    width: 117px;
    height: auto;
    margin-right: 3rem;
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
                    <Logo />

                    <ol>
                      <li>Procurement Excellence</li>
                      <li>Category Management</li>

                      <li>Category Intelligence</li>
                      <li>Expert Network</li>
                      <li>Tools</li>
                      <li>Events</li>
                    </ol>
                  </div>
                </PrimaryNav>

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
