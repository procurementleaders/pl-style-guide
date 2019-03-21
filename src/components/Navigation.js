import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.aside`
  width: 100%;
  border-right: solid 1px #ccc;
  flex: 0;
  padding: 0 1.5rem 0;

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
          <Link to="/typography">Typography</Link>
        </li>
        <li>
          <Link to="/grid">Grid</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
        <li>
          <Link to="/icons">Icons</Link>
        </li>
        <li>
          <Link to="/navigation">Navigation</Link>
        </li>
      </ol>
    </Wrapper>
  )
}

export default Navigation
