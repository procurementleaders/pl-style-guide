import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import CopyContentDiv from "../components/CopyContentDiv"
import CSS from "../components/CSS"
import { H2, H3 } from "./typography"

export const ColorBlock = styled.div`
  width: 300px;
  margin-right: 30px;
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
                  <ColorBlock>
                    <H3>Orange</H3>
                    <CopyContentDiv color="#ffffff" bgColor="#ef7d25" />
                    <CSS>background-color: '#ef7d25'</CSS>
                  </ColorBlock>
                  <ColorBlock>
                    <H3>Red</H3>
                    <CopyContentDiv color="#ffffff" bgColor="#e03a42" />
                    <CSS>background-color: '#e03a42'</CSS>
                  </ColorBlock>
                  <ColorBlock>
                    <H3>Green</H3>
                    <CopyContentDiv color="#ffffff" bgColor="#008e7f" />
                    <CSS>background-color: '#008e7f'</CSS>
                  </ColorBlock>
                  <ColorBlock>
                    <H3>Black</H3>
                    <CopyContentDiv color="#ffffff" bgColor="#000000" />
                    <CSS>background-color: '#000000'</CSS>
                  </ColorBlock>
                  <ColorBlock>
                    <H3>White</H3>
                    <CopyContentDiv
                      color="#333333"
                      bgColor="#ffffff"
                      borderColor="#eeeeee"
                    />
                    <CSS>background-color: '#ffffff'</CSS>
                  </ColorBlock>
                  <ColorBlock>
                    <H3>Light grey</H3>
                    <CopyContentDiv color="#333333" bgColor="#f4f4f4" />
                    <CSS>background-color: '#f4f4f4'</CSS>
                  </ColorBlock>
                  <ColorBlock>
                    <H3>Mid grey</H3>
                    <CopyContentDiv color="#333333" bgColor="#f1f1f1" />
                    <CSS>background-color: '#f1f1f1'</CSS>
                  </ColorBlock>
                  <ColorBlock>
                    <H3>Dark grey</H3>
                    <CopyContentDiv color="#333333" bgColor="#d9d9d9" />
                    <CSS>background-color: '#d9d9d9'</CSS>
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
