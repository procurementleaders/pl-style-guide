/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Navigation from "./Navigation"
import "./layout.css"

const Wrapper = styled.div`
  display: flex;

  main {
    flex: 1;
    padding: 0.9375rem;
  }
`

const Footer = styled.footer`
  display: flex;
  padding: 0.9375rem;
`

class Layout extends Component {
  handleChange = e => {
    const { name, value } = e.target
    return this.setState({ [name]: value })
  }

  render() {
    const { children, title } = this.props

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
            <Header title={title} siteTitle={data.site.siteMetadata.title} />
            <Helmet>
              <link
                href="https://fonts.googleapis.com/css?family=PT+Serif|Roboto:300,400,700"
                rel="stylesheet"
              />
            </Helmet>

            <Wrapper>
              <Navigation />
              <main>{children}</main>
            </Wrapper>

            <Footer>
              © {new Date().getFullYear()} -
              <a href="https://www.procurementleaders.com/my-pl">
                Procurement Leaders
              </a>
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
