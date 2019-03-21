import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import CSS from "../components/CSS"

const PrimaryButton = styled.a`
  background-color: #ef7d25;
  color: #fff;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.4s ease;
  }

  :hover:before {
    width: 100%;
  }
`

const SecondaryButton = styled.a`
  background-color: #d1d1d1;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;
  padding: 1.5rem 3rem;
  letter-spacing: 2px;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    bottom: 0;
    background: rgba(256, 256, 256, 0.2);
    transition: all 0.4s ease;
  }

  :hover:before {
    width: 100%;
  }
`
const SupportingButton = styled.a`
  background-color: transparent;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;
  padding: 1.4rem 2.9rem;
  border: solid 1px #d1d1d1;
  letter-spacing: 2px;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
  }

  :hover:before {
    width: 100%;
  }
`

class Buttons extends Component {
  render() {
    return (
      <Layout title="Buttons">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <PrimaryButton>Primary</PrimaryButton>
                <CSS>
                  {`background-color: #ef7d25; color: #fff; font-size: ${14 /
                    baseFont}rem; font-family: "Roboto", sans-serif;
                  border-radius: 3px; -webkit-border-radius: 3px;
                  -moz-border-radius: 3px; -ms-border-radius: 3px;
                  -o-border-radius: 3px; text-transform: uppercase; padding: ${15 /
                    baseFont}rem ${30 /
                    baseFont}rem; letter-spacing: 2px; font-weight: 600; cursor:
                  pointer; display: inline-block; position: relative;`}
                </CSS>
                <p>:before</p>
                <CSS>
                  {`content: ""; position: absolute; top: 0; left: 0; width: 0;
                  bottom: 0; background: rgba(255, 255, 255, 0.2);
                  -webkit-border-radius: 3px; -moz-border-radius: 3px;
                  -o-border-radius: 3px; border-radius: 3px; transition: all 0.4s ease;`}
                </CSS>
                <p>:hover:before</p>
                <CSS>width: 100%;</CSS>
                <hr />
                <SecondaryButton>Seondary</SecondaryButton>
                <CSS>
                  {`background-color: #d1d1d1; -webkit-border-radius: 3px;
                  -moz-border-radius: 3px; -o-border-radius: 3px; border-radius:
                  3px; padding: ${15 / baseFont}rem ${30 /
                    baseFont}rem; letter-spacing: 2px; font-size:
                  ${14 /
                    baseFont}rem; font-family: "Roboto", sans-serif; text-transform:
                  uppercase; font-weight: 600; display: inline-block; cursor:
                  pointer;`}
                </CSS>
                <p>:before</p>
                <CSS>
                  {`content: ""; position: absolute; top: 0; left: 0; width: 0;
                  bottom: 0; background: rgba(0, 0, 0, 0.2); transition: all 0.4s ease;`}
                </CSS>
                <p>:hover:before</p>
                <CSS>width: 100%;</CSS>
                <hr />
                <SupportingButton>Supporting</SupportingButton>
                <CSS>
                  {`background-color: transparent; -webkit-border-radius: 3px;
                  -moz-border-radius: 3px; -o-border-radius: 3px; border-radius:
                  3px; padding: ${14 / baseFont}rem ${30 /
                    baseFont}rem; border: solid 1px #d1d1d1;
                  letter-spacing: 2px; font-size: ${14 /
                    baseFont}rem; font-family: "Roboto", 
                    sans-serif; text-transform: uppercase; font-weight: 600;
                  display: inline-block; cursor: pointer; position: relative;`}
                </CSS>
                <p>:before</p>
                <CSS>
                  {`content: ""; position: absolute; top: 0; left: 0; width: 0;
                  bottom: 0; background: rgba(0, 0, 0, 0.2); transition: all 0.4s ease;`}
                </CSS>
                <p>:hover:before</p>
                <CSS>width: 100%;</CSS>
              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Buttons
