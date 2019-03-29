import React from "react"
import styled from "styled-components"

const Div = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid
    ${props => (props.borderColor ? props.borderColor : props.bgColor)};
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1rem;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  line-height: 100px;

  :hover {
    opacity: 0.9;
    text-decoration: underline;
    color: ${props => props.color};
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

export default ({ color, bgColor, borderColor }) => {
  return (
    <Div
      onClick={() => handleCopy(bgColor)}
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
    >
      {bgColor}
    </Div>
  )
}
