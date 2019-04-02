import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #333;
  padding: 30px 10px 10px;
  position: relative;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;
  min-height: 80px;
  font-family: monospace;
  padding-bottom: 40px;
  color: #fff;

  :before {
    content: "SVG Code";
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    color: rgba(256, 256, 256, 0.8);
  }
`
const SVGWrapper = styled.span``

const CopyButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: transparent;
  border: solid 1px rgba(256, 256, 256, 0.8);
  color: rgba(256, 256, 256, 0.8);
  padding: 10px 15px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: rgba(256, 256, 256, 0.8);
    color: rgba(0, 0, 0, 0.8);
  }
`

function handleCopy(data) {
  if (process.browser) {
    const el = document.createElement("textarea")
    el.value = data
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }
}

function generateOutout(children) {
  if (typeof children !== "string")
    return (
      <span
        style={{ color: "#fff" }}
      >{`The SVG syntax highluter needs a string but received ${typeof children}.`}</span>
    )
  try {
    return <SVGWrapper>{children}</SVGWrapper>
  } catch (error) {
    return <p>Error!</p>
  }
}

export default ({ children }) => {
  return (
    <Wrapper>
      <CopyButton onClick={() => handleCopy(children)}>COPY</CopyButton>
      {generateOutout(children)}
    </Wrapper>
  )
}
