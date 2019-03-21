import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import { H2, H3 } from "./typography"
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

export const Card = styled.div`
  border-bottom-width: 0;
  width: 31.6%;
  img {
    width: 100%;
  }
  h3 {
    margin-top: 0;
  }

  a {
    color: #ef7d25;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    letter-spacing: 1px;
  }
`

const Spacer = styled.div`
  width: 2.6%;
  text-align: center;
  font-family: "Roboto", sans-serif;
`

export const CardInner = styled.div`
  background: #fff;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  min-height: 190px;
`
export const CardImageWrapper = styled.div`
  width: 100% !important;
  height: 100px;
  overflow: hidden;
  border-bottom: 1px solid #eee;
`
export const CardBody = styled.div`
  padding: 1.5rem;
`

class Cards extends Component {
  render() {
    return (
      <Layout title="Cards">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Cards</H2>
                <Container>
                  <Inner>
                    <Card>
                      <CardInner>
                        <CardImageWrapper>
                          <img src="https://www.procurementleaders.com/AcuCustom/Sitename/DAM/146/Trends-2019-cover_web_mth.jpg" />
                        </CardImageWrapper>
                        <CardBody>
                          <H3>Card title</H3>
                          <a href="#">READ MORE</a>
                        </CardBody>
                      </CardInner>
                    </Card>
                    <Spacer>
                      30px
                      <br />
                      2.6%
                    </Spacer>
                    <Card>
                      <CardInner>
                        <CardImageWrapper>
                          <img src="https://www.procurementleaders.com/AcuCustom/Sitename/DAM/146/Trends-2019-cover_web_mth.jpg" />
                        </CardImageWrapper>
                        <CardBody>
                          <H3>Card title</H3>
                          <a href="#">READ MORE</a>
                        </CardBody>
                      </CardInner>
                    </Card>
                    <Spacer>
                      30px
                      <br />
                      2.6%
                    </Spacer>
                    <Card>
                      <CardInner>
                        <CardImageWrapper>
                          <img src="https://www.procurementleaders.com/AcuCustom/Sitename/DAM/146/Trends-2019-cover_web_mth.jpg" />
                        </CardImageWrapper>
                        <CardBody>
                          <H3>Card title</H3>
                          <a href="#">READ MORE</a>
                        </CardBody>
                      </CardInner>
                    </Card>
                  </Inner>
                </Container>

                <p>Card</p>
                <CSS>border-bottom-width: 0; width: 31.6%;</CSS>

                <p>Spacing</p>
                <CSS>width: 30px;</CSS>
                <CSS>width: 2.6%;</CSS>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Cards
