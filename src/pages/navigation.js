import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"

class Navigation extends Component {
  render() {
    return (
      <Layout title="Navigation">
        <CTX.Consumer>
          {({ baseFont }) => {
            return <>Icons</>
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Navigation
