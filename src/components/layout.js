/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component, createContext } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Navigation from "./Navigation"
import "./layout.css"

export const CTX = createContext()

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`
const Main = styled.div`
  flex: 1;
  main {
    padding: 1.5rem;
    font-size: 1.4rem;
  }
`
const Footer = styled.footer`
  padding: 3.75rem 1.5rem;
  background-color: #000;

  .footer-inner {
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
    text-align: center;
  }

  a,
  p {
    color: #fff;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
  }
`

class Layout extends Component {
  state = {
    baseFont: 16,
  }

  componentDidMount() {
    const baseFont = localStorage.getItem("baseFont")
    if (baseFont) {
      this.setState({ baseFont })
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    localStorage.setItem(name, value)
    return this.setState({ [name]: value })
  }

  render() {
    const { children, title } = this.props
    const { baseFont } = this.state

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <link
                href="https://fonts.googleapis.com/css?family=PT+Serif|Roboto:300,400,700"
                rel="stylesheet"
              />
            </Helmet>

            <CTX.Provider value={{ baseFont }}>
              <Wrapper>
                <Navigation
                  changeBaseFont={this.handleChange}
                />
                <Main>
                  <Header title={title} siteTitle={data.site.siteMetadata.title} />
                  <main>
                    {children}
                  </main>
                </Main>
              </Wrapper>
            </CTX.Provider>

            <Footer>
              <div className="footer-inner">
                <p className="roboto">
                  © {new Date().getFullYear() + " - "}
                  <a href="https://www.procurementleaders.com/my-pl">
                    Procurement Leaders
                  </a>
                </p>
              </div>
            </Footer>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
