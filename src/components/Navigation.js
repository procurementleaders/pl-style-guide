import React from "react"
import { Link } from "gatsby"
import InputFont from "./InputFont"
import styled from "styled-components"
import LogoImage from "../images/pl-logo.svg"

const Wrapper = styled.aside`
  border-right: solid 1px #ccc;
  padding: 0 1.5rem 0;
  width: 100%;
  max-width: 20rem;

  ol.navigation {
    list-style: none;
    position: sticky;
    top: 1.5rem;
    left: 0;
    padding-left: 0;
    margin-top: 1.5rem;
  }

  p.top-navigation {
    margin-top: 0;
    margin-bottom: 0;
    font-family: "Roboto", sans-serif;
  }

  .navigation li {
    font-size: 1.6rem;
    color: #000000;
    padding-bottom: 1.5rem;
  }

  .navigation a {
    color: #000;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    :hover {
      text-decoration: underline;
    }
  }

  .navigation a.active {
    font-weight: bold;
    text-decoration: underline;
  }

  .navigation .logo a {
    display: block;
    text-align: left;
    padding: 0.75rem 0 3.75rem;

    :hover {
      text-decoration: none;
    }
  }

  .navigation .logo svg {
    width: 117px;
    height: auto;
  }

  .navigation .sub-navigation {
    margin-left: 12px;
  }
`

const Navigation = props => {
  const { changeBaseFont } = props
  return (
    <Wrapper>
      <ol className="navigation">
        <li className="logo">
          <Link to="/">
            <LogoImage /> <br />
            Style Guides
          </Link>
        </li>
        <li>
          <Link to="/typography" activeClassName="active">
            Typography
          </Link>
        </li>
        <li>
          <p className="top-navigation">Grid</p>

          <br />

          <Link
            to="/grid-2-column"
            activeClassName="active"
            className="sub-navigation"
          >
            2 Column Grid
          </Link>
          <br />
          <Link
            to="/grid-3-column"
            activeClassName="active"
            className="sub-navigation"
          >
            3 Column Grid
          </Link>
          <br />
          <Link
            to="/grid-4-column"
            activeClassName="active"
            className="sub-navigation"
          >
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
        <li>
          <p className="top-navigation">Design</p>
          <Link
            to="/colors"
            activeClassName="active"
            className="sub-navigation"
          >
            Colours
          </Link>
        </li>
        <li>
          <InputFont changeBaseFont={changeBaseFont} />
        </li>
      </ol>
    </Wrapper>
  )
}

export default Navigation
