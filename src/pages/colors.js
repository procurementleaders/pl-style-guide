import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import CSS from "../components/CSS"
import { H2, H3 } from "./typography"

export const ColorBlock = styled.div`
  width: 300px;
  margin-right: 30px;
  div {
    height: 100px;
    width: 100%;
    background-color: ${props => props.color};
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`
export const ColorBlocksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class Colors extends Component {
  render() {
    return (
      <Layout title="Typography">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Colors</H2>
                <ColorBlocksContainer>
                  <ColorBlock color="#ef7d25">
                    <H3>Orange</H3>
                    <CSS>background-color: '#ef7d25'</CSS>
                    <div>{"  "}</div>
                  </ColorBlock>
                  <ColorBlock color="#008e7f">
                    <H3>Green</H3>
                    <CSS>background-color: '#008e7f'</CSS>
                    <div>{"  "}</div>
                  </ColorBlock>
                  <ColorBlock color="#f4f4f4">
                    <H3>Light grey</H3>
                    <CSS>background-color: '#f4f4f4'</CSS>
                    <div>{"  "}</div>
                  </ColorBlock>
                  <ColorBlock color="#f1f1f1">
                    <H3>Mid grey</H3>
                    <CSS>background-color: '#f1f1f1'</CSS>
                    <div>{"  "}</div>
                  </ColorBlock>
                  <ColorBlock color="#d9d9d9">
                    <H3>Dark grey</H3>
                    <CSS>background-color: '#d9d9d9'</CSS>
                    <div>{"  "}</div>
                  </ColorBlock>
                  <ColorBlock color="#000000">
                    <H3>Black</H3>
                    <CSS>background-color: '#000000'</CSS>
                    <div>{"  "}</div>
                  </ColorBlock>
                  <ColorBlock color="#ffffff">
                    <H3>White</H3>
                    <CSS>background-color: '#ffffff'</CSS>
                    <div>{"  "}</div>
                  </ColorBlock>
                </ColorBlocksContainer>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Colors
