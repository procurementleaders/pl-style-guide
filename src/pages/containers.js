import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import { Paragraph, H2, H3 } from "./typography"
import CSS from "../components/CSS"

export const Container = styled.div`
  width: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  border: solid 1px #ccc;
  .inner {
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
    padding: 6rem 6.7rem;
    border: solid 1px #ccc;
  }
`
export const Inner = styled.div`
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  padding: 6rem 6.7rem;
  display: flex;
  h1 {
    margin: 0;
  }
`

class Typography extends Component {
  render() {
    return (
      <Layout title="Containers">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Containers</H2>
                <Wrapper>
                  <div className="inner">
                    <Paragraph>Inner</Paragraph>
                  </div>
                </Wrapper>

                <H3>Wrapper</H3>
                <CSS>width: 100%</CSS>

                <H3>Inner</H3>
                <CSS>
                  {`width: 100%;
                  max-width: ${1280 / baseFont}rem;
                  margin: 0 auto;
                  padding: ${60 / baseFont}rem ${67 / baseFont}rem;`}
                </CSS>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Typography
