import React, { Component } from "react"
import styled from "styled-components"
import { H2, H3 } from "./typography"
import Layout, { CTX } from "../components/layout"
import CSS from '../components/CSS'
import LogoImg from "../images/pl-logo.svg"


const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #000;
  
`
const InvertedPlLogo = styled.div`
    display:inline-block;
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
`

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
                                padding:  ${ 16 / baseFont}rem ${67 / baseFont}rem;
                                `}</CSS>
                            </>
                        )
                    }}
                </CTX.Consumer>
            </Layout>
        )
    }
}

export default Footer
