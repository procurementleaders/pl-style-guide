import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { H2, H3 } from "./typography"
import Layout, { CTX } from "../components/layout"
import CSS from "../components/CSS"

const ArticleListingWrapper = styled.div`
  width: 100%;
  max-width: 85.2rem;
  margin: 0 auto;
`
const ContentTeaser = styled.article`
  width: 100%;
  border-bottom: solid 1px #ccc;
  display: inline-block;
  padding-bottom: 2.6%;
  margin-bottom: 2.6%;

  .teaser__details {
    float: left;
    width: 74.36%;
    margin-right: 2.6%;
  }
  p.teaser-details__text {
    font-family: "Roboto", sans-serif;
    font-weight: 400 !important;
    color: #666;
    font-size: 1.4rem;
    line-height: 1.8;
  }

  .gatsby-image-wrapper {
    width: 23.04%;
    float: left;
  }

  .teaser-details__meta {
    width: 100%;
    display: inline-block;
    margin: 0;
  }
  .teaser-details-meta__section,
  .teaser-details-meta__author {
    font-size: 1.2rem;
    float: left;
    font-family: "Roboto", sans-serif;
  }

  .teaser-details-meta__section {
    color: #ef7d25;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 600;

    margin-right: 1rem;
  }

  .teaser-details-meta__author {
    color: #666666;
  }
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "teaser-placeholder.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

class ContentPage extends Component {
  render() {
    return (
      <Layout title="Cards">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Content teaser</H2>
                <ArticleListingWrapper>
                  <ContentTeaser>
                    <div className="teaser__details">
                      <p className="teaser-details__meta">
                        <span className="teaser-details-meta__section">
                          span - SECTION
                        </span>
                        <span className="teaser-details-meta__author">
                          span - by Author Name
                        </span>
                      </p>
                      <H3
                        style={{
                          fontWeight: 400,
                          marginTop: "1.6rem",
                          marginBottom: "1.6rem",
                        }}
                      >
                        h3 - Article teaser title
                      </H3>

                      <p className="teaser-details__text">
                        p - Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Maecenas vitae ante orci. Maecenas gravida magna
                        sed dolor porta, a placerat lorem pellentesque. Cras ac
                        quam eros. Praesent lectus massa, sagittis maximus
                      </p>
                    </div>
                    <Image />
                  </ContentTeaser>
                </ArticleListingWrapper>

                <H3>div - Teaser details wrapper</H3>
                <CSS>
                  {`
                  margin-right: 2.6%;
                  width: 74.36%;
                  float: left;
                  `}
                </CSS>

                <H3>div - Image wrapper</H3>
                <CSS>
                  {`
                  width: 23.04%;
                  float: left;
                  `}
                </CSS>

                <H3>h3 - Teaser title</H3>
                <CSS>{`font-size: ${21 /
                  baseFont}rem; font-weight: 400; font-family: "Roboto",sans-serif;    margin-top: ${16 /
                  baseFont}rem;
                  margin-bottom: ${16 / baseFont}rem;`}</CSS>

                <H3>p - Teaser text</H3>

                <CSS>{`font-size: ${14 /
                  baseFont}rem; font-weight: 400; font-family: "Roboto",sans-serif;
                  color: #666666`}</CSS>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default ContentPage
