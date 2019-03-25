import React from "react";
import { CTX } from "./layout";
import styled from "styled-components";

const Input = styled.div`
  padding: 0.8rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  border-radius:3px;

  label, span {
    font-size: 1.4rem;
  }
  input.base-font {
    margin-left: 5px;
    margin-right: 5px;
    width: 26px;
    height: 26px;
    text-align: center;
    padding-right: 2px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
`

const InputFont = (props) => {
  const { changeBaseFont } = props;

  return (
    <CTX.Consumer>
      {({ baseFont }) => (
        <Input>
          <label className="roboto" htmlFor="baseFont">Base font </label>
          <input
            id="baseFont"
            name="baseFont"
            placeholder="Base font"
            className="base-font"
            onChange={changeBaseFont}
            value={baseFont}
          />
          <span className="roboto">px</span>
        </Input>
      )}
    </CTX.Consumer>
  );
}

export default InputFont