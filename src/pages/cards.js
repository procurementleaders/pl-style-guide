import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import { H2, H3, H4 } from "./typography"
import CSS from "../components/CSS"
import IconSvg from "../images/icons/pro-excel/pe-Talent.svg"

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
  width: 31.6%;
`

export const CardInner = styled.div`
  border-radius: 3px;
  border: 1px solid #cccccc;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }

  h3 {
    margin-top: 0;

  }

  h3:hover{
    text-decoration: underline;
    color: #ef7d25;
    cursor: pointer;
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

  a:hover {
    text-decoration: underline;
  }

  img {
    border-radius: 3px 3px 0 0;
  }

  :hover{
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transform: translateY(-4px);
  }
`

export const CardPEF = styled.div`
  width: 31.6%;
`

export const CardInnerPEF = styled.div`
  background-color: #f4f4f4;
  border-radius: 3px;
  border: 1px solid #cccccc;
  border-bottom-color: #ef7d25;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;

  svg{
    width: 26px;
    height: 28px;
    float: left;
    margin-right: 10px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  h3:hover{
    text-decoration: underline;
    color: #ef7d25;
    cursor: pointer;
  }

  ul{
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
    list-style: none;
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

  a:hover{
    text-decoration: underline;
  }

  ul li a{
    font-size: 1.6rem;
    color: #000000;
    font-weight: 400;
    letter-spacing: 0;
    margin-bottom: 1rem;
    display:inline-block;
  }

  ul li a:hover{
    text-decoration: underline;
    color: #000000;
  }

  :hover{
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
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
                          <a href="#">READ MORE</a>
                        </CardBody>
                      </CardInner>
                    </Card>
                  </Inner>
                </Container>

                <H3>Card Wrapper</H3>
                <H4>Wrapper</H4>
                <CSS>{`width: 31.6%;
                    `}</CSS>

                <H4>Card Inner</H4>
                <CSS>{`
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
                <H4>Card Inner :hover</H4>

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

                <H4>Title :hover</H4>

                <CSS>
                  {`color: #ef7d25;
                    text-decoration: underline;`}
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



                <H2>Card PEF</H2>
                <Container style={{ paddingTop: '8px' }}>
                  <Inner >
                    <CardPEF>
                      <CardInnerPEF>
                        <CardBody>
                          <H3>
                            <IconSvg />
                            Card title</H3>
                          <ul>
                            <li>
                              <a href="#">Category Intelligence &amp; Planning</a>
                            </li>
                            <li>
                              <a href="#">Category Strategy Development</a>
                            </li>
                            <li>
                              <a href="#">Outsourcing</a>
                            </li>
                          </ul>
                          <a href="#">GO TO TOPIC</a>
                        </CardBody>
                      </CardInnerPEF>
                    </CardPEF>
                  </Inner>
                </Container>

                <H3>PEF Card Wrapper</H3>
                <H4>Wrapper</H4>
                <CSS>{`width: 31.6%;
                    `}</CSS>

                <H4>PEF Card Inner</H4>
                <CSS>{`
                    background: #f4f4f4;
                    border: 1px solid #cccccc;
                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    -ms-border-radius: 3px;
                    -o-border-radius: 3px;
                    border-radius: 3px;
                    -webkit-transition: all 0.3s ease;
                    -o-transition: all 0.3s ease;
                    transition: all 0.3s ease;`}</CSS>
                <H4>PEF Card Inner :hover</H4>

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



                <H4>Title PEF Card</H4>

                <CSS>
                  {`font-size: ${21 / baseFont}rem;
                    font-family: Roboto, sans-serif;
                    font-weight: 300;
                    margin: 0 0 ${10 / baseFont}rem;`}
                </CSS>

                <H4>Title :hover</H4>

                <CSS>
                  {`color: #ef7d25;
                    text-decoration: underline;`}
                </CSS>

                <H4>PEF ul</H4>

                <CSS>
                  {`padding: 0;
                    margin-top: 0;
                    margin-bottom: 1rem;
                    list-style: none;
                  `}
                </CSS>

                <H4>PEF ul li a</H4>

                <CSS>
                  {`color: #000000;
                    font-size: 1.6rem;
                    font-weight: 400;
                  `}
                </CSS>

                <H4>PEF ul li a:hover</H4>

                <CSS>
                  {`color: #000000;
                    text-decoration: underline;
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
