import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { H2, H4 } from "./typography"

export const Wrapper = styled.div`
  max-width: 85.2rem;
  h2,
  h4 {
    font-weight: 400;
  }
  :after {
    display: block;
    clear: both;
    content: "";
  }
`

export const Box = styled.div`
  width: 48.7%;
  margin-right: 2.6%;
  float: left;

  :last-child {
    margin-right: 0;
  }
`
export const P = styled.p`
  color: #333;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Wrapper>
      <H2>Introduction</H2>
      <P>
        The Digital Team created this style guide to act as a central location
        where we house a live inventory of UI components, brand guidelines,
        brand assets, code snippets, developer guidelines and more.
      </P>
      <P>
        Anyone working on the Procurement Leaders product is encouraged to stay
        familiar with this style guide and help ensure that it is kept
        up-to-date.
      </P>
      <br />
      <Box>
        <H4>What is the Procurement Leader style guide?</H4>
        <P>
          Our style guide is a live inventory of UI components, design patterns,
          brand assets and code guidelines which the whole Procurement Leaders
          team work from, keeping all of our products cohesive.
        </P>
      </Box>
      <Box>
        <H4>Why did we develop this style guide?</H4>
        <P>
          This style guide is the central hub and new updates are pushed here
          first, then trickle down to our live products. This will allow us
          develop a single, unified system that is transferrable across all
          platforms and devices.
        </P>
      </Box>
    </Wrapper>
    <br />
    <br />
  </Layout>
)

export default IndexPage
