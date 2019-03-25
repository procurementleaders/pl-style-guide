import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import { Paragraph, H1, H2, H3, SubHeader } from "./typography"
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
  h1{
    margin:0;
  }
`

class Typography extends Component {
  render() {
    return (
      <Layout title="Grid">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Container</H2>
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

                <H2>Header</H2>
                <Container
                  style={{
                    border: "1px solid #ccc",
                    backgroundColor: "#f4f4f4",
                  }}
                >
                  <Inner
                    style={{

                      flexDirection: "column",
                    }}
                  >
                    <H1>Page title</H1>
                    <SubHeader>Sub header text</SubHeader>
                  </Inner>
                </Container>

                <H3>Wrapper</H3>
                <CSS>
                  {`width: 100%;
                  background-color: #f4f4f4;`}
                </CSS>

                <H3>Inner</H3>
                <CSS>
                  {`width: 100%;
                  max-width: ${1280 / baseFont}rem;
                  margin: 0 auto;
                  padding: ${60 / baseFont}rem ${67 / baseFont}rem;`}
                </CSS>

                <H3>h1</H3>
                <CSS>
                  {`margin: 0;`}
                </CSS>
                <H3>p</H3>
                <CSS>
                  {`margin-top: ${12 / baseFont}rem;
                  max-width: ${852 / baseFont}rem;
                  font-size: ${16 / baseFont}rem;`}
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
