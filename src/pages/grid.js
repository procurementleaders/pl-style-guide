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

                <p>Wrapper</p>
                <CSS>width: 100%</CSS>

                <p>Inner</p>
                <CSS>
                  width: 100%; max-width: 128rem; margin: 0 auto; padding: 6rem
                  6.7rem;
                </CSS>

                <H2>Header</H2>
                <Container
                  style={{
                    border: "solid 1px red",
                    backgroundColor: "#f4f4f4",
                  }}
                >
                  <Inner
                    style={{
                      border: "solid 1px green",
                      flexDirection: "column",
                    }}
                  >
                    <H1>Page title</H1>
                    <SubHeader>Sub header text</SubHeader>
                  </Inner>
                </Container>

                <p>Wrapper</p>
                <CSS>width: 100%; background-color: #f4f4f4;</CSS>

                <p>Inner</p>
                <CSS>
                  width: 100%; max-width: 128rem; margin: 0 auto; padding: 6rem
                  6.7rem;
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
