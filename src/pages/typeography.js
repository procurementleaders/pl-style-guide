import React, { Component } from "react"
import styled from "styled-components"
import Layout from "../components/layout"

export const H1 = styled.h1`
  font-size: 4.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`

export const H2 = styled.h2`
  font-size: 3.2rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`

export const H3 = styled.h3`
  font-size: 2.1rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`

export const H4 = styled.h4`
  font-size: 1.7rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`

export const H5 = styled.h5`
  font-size: 1.4rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`

export const Paragraph = styled.p`
  font-size: 1.6rem;
  font-family: "PT Serif", serif;
`

export const SubHeader = styled.p`
  margin: 0.75rem 0 0;
  font-size: 1.6rem;
  max-width: 85.2rem;
  font-family: "Roboto", sans-serif;
  color: #000;
`

class Typeography extends Component {
  render() {
    const basefont = 16
    return (
      <Layout title="Typeography">
        <>
          <H1>Heading level 1</H1>
          <pre>
            font-size: {44 / basefont}rem; <br />
            font-family: 'Roboto', sans-serif; <br />
            font-weight: 300;
          </pre>
          <H2>Heading level 2</H2>
          <pre>
            font-size: {32 / basefont}rem; <br />
            font-family: 'Roboto', sans-serif;
            <br />
            font-weight: 300;
          </pre>

          <H3>Heading level 3</H3>
          <pre>
            font-size: {32 / basefont}rem; <br />
            font-family: 'Roboto', sans-serif;
            <br />
            font-weight: 300;
          </pre>

          <H4>Heading level 4</H4>
          <pre>
            font-size: {32 / basefont}rem; <br />
            font-family: 'Roboto', sans-serif;
            <br />
            font-weight: 300;
          </pre>

          <H5>Heading level 5</H5>
          <pre>
            font-size: {32 / basefont}rem; <br />
            font-family: 'Roboto', sans-serif;
            <br />
            font-weight: 300;
          </pre>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque commodo sapien id felis porttitor, vitae suscipit mi
            malesuada. In ut ex quis est vehicula condimentum ut id sem. Fusce
            et felis ex. Nullam suscipit lorem ut mi suscipit, ac pellentesque
            est convallis. Ut vel gravida justo, sit amet fermentum erat. Donec
            ultricies blandit nunc. Sed fringilla, dolor et fringilla auctor, ex
            turpis porta dui, et auctor quam metus aliquet mauris. Duis eu justo
            scelerisque, vulputate elit at, maximus turpis. Ut sollicitudin erat
            enim, eu convallis nibh posuere ultricies.
          </Paragraph>
          <pre>
            font-family: 'PT Serif', serif;
            <br />
            font-size: {16 / basefont}rem;
          </pre>
        </>
      </Layout>
    )
  }
}

export default Typeography
