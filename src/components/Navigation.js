import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.aside`
  border-right: solid 1px #ccc;
  padding: 0 1.5rem 0;
  width: 23.04%;
  max-width: 20rem;

  ol {
    list-style: none;
    position: sticky;
    top: 1.5rem;
    left: 0;
    padding-left: 1.5rem;
    margin-top: 1.5rem;
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
          <Link to="/" activeClassName="active">
            PL Style Guide
          </Link>
        </li>
        <li>
          <Link to="/typography" activeClassName="active">
            Typography
          </Link>
        </li>
        <li>
          <Link to="/grid" activeClassName="active">
            Grid
          </Link>
          <br />
          <Link to="/grid-2-column" activeClassName="active" className="subNav">
            2 Column Grid
          </Link>
          <br />
          <Link to="/grid-3-column" activeClassName="active" className="subNav">
            3 Column Grid
          </Link>
          <br />
          <Link to="/grid-4-column" activeClassName="active" className="subNav">
            4 Column Grid
          </Link>
        </li>
        <li>
          <Link to="/buttons" activeClassName="active">
            Buttons
          </Link>
        </li>
        <li>
          <Link to="/cards" activeClassName="active">
            Cards
          </Link>
        </li>
        <li>
          <Link to="/icons" activeClassName="active">
            Icons
          </Link>
        </li>
        <li>
          <Link to="/primary-navigation" activeClassName="active">
            Primary navigation
          </Link>
        </li>
        <li>
          <Link to="/footer" activeClassName="active">
            Footer
          </Link>
        </li>
      </ol>
    </Wrapper>
  )
}

export default Navigation
