import React from "react"
import { CTX } from './layout';

const InputFont = (props) => {
  const { changeBaseFont } = props;

  return (
    <CTX.Consumer>
      {({ baseFont }) => (
        <div className="container-base-font">
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
        </div>
      )}
    </CTX.Consumer>
  );
}

export default InputFont