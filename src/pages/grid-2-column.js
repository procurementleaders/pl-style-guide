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
  h1 {
    margin: 0;
  }
`
export const FlexRow = styled.div`
  border: 1px solid #ccc;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

export const Columns = styled.div`
  width: 48.7%;
  margin-right: 2.6%;
  background-color: #f4f4f4;
  text-align: center;

  :nth-child(2n + 2) {
    margin-right: 0;
  }
`

class Grid2Columns extends Component {
  render() {
    return (
      <Layout title="Grid - 2 columns">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Grid 2 columns</H2>
                <Wrapper>
                  <div className="inner">
                    <FlexRow>
                      <Columns>
                        <Paragraph>Column 1</Paragraph>
                      </Columns>
                      <Columns>
                        <Paragraph>Column 2</Paragraph>
                      </Columns>
                    </FlexRow>
                  </div>
                </Wrapper>

                <H2>Row</H2>
                <H3>div</H3>
                <CSS>
                  {`display: flex;
                    width: 100%;`}
                </CSS>

                <H2>Column</H2>
                <H3>div</H3>
                <CSS>
                  {`width:48.7%;
                    margin-right: 2.6%;`}
                </CSS>
                <H3>:nth-child(2n + 2)</H3>
                <CSS>{`margin-right: 0;`}</CSS>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Grid2Columns
