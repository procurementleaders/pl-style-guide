import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.aside`
  width: 100%;
  background-color: #f4f4f4;
  flex: 0;
  padding: 0.9375rem;

  ol {
    list-style: none;
    padding-left: 0;
  }
  li {
    font-size: 1.6rem;
    color: #000000;
    padding-bottom: 1.5rem;
  }
  a {
    color: #000;
    text-decoration: none;

    font-family: "Roboto", sans-serif;
  }
`

const Navigation = () => {
  return (
    <Wrapper>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/typeography">Typography</Link>
        </li>
        <li>
          <Link to="/grid">Grid</Link>
        </li>
      </ol>
    </Wrapper>
  )
}

export default Navigation
