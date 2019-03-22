import React, { Component } from "react"
import styled from "styled-components"
import { H2, H3 } from "./typography"
import Layout, { CTX } from "../components/layout"
import CSS from '../components/CSS'


const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #000;
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
                                    <div className="inner" />
                                </FooterWrapper>

                                <H3>Footer wrapper</H3>

                                <CSS>{`
                                            width: 100%;
                                            background-color: #000000;
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
