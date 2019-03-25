import React, { Component } from "react"
import styled from "styled-components"
import { H2, H3, H4 } from "./typography"
import Layout, { CTX } from "../components/layout"
import LogoImage from "../images/pl-logo.svg"
import CSS from '../components/CSS'

const PrimaryNav = styled.nav`
  width: 100%;
  border: solid 1px #ccc;

  ol {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    float: left;
    padding-right: 3rem;
  }
`

const Logo = styled.div`
  svg {
    width: 117px;
    height: auto;
    margin-right: 3rem;
    vertical-align: middle;

  }
`

const NavLink = styled.span`
  color: #000;
  :hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

const RightNav = styled.div`
  float: right;
`;

const SVGcode = styled.div`
margin-top: 1rem;
  width: 100%;
  padding: 4px;
  background-color: #333;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  border-radius: 3px;
  min-height: 80px;
  color: #f4f4f4;
  font-family: monospace;
  font-size: 1.2rem;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #000;
`

class Navigation extends Component {
  render() {
    return (
      <Layout title="Navigation">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <H2>Primary navigation</H2>
                <PrimaryNav>
                  <div className="inner-header">
                    <Logo>
                      <LogoImage />
                    </Logo>
                    <ol>
                      <li><NavLink>Procurement Excellence</NavLink></li>
                      <li><NavLink>Category Management</NavLink></li>
                      <li><NavLink>Category Intelligence</NavLink></li>
                      <li><NavLink>Expert Network</NavLink></li>
                      <li><NavLink>Tools</NavLink></li>
                      <li><NavLink>Events</NavLink></li>
                    </ol>

                    <RightNav >

                    </RightNav>

                  </div>
                </PrimaryNav>

                <H3>Navigation row wrapper</H3>
                <CSS>
                  {`width: 100%;
                    height: auto;
                    `}
                </CSS>

                <H3>Navigation inner</H3>

                <CSS>
                  {`width: ${1280 / baseFont}rem;
                    height: auto;
                    padding:  ${ 16 / baseFont}rem ${67 / baseFont}rem;
                    `}
                </CSS>

                <H3>Logo</H3>

                <Logo>
                  <LogoImage />
                </Logo>

                <CSS>
                  {`width: 117px;
                    height: auto;
                    margin-right: ${30 / baseFont}rem;
                    vertical-align: middle;`}
                </CSS>


                <H4>Logo SVG</H4>
                <SVGcode>
                  {`<svg xmlns="http://www.w3.org/2000/svg" width="89.8878mm" height="37.1475mm" viewBox="0 0 254.8 105.3"><title>Procurement Leaders Logo</title><path d="M67.5,46.7c-5.4,0-9-4.5-9-16.4s3.6-16.4,9-16.4,9,4.5,9,16.4c.1,11.9-3.6,16.4-9,16.4" transform="translate(0 0)" fill="#fff"/><path d="M131.1,85.9l-3.9-13.2a24.3905,24.3905,0,0,1-2.8.1V85.9h-5.5v-32h7.7c6.1,0,9.3,2.6,9.3,9.4,0,5.1-2,7.2-3.8,8l4.6,14.5h-5.6Z" transform="translate(0 0)" fill="#fff"/><path d="M93.1,76.2c0,6.5-3,9.6-8.7,9.6H76.3V53.9h8.1c5.7,0,8.7,3.1,8.7,9.6Z" transform="translate(0 0)" fill="#fff"/><polygon points="32.3 85.9 18.2 85.9 18.2 53.9 23.7 53.9 23.7 81.1 32.3 81.1 32.3 85.9" fill="#fff"/><polygon points="51.4 85.9 36.1 85.9 36.1 53.9 50.8 53.9 50.8 58.7 41.6 58.7 41.6 66.9 48.7 66.9 48.7 71.7 41.6 71.7 41.6 81.1 51.4 81.1 51.4 85.9" fill="#fff"/><path d="M89.3,46.7c-5.7,0-9.2-4.3-9.2-16.4s3.5-16.4,9.2-16.4c4.7,0,7.7,3.3,8.2,10.1H94c-.4-5-2-7.2-4.7-7.2-4,0-5.8,3.5-5.8,13.5s1.8,13.5,5.8,13.5c3.2,0,5.1-2.2,5.2-8.1H98c-.1,7.1-3.2,11-8.7,11" transform="translate(0 0)" fill="#fff"/><polygon points="114.1 85.9 98.8 85.9 98.8 53.9 113.5 53.9 113.5 58.7 104.3 58.7 104.3 66.9 111.4 66.9 111.4 71.7 104.3 71.7 104.3 81.1 114.1 81.1 114.1 85.9" fill="#fff"/><path d="M118.8,37.9c0,5.1-2.4,8.8-8.1,8.8s-8.1-3.7-8.1-8.8V14.4H106V37.8c0,3.2.9,6,4.7,6s4.7-2.8,4.7-6V14.4h3.4Z" transform="translate(0 0)" fill="#fff"/><path d="M148.3,86.3c-5.1,0-8-4.1-8.2-8.8l5.2-.8c.2,3.2,1.5,4.8,3.3,4.8,1.9,0,3.2-1,3.2-2.9,0-6.3-11.1-8-11.1-17.2,0-5.1,3.1-8,8.5-8,4.5,0,7.1,3.2,7.6,7.7l-5.2.6c-.2-2.7-1.7-3.5-2.9-3.5-1.8,0-2.7,1.1-2.7,3.1,0,5.4,11.1,8,11.1,16.7-.2,5.4-3.7,8.3-8.8,8.3" transform="translate(0 0)" fill="#fff"/><polygon points="160.9 46.3 145.7 46.3 145.7 14.4 160.3 14.4 160.3 17.3 149.2 17.3 149.2 28.2 157.4 28.2 157.4 31.1 149.2 31.1 149.2 43.4 160.9 43.4 160.9 46.3" fill="#fff"/><polygon points="186.5 46.3 183.3 46.3 183.3 17 183.2 17 176.6 46.3 174.3 46.3 167.7 17 167.6 17 167.6 46.3 164.4 46.3 164.4 14.4 169.9 14.4 175.4 38.5 175.5 38.5 181 14.4 186.5 14.4 186.5 46.3" fill="#fff"/><polygon points="206.5 46.3 191.3 46.3 191.3 14.4 205.9 14.4 205.9 17.3 194.8 17.3 194.8 28.2 203 28.2 203 31.1 194.8 31.1 194.8 43.4 206.5 43.4 206.5 46.3" fill="#fff"/><polygon points="227.1 46.3 223.4 46.3 213.5 18.5 213.4 18.5 213.4 46.3 210 46.3 210 14.4 215.4 14.4 223.6 37.9 223.7 37.9 223.7 14.4 227.1 14.4 227.1 46.3" fill="#fff"/><polygon points="245.9 17.3 239.4 17.3 239.4 46.3 235.9 46.3 235.9 17.3 229.4 17.3 229.4 14.4 245.9 14.4 245.9 17.3" fill="#fff"/><path d="M135.5,30.5c3.5-1.2,5.1-4.2,5.1-7.8,0-5.3-3.6-8.3-8.8-8.3h-7.7V46.3h3.5v-15l4.5-.2,5.1,15.1h3.6l-5.3-15.7Zm-4.9-2.2h-3v-11h3c5,0,6.5,1.9,6.5,5.5C137.2,26.4,135.6,28.3,130.6,28.3Z" transform="translate(0 0)" fill="#fff"/><path d="M49.2,30.5c3.5-1.2,5.1-4.2,5.1-7.8,0-5.3-3.6-8.3-8.8-8.3H37.8V46.3h3.5v-15l4.5-.2,5.1,15.1h3.6Zm-4.9-2.2h-3v-11h3c5,0,6.5,1.9,6.5,5.5S49.2,28.3,44.3,28.3Z" transform="translate(0 0)" fill="#fff"/><path d="M25.8,14.4H18.3V46.3h3.4V31.9h4.1c5.1,0,8.5-3.5,8.5-8.8S30.9,14.4,25.8,14.4ZM25.4,29H21.8V17.3h3.6c3.4,0,5.5,1.9,5.5,5.8C30.8,27.1,28.8,29,25.4,29Z" transform="translate(0 0)" fill="#fff"/><path d="M66.8,53.9H60L54.1,85.8h5.3l1-7.1h6l1,7.1h5.3ZM61.1,74l2.2-13.7h.1L65.6,74Z" transform="translate(0 0)" fill="#fff"/><path class="bg" d="M83.6,58.4H81.7V81.3h1.9c2.9,0,3.9-1.1,3.9-4.5v-14c.1-3.3-.9-4.4-3.9-4.4" transform="translate(0 0)"/><path class="bg" d="M67.5,16.8c-3.1,0-5.6,2.7-5.6,13.5s2.5,13.5,5.6,13.5,5.6-2.7,5.6-13.5-2.5-13.5-5.6-13.5" transform="translate(0 0)"/><path class="bg" d="M126.3,58.4h-1.9v9.8h1.9c3,0,4.1-1.1,4.1-4.9s-1.1-4.9-4.1-4.9" transform="translate(0 0)"/><path class="bg" d="M0,0V105.3H163.8V53.7h91V0ZM37.8,14.4h7.7c5.1,0,8.8,3,8.8,8.3,0,3.6-1.6,6.6-5.1,7.8l5.4,15.8H51L45.9,31.2l-4.5.2V46.3H37.9V14.4ZM32.3,85.9H18.2v-32h5.5V81.1h8.6Zm-6.5-54H21.7V46.3H18.3V14.4h7.5c5.1,0,8.5,3.5,8.5,8.8,0,5.2-3.4,8.7-8.5,8.7m25.6,54H36.1v-32H50.8v4.8H41.6v8.2h7.1v4.8H41.6v9.4h9.8Zm15.9,0-1-7.1h-6l-1,7.1H54L59.9,54h6.8l5.9,31.9Zm.2-39.2c-5.4,0-9-4.5-9-16.4s3.6-16.4,9-16.4,9,4.5,9,16.4c.1,11.9-3.6,16.4-9,16.4M93.1,76.2c0,6.5-3,9.6-8.7,9.6H76.3V53.9h8.1c5.7,0,8.7,3.1,8.7,9.6ZM89.3,46.7c-5.7,0-9.2-4.3-9.2-16.4s3.5-16.4,9.2-16.4c4.7,0,7.7,3.3,8.2,10.1H94c-.4-5-2-7.2-4.7-7.2-4,0-5.8,3.5-5.8,13.5s1.8,13.5,5.8,13.5c3.2,0,5.1-2.2,5.2-8.1H98c-.1,7.1-3.2,11-8.7,11m24.8,39.2H98.8v-32h14.7v4.8h-9.2v8.2h7.1v4.8h-7.1v9.4h9.8Zm4.7-48c0,5.1-2.4,8.8-8.1,8.8s-8.1-3.7-8.1-8.8V14.4H106V37.8c0,3.2.9,6,4.7,6s4.7-2.8,4.7-6V14.4h3.4Zm12.3,48-3.9-13.2a24.3905,24.3905,0,0,1-2.8.1V85.9h-5.5v-32h7.7c6.1,0,9.3,2.6,9.3,9.4,0,5.1-2,7.2-3.8,8l4.6,14.5h-5.6Zm1-54.7-4.5.2V46.3h-3.5V14.4h7.7c5.1,0,8.8,3,8.8,8.3,0,3.6-1.6,6.6-5.1,7.8l5.4,15.8h-3.6l-5.2-15.1Zm16.2,55.1c-5.1,0-8-4.1-8.2-8.8l5.2-.8c.2,3.2,1.5,4.8,3.3,4.8,1.9,0,3.2-1,3.2-2.9,0-6.3-11.1-8-11.1-17.2,0-5.1,3.1-8,8.5-8,4.5,0,7.1,3.2,7.6,7.7l-5.2.6c-.2-2.7-1.7-3.5-2.9-3.5-1.8,0-2.7,1.1-2.7,3.1,0,5.4,11.1,8,11.1,16.7-.2,5.4-3.7,8.3-8.8,8.3m12.6-40H145.8V14.4h14.6v2.9H149.3V28.2h8.2v2.9h-8.2V43.4H161v2.9Zm25.6,0h-3.2V17h-.1l-6.6,29.3h-2.3L167.7,17h-.1V46.3h-3.2V14.4h5.5l5.6,24.1h.1L181,14.4h5.5V46.3Zm20,0H191.4V14.4H206v2.9H194.9V28.2h8.2v2.9h-8.2V43.4h11.7v2.9Zm20.6,0h-3.7l-9.9-27.8h-.1V46.3H210V14.4h5.4l8.2,23.5h.1V14.4h3.5V46.3Zm18.8-29h-6.5v29H236v-29h-6.5V14.4H246v2.9Z" transform="translate(0 0)"/><path class="bg" d="M137.2,22.8c0-3.6-1.6-5.5-6.5-5.5h-3V28.4h3c4.9-.1,6.5-2,6.5-5.6" transform="translate(0 0)"/><path class="bg" d="M50.8,22.8c0-3.6-1.6-5.5-6.5-5.5h-3V28.4h3c4.9-.1,6.5-2,6.5-5.6" transform="translate(0 0)"/><path class="bg" d="M25.4,17.3H21.8V29h3.6c3.4,0,5.5-1.9,5.5-5.8-.1-4.1-2.1-5.9-5.5-5.9" transform="translate(0 0)"/><polygon class="bg" points="63.3 60.3 61.1 74 65.6 74 63.4 60.3 63.3 60.3"/></svg>`}
                </SVGcode>


                <H3>Navigation link</H3>

                <CSS>
                  {`
                    font-size: ${15 / baseFont}rem;
                    font-family: 'Roboto', sans-serif;                 
                    font-weight: 300;
                    color: #000000;

                    
                  `}
                </CSS>

                <H3>:hover Navigation link</H3>

                <CSS>
                  {`
                   text-decoration: underline;
                    color: #000000;

                    
                  `}
                </CSS>

                <H3>Search</H3>

                <CSS>
                  {`
                    font-size: ${15 / baseFont}rem;
                    font-family: 'Roboto', sans-serif;                 
                    font-weight: 300;
                  `}
                </CSS>

                <H3>Avatar</H3>

                <CSS>
                  {`
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        border: 1px solid #cccccc;
                  `}
                </CSS>

                <H2>Footer</H2>

                <Footer>
                  <div className="inner" />
                </Footer>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Navigation
