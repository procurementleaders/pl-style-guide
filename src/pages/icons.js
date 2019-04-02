import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"
import Layout, { CTX } from "../components/layout"
import { H2, H3, H4 } from "./typography"
import CSS from "../components/CSS"
import SVGCode from "../components/SVGCode"

const GroupWrapper = styled.section`
  a {
    display: block-inline;
    margin-right: 10px;
    border: 1px solid #ccc;
    padding: 4px 10px;
    border-radius: 3px;

    :hover {
      text-decoration: none;
      background-color: #f4f4f4;
    }
  }
`

const RowIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  h2 {
    width: 100%;
  }
`

const IconWrapper = styled.div`
  width: 10%;
  float: left;
  border: solid 1px #ccc;
  padding: 1.5rem;
  border: solid 1px #ccc;
  padding: 1rem;
  margin: 1rem;
  border-radius: 3px;
  h3 {
    margin-top: 0;
    text-transform: Capitalize;
    font-size: 1.6rem;
  }
  img {
    width: 100%;
    max-width: 40px;
    height: auto;
    margin: 1rem 0;
  }
`

const SectionTitle = styled.p`
  color: #ef7d25;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  margin: 0;
  letter-spacing: 2px;
`

class Icons extends Component {
  render() {
    return (
      <Layout title="Icons">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <GroupWrapper>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://s3.eu-west-2.amazonaws.com/pl-public-assets/icons/png-pl-icon-v1.rar"
                  >
                    Download all PNG icons
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://s3.eu-west-2.amazonaws.com/pl-public-assets/icons/svg-pl-icon-v1.rar"
                  >
                    Download all SVG icons
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://s3.eu-west-2.amazonaws.com/pl-public-assets/icons/ai-pl-icon-v1.rar"
                  >
                    Download all AI icons
                  </a>
                  <StaticQuery
                    query={graphql`
                      query {
                        allFile(
                          filter: {
                            extension: { eq: "svg" }
                            name: {
                              regex: "/^ci-|^pe-|^en-|^company-|^profile-|^social-/"
                            }
                          }
                        ) {
                          edges {
                            node {
                              name
                              publicURL
                            }
                          }
                        }
                      }
                    `}
                    render={data => {
                      const ciIcons = data.allFile.edges.filter(
                        item => String(item.node.name).substr(0, 3) === "ci-"
                      )
                      const peIcons = data.allFile.edges.filter(
                        item => String(item.node.name).substr(0, 3) === "pe-"
                      )
                      const profileIcons = data.allFile.edges.filter(
                        item =>
                          String(item.node.name).substr(0, 8) === "profile-"
                      )
                      const companyIcons = data.allFile.edges.filter(
                        item =>
                          String(item.node.name).substr(0, 8) === "company-"
                      )
                      const enIcons = data.allFile.edges.filter(
                        item => String(item.node.name).substr(0, 3) === "en-"
                      )

                      const socialIcons = data.allFile.edges.filter(
                        item =>
                          String(item.node.name).substr(0, 7) === "social-"
                      )

                      return (
                        <>
                          <RowIcon>
                            <H2>Procurement Excellence icons</H2>
                            {peIcons.map(item => {
                              return (
                                <IconWrapper key={item.node.name}>
                                  <img
                                    src={item.node.publicURL}
                                    alt={item.node.name}
                                  />
                                  <H3>
                                    {item.node.name
                                      .substr(3)
                                      .split("-")
                                      .map((part, index) => {
                                        if (
                                          index !==
                                          item.node.name.split("-").length
                                        ) {
                                          return (
                                            <span key={part}>{`${part} `}</span>
                                          )
                                        }
                                        return <span key={part}>{part}</span>
                                      })}
                                  </H3>
                                </IconWrapper>
                              )
                            })}
                          </RowIcon>

                          <RowIcon>
                            <H2>Category Intelligence icons</H2>
                            {ciIcons.map(item => {
                              return (
                                <IconWrapper key={item.node.name}>
                                  <img
                                    src={item.node.publicURL}
                                    alt={item.node.name}
                                  />
                                  <H3>
                                    {item.node.name
                                      .substr(3)
                                      .split("-")
                                      .map((part, index) => {
                                        if (
                                          index !==
                                          item.node.name.split("-").length
                                        ) {
                                          return (
                                            <span key={part}>{`${part} `}</span>
                                          )
                                        }
                                        return <span key={part}>{part}</span>
                                      })}
                                  </H3>
                                </IconWrapper>
                              )
                            })}
                          </RowIcon>

                          <RowIcon>
                            <H2>Expert Network icons</H2>
                            {enIcons.map(item => {
                              return (
                                <IconWrapper key={item.node.name}>
                                  <img
                                    src={item.node.publicURL}
                                    alt={item.node.name}
                                  />
                                  <H3>
                                    {item.node.name
                                      .substr(3)
                                      .split("-")
                                      .map((part, index) => {
                                        if (
                                          index !==
                                          item.node.name.split("-").length
                                        ) {
                                          return (
                                            <span key={part}>{`${part} `}</span>
                                          )
                                        }
                                        return <span key={part}>{part}</span>
                                      })}
                                  </H3>
                                </IconWrapper>
                              )
                            })}
                          </RowIcon>
                          <RowIcon>
                            <H2>Company icons</H2>
                            {companyIcons.map(item => {
                              return (
                                <IconWrapper key={item.node.name}>
                                  <img
                                    src={item.node.publicURL}
                                    alt={item.node.name}
                                  />
                                  <H3>
                                    {item.node.name
                                      .substr(8)
                                      .split("-")
                                      .map((part, index) => {
                                        if (
                                          index !==
                                          item.node.name.split("-").length
                                        ) {
                                          return (
                                            <span key={part}>{`${part} `}</span>
                                          )
                                        }
                                        return <span key={part}>{part}</span>
                                      })}
                                  </H3>
                                </IconWrapper>
                              )
                            })}
                          </RowIcon>

                          <RowIcon>
                            <H2>Profile icons</H2>
                            {profileIcons.map(item => {
                              return (
                                <IconWrapper key={item.node.name}>
                                  <img
                                    src={item.node.publicURL}
                                    alt={item.node.name}
                                  />
                                  <H3>
                                    {item.node.name
                                      .substr(8)
                                      .split("-")
                                      .map((part, index) => {
                                        if (
                                          index !==
                                          item.node.name.split("-").length
                                        ) {
                                          return (
                                            <span key={part}>{`${part} `}</span>
                                          )
                                        }
                                        return <span key={part}>{part}</span>
                                      })}
                                  </H3>
                                </IconWrapper>
                              )
                            })}
                          </RowIcon>

                          <RowIcon>
                            <H2>Social icons</H2>
                            {socialIcons.map(item => {
                              return (
                                <IconWrapper key={item.node.name}>
                                  <img
                                    src={item.node.publicURL}
                                    alt={item.node.name}
                                  />
                                  <H3>
                                    {item.node.name
                                      .substr(7)
                                      .split("-")
                                      .map((part, index) => {
                                        if (
                                          index !==
                                          item.node.name.split("-").length
                                        ) {
                                          return (
                                            <span key={part}>{`${part} `}</span>
                                          )
                                        }
                                        return <span key={part}>{part}</span>
                                      })}
                                  </H3>
                                </IconWrapper>
                              )
                            })}
                          </RowIcon>

                          <H3>Linkedin</H3>
                          <SVGCode>{`<svg class="icon-social" version="1.1" id="icon-linkedin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 430.1 430.1" style="enable-background:new 0 0 430.1 430.1;" xml:space="preserve"><path d="M398.4,0H31.8C14.2,0,0,13.8,0,30.8v368.5c0,17,14.2,30.8,31.8,30.8 h366.6c17.5,0,31.8-13.8,31.8-30.8V30.8C430.1,13.8,415.9,0,398.4,0z M130.4,360h-65V165.8h65V360z M97.9,139.3h-0.4 c-21.8,0-35.9-14.9-35.9-33.6c0-19,14.5-33.5,36.8-33.5c22.2,0,35.9,14.5,36.3,33.5C134.7,124.4,120.6,139.3,97.9,139.3z M364.7,360h-65V256.1c0-26.1-9.4-43.9-32.9-43.9c-18,0-28.6,12-33.3,23.6c-1.7,4.1-2.2,9.9-2.2,15.7V360h-65c0,0,0.9-176,0-194.2 h65v27.5c8.6-13.2,24-32.1,58.5-32.1c42.8,0,74.8,27.7,74.8,87.4L364.7,360L364.7,360z M230.9,194c0.1-0.2,0.3-0.4,0.4-0.6v0.6 H230.9z"></path></svg>`}</SVGCode>

                          <H3>Twitter</H3>
                          <SVGCode>{`<svg class="icon-social" version="1.1" id="icon-twitter" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve"><path d="M459,0H51C23,0,0,23,0,51v408c0,28,23,51,51,51h408c28,0,51-23,51-51V51C510,23,487,0,459,0z M400.4,186.1c-2.5,117.3-76.5,198.9-188.7,204c-45.9,2.6-79.1-12.8-109.7-30.6c33.1,5.1,76.5-7.6,99.4-28 c-33.2-2.5-53.6-20.4-63.8-48.5c10.2,2.5,20.4,0,28.1,0c-30.6-10.2-51-28.1-53.6-68.9c7.7,5.1,17.9,7.6,28.1,7.6 c-22.9-12.8-38.3-61.2-20.4-91.8c33.2,35.7,73.9,66.3,140.3,71.4c-17.9-71.4,79.1-109.7,117.3-61.2c17.9-2.6,30.6-10.2,43.4-15.3 c-5.1,17.9-15.3,28.1-28,38.3c12.8-2.6,25.5-5.1,35.7-10.2C425.9,165.8,413.1,175.9,400.4,186.1z"></path></svg>`}</SVGCode>

                          <H3>Inverted social icons</H3>
                          <H4>svg.icon-social path {"{ }"}</H4>
                          <CSS style={{ width: "100%" }}>
                            {`fill: #EEEEEE;`}
                          </CSS>
                          <H4>a:hover svg.icon-social path {"{ }"}</H4>
                          <CSS style={{ width: "100%" }}>
                            {`fill: #FFFFFF;`}
                          </CSS>
                        </>
                      )
                    }}
                  />
                </GroupWrapper>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Icons
