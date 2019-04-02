import React, { Component } from "react"
import styled from "styled-components"
import { H2, H3, H4 } from "./typography"
import Layout, { CTX } from "../components/layout"
import CSS from "../components/CSS"
import LogoImg from "../images/pl-logo.svg"
import Twitter from "../images/icons/social/social-twitter.svg"
import LinkedIn from "../images/icons/social/social-linkedin.svg"

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #000;
`

const InvertedPlLogo = styled.div`
  display: block;
  margin-right: 3rem;
  svg {
    vertical-align: middle;
    height: auto;
    width: 117px;
    fill: #fff;
    path,
    polygon {
      fill: #000;
    }
    path.bg,
    polygon.bg {
      fill: #fff;
    }
  }
`

const Social = styled.div`
  width: 200px;
  background-color: #000;
  margin-top: 2rem;

  a {
    color: #cccccc;
    cursor: pointer;
    display: block;
    line-height: 40px;

    svg {
      cursor: pointer;
      fill: #cccccc;
      width: 26px;
      height: 26px;
      margin: 0 6px 0 0;
      vertical-align: middle;
      transition: all 0.3s ease;
    }

    :hover span {
      color: #ffffff;
    }

    :hover svg {
      fill: #ffffff;
    }
  }
`

const FooterSectionTitle = styled.p`
  color: #ffffff;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  width: 100%;
  margin-top: 0;
  margin-bottom: 1.6rem;
`

export const Columns4 = styled.div`
  width: 25%;
  margin-right: 2.6%;
  text-align: left;

  :last-child {
    margin-right: 0;
  }
`

const FooterLink = styled.a`
  padding: 0.3rem 0;
  letter-spacing: 0.02em;
  color: rgb(170, 170, 170);
  display: inline-block;
  font-weight: 300;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  width: 100%;
  :hover {
    color: #ffffff;
    text-decoration: underline;
  }
`

class Footer extends Component {
  render() {
    return (
      <Layout title="Footer">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Example</H2>

                <FooterWrapper>
                  <div className="inner">
                    <Columns4>
                      <InvertedPlLogo>
                        <LogoImg />
                      </InvertedPlLogo>

                      <Social>
                        <a
                          href="https://twitter.com/procurementldrs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter />
                          <span>ProcurementLDRS</span>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/procurement-leaders---global-intelligence-network/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedIn />
                          <span>Procurement Leaders</span>
                        </a>
                      </Social>
                    </Columns4>
                    <Columns4>
                      <FooterSectionTitle>About</FooterSectionTitle>
                      <FooterLink>Example link</FooterLink>
                      <FooterLink>Example link</FooterLink>
                      <FooterLink>Example link</FooterLink>
                    </Columns4>
                    <Columns4>
                      <FooterSectionTitle>About</FooterSectionTitle>
                      <FooterLink>Example link</FooterLink>
                      <FooterLink>Example link</FooterLink>
                      <FooterLink>Example link</FooterLink>
                    </Columns4>
                    <Columns4>
                      <FooterSectionTitle>About</FooterSectionTitle>
                      <FooterLink>Example link</FooterLink>
                      <FooterLink>Example link</FooterLink>
                      <FooterLink>Example link</FooterLink>
                    </Columns4>
                  </div>
                </FooterWrapper>

                <H3>Footer wrapper</H3>

                <CSS>
                  {`width: 100%;
                    background-color: #000000;`}
                </CSS>

                <H3>Footer inner</H3>

                <CSS>
                  {`width: ${1280 / baseFont}rem;
                    height: auto;
                    padding:  ${16 / baseFont}rem ${67 / baseFont}rem;`}
                </CSS>

                <H3>Links</H3>
                <H4>a</H4>
                <CSS>
                  {`text-decoration: none;
                    padding: .3rem 0;
                    letter-spacing: .02em;
                    color: #aaaaaa;
                    font-size:  ${14 / baseFont}rem;
                    display: inline-block;
                    font-weight: 300;`}
                </CSS>
                <H4>a:hover</H4>
                <CSS>
                  {`color: #ffffff;
                    text-decoration: underline;`}
                </CSS>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Footer
