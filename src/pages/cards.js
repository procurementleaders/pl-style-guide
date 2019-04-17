import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import { H2, H3, H4 } from "./typography"
import CSS from "../components/CSS"

export const Container = styled.div`
  width: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  border: solid 1px #ccc;
`
export const Inner = styled.div`
  width: 100%;
  max-width: 128rem;
  margin: left;
  padding: 0;
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
    margin-bottom: 0;
    color: #ef7d25;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    letter-spacing: 1px;
  }
`

export const CardInner = styled.div`
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #cccccc;
  transition: all 0.3s ease;

  img {
    border-radius: 3px 3px 0 0;
  }

  :hover{
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`
export const CardImageWrapper = styled.div`
  width: 100% !important;
  height: 100px;
  overflow: hidden;
  border-bottom: 1px solid #eee;
`
export const CardBody = styled.div`
  padding: 1rem;
`

class Cards extends Component {
  render() {
    return (
      <Layout title="Cards">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Card</H2>
                <Container>
                  <Inner>
                    <Card>
                      <CardInner>
                        <CardImageWrapper>
                          <img
                            alt="card header"
                            src="https://www.procurementleaders.com/AcuCustom/Sitename/DAM/146/Trends-2019-cover_web_mth.jpg"
                          />
                        </CardImageWrapper>
                        <CardBody>
                          <H3>Card title</H3>
                          {/* eslint-disable-next-line */}
                          <a href="#">READ MORE</a>
                        </CardBody>
                      </CardInner>
                    </Card>
                  </Inner>
                </Container>

                <H3>Card Wrapper</H3>
                <H4>Wrapper</H4>
                <CSS>{`width: 31.6%;
                    background: #ffffff;
                    border: 1px solid #cccccc;

                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    -ms-border-radius: 3px;
                    -o-border-radius: 3px;
                    border-radius: 3px;

                    -webkit-transition: all 0.3s ease;
                    -o-transition: all 0.3s ease;
                    transition: all 0.3s ease;`}</CSS>
                <H4>Wrapper :hover</H4>

                <CSS>{`
                  -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  -moz-box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);

                  -webkit-transform: translateY(-4px);
                  -ms-transform: translateY(-4px);
                  -moz-transform: translateY(-4px);
                  -o-transform: translateY(-4px);
                  transform: translateY(-4px);

                  `}</CSS>

                <H3>Heading</H3>

                <H4>Heading Wrapper</H4>

                <CSS>
                  {`width: 100%;
                    -webkit-border-radius: 3px 3px 0 0;
                    -moz-border-radius: 3px 3px 0 0;
                    -ms-border-radius: 3px 3px 0 0;
                    -o-border-radius: 3px 3px 0 0;
                    border-radius: 3px 3px 0 0;
                    overflow: hidden;
                    position: relative;
                    height: 120px;`}
                </CSS>

                <H4>Image</H4>

                <CSS>
                  {`position: absolute;
                  top: -25%;
                  left: 0;
                  right:0;`}
                </CSS>

                <H3>Body</H3>
                <H4>Body Wrapper</H4>
                <CSS>
                  {`padding: ${10 / baseFont}rem;
                    width:100%;
                    box-sizing: border-box;`}
                </CSS>

                <H4>Title</H4>

                <CSS>
                  {`font-size: ${21 / baseFont}rem;
                    font-family: Roboto, sans-serif;
                    font-weight: 300;
                    margin: 0 0 ${10 / baseFont}rem;`}
                </CSS>

                <H4>Text</H4>

                <CSS>
                  {`font-size: ${16 / baseFont}rem;
                    font-family: Roboto, sans-serif;
                    font-weight: 300;
                    margin: 0 0 ${10 / baseFont}rem;
                    `}
                </CSS>

                <H4>Link</H4>

                <CSS>
                  {`color: #ef7d25;
                    font-weight: 700;
                    font-family: "Roboto",sans-serif;
                    font-size: ${12 / baseFont}rem;`}
                </CSS>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Cards
