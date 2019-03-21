import React, { Fragment } from "react"
import styled from "styled-components"

const Wrapper = styled.pre`
  background-color: #333;
  padding: 10px;
  position: relative;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;
  min-height: 80px;

  :before {
    content: "CSS";
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    color: rgba(256, 256, 256, 0.8);
  }
`
const LineWrapper = styled.span``

const Line = styled.span`
  color: #ff6188;
`

const Value = styled.span`
  color: #a9dc76;
`
const Divider = styled.span`
  color: #fff;
`

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
  try {
    {
      return children.split(";").map(line => {
        const parts = line.split(":")
        if (!parts[0] || !parts[1]) return false
        return (
          <LineWrapper key={line}>
            <Line className>{parts[0].trim()}</Line>
            <Divider>:</Divider>
            <Value>{parts[1]}</Value>
            <Divider>;</Divider>
            <br />
          </LineWrapper>
        )
      })
    }
  } catch (error) {
    console.log({ error })
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
