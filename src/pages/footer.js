import React, { Component } from "react"
import styled from "styled-components"
import { H2, H3, H4 } from "./typography"
import Layout, { CTX } from "../components/layout"
import CSS from '../components/CSS'
import LogoImg from "../images/pl-logo.svg"


const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #000;
`;

const InvertedPlLogo = styled.div`
    display:inline-block;
    margin-right: 3rem;
    svg{
        vertical-align: middle;
        height: auto;
        width: 117px;
        fill: #fff;
        path,
        polygon {
            fill: #000;
        }
        path.bg,
        polygon.bg{
            fill:#fff
        }
    }
`;

const FooterLink = styled.span`
    padding: .3rem 0;
    letter-spacing: .02em;
    color: #AAAAAA;
    display: inline-block;
    font-weight: 300;
    cursor: pointer;
    font-family: Roboto,sans-serif;
    font-size:1.4rem;
    :hover{
        color: #FFFFFF;
        text-decoration: underline;
    }
`;


class Footer extends Component {
    render() {
        return (
            <Layout title="Footer">
                <CTX.Consumer>
                    {({ baseFont }) => {
                        return (
                            <>

                                <H2>Footer</H2>

                                <FooterWrapper>
                                    <div className="inner" >
                                        <InvertedPlLogo >
                                            <LogoImg />
                                        </InvertedPlLogo>
                                        <FooterLink>Example link</FooterLink>
                                    </div>
                                </FooterWrapper>

                                <H3>Footer wrapper</H3>

                                <CSS>{`
                                    width: 100%;
                                    background-color: #000000;
                                `}</CSS>

                                <H3>Footer inner</H3>

                                <CSS>{`width: ${1280 / baseFont}rem;
                                    height: auto;
                                    padding:  ${ 16 / baseFont}rem ${67 / baseFont}rem;`}
                                </CSS>

                                <H3>Links</H3>
                                <H4>a</H4>
                                <CSS>{`text-decoration: none;
                                        padding: .3rem 0;
                                        letter-spacing: .02em;
                                        color: #AAAAAA;
                                        font-size:  ${ 14 / baseFont}rem;
                                        display: inline-block;
                                        font-weight: 300;`}
                                </CSS>
                                <H4>a:hover</H4>
                                <CSS>{`color: #FFFFFF;
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
