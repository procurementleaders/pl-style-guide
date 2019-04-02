import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import CSS from "../components/CSS"

export const H2 = styled.h2`
  font-size: 3.2rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`

class Design extends Component {
  render() {
    return (
      <Layout title="Typography">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Design</H2>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Design
