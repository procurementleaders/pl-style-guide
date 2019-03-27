import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"
import Layout, { CTX } from "../components/layout"
import { H2, H3 } from "./typography"

const GroupWrapper = styled.section`
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
                  <StaticQuery
                    query={graphql`
                      query {
                        allFile(
                          filter: {
                            extension: { eq: "svg" }
                            name: { regex: "/^ci-|^pe-/" }
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

                      return (
                        <>
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
                        </>
                      )

                      ciIcons.map(item => {
                        return (
                          <>
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
                                      index !== item.node.name.split("-").length
                                    ) {
                                      return (
                                        <span key={part}>{`${part} `}</span>
                                      )
                                    }
                                    return <span key={part}>{part}</span>
                                  })}
                              </H3>
                            </IconWrapper>
                          </>
                        )
                      })
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
