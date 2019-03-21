import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"
import Layout, { CTX } from "../components/layout"
import { H3 } from "./typography"

const GroupWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const IconWrapper = styled.div`
  width: 10%;
  float: left;
  border: solid 1px #ccc;
  padding: 1.5rem;
  h3 {
  }
  img {
    width: 100%;
    max-width: 100%;
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
                      return data.allFile.edges.map(item => {
                        return (
                          <IconWrapper key={item.node.name}>
                            <SectionTitle>
                              {String(item.node.name).substr(0, 3) === "pe-"
                                ? "Procurement Excellence"
                                : "Category Intelligence"}
                            </SectionTitle>
                            <H3>
                              {item.node.name
                                .substr(3)
                                .split("-")
                                .map((part, index) => {
                                  if (
                                    index !== item.node.name.split("-").length
                                  ) {
                                    return <span key={part}>{`${part} `}</span>
                                  }
                                  return <span key={part}>{part}</span>
                                })}
                            </H3>
                            <img
                              src={item.node.publicURL}
                              alt={item.node.name}
                            />
                          </IconWrapper>
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
