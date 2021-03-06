import React, { Component } from "react"
import styled from "styled-components"
import Layout, { CTX } from "../components/layout"
import { H2, H3 } from "./typography"
import CSS from "../components/CSS"

export const Wrapper = styled.div`
  width: 100%;
  border: solid 1px #ccc;
  .inner {
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
    padding: 6rem 6.7rem;
    border: solid 1px #ccc;
  }
`
export const Inner = styled.div`
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  padding: 6rem 6.7rem;
  display: flex;
  h1 {
    margin: 0;
  }
`

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 560px;
  border: solid 1px #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 2rem 1.6rem;
  background-color: #dddddd;

  .label,
  label{
    display: block;
    width: 100%;
    margin: 0;

    span{
      margin-bottom: 0;
      font-size: 1.4rem;
      font-family: 'Roboto', sans-serif;
      display: block;
      width: 100%;
    }
  }

  .input_text,
  select{
    display: block;
    width: 100%;
    margin: 2px 0 8px;
    padding: 3px 6px;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
  }
  textarea{
    display: block;
    width: 100%;
    margin: 2px 0 8px;
    padding: 3px 6px;
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    resize: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
  }
  .input_text:focus,
  select:focus,
  textarea:focus{
    background-color: #f9f9f9;
    border-color: #ef7d25;
    outline-color: #ef7d25;
  }

  /* Radio Group */
  .radio_group{
    width: 100%;
    margin-bottom:8px;
    :after{
      display: block;
      clear: both;
      content: '';
    }
    .label_radio{
      font-size: 1.4rem;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      cursor: pointer;
      float: left;
      width: inherit;
    }
    [type="radio"]:checked,
    [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    [type="radio"]:checked + label,
    [type="radio"]:not(:checked) + label
    {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 4px;
        display: inline-block;
        color: #666;
        box-sizing: border-box;
    }
    [type="radio"]:checked + label:before,
    [type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ccc;
        border-radius: 100%;
        background: #fff;
    }
    [type="radio"]:checked + label:after,
    [type="radio"]:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: #ef7d25;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
    [type="radio"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    [type="radio"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
  }

  /* Checkbox Group */
  .checkbox_group{
    label{
      display: block;
      position: relative;
      padding-left: 26px;
      margin-bottom: 8px;
      cursor: pointer;
      font-size: 1.4rem;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      line-height: 21px;
      font-family: 'Roboto', sans-serif;
    }
    input[type=checkbox]{
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    .box{
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 3px;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
    }
    :hover input ~ .box {
      background-color: #f4f4f4;
    }
    :hover input ~ .box:after {
      border: solid #666;
      border-width: 0 2px 2px 0;
      display: block;
    }
    input:checked ~ .box {
      background-color: #ffffff;
    }
    .box:after {
      content: "";
      position: absolute;
      display: none;
    }
    input:checked ~ .box:after {
      display: block;
      border: solid #000;
      border-width: 0 2px 2px 0;
    }
    .box:after {
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid #000;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`

class Form extends Component {
  render() {
    return (
      <Layout title="Form">
        <CTX.Consumer>
          {({ baseFont }) => {
            return (
              <>
                <FormWrapper>
                  <label htmlFor="firstname">
                    <span>First name</span>
                  </label>
                  <input type="text" id="firstname" name="firstname" placeholder="First name" className="input_text" />

                  <label htmlFor="lastname">
                    <span>Last name</span>
                  </label>
                  <input type="text" id="lastname" name="lastname" placeholder="Last name" className="input_text" />

                  <label for="select_input">
                    <span>Select</span>
                  </label>
                  <select id="select_input" name="select_input">
                    <option value=""></option>
                    <option value="First Choice">First Choice</option>
                    <option value="Second Choice">Second Choice</option>
                    <option value="Third Choice">Third Choice</option>
                    <option value="Fourth Choice">Fourth Choice</option>
                  </select>

                  <div class="radio_group">
                    <p class="label"><span>Radio group:</span></p>
                    <input class="input_radio" type="radio" value="first" name="choices" id="choice-first" />
                    <label class="label_radio" for="choice-first">First choice</label>
                    <input class="input_radio" type="radio" value="second" name="choices" id="choice-second" />
                    <label class="label_radio" for="choice-second">Second choice</label>
                  </div>

                  <label htmlFor="textarea">
                    <span>Textarea</span>
                  </label>
                  <textarea type="textarea" id="textarea" name="textarea" className="input_textarea">
                    This is a text area field
                  </textarea>

                  <div className="checkbox_group">
                    <label for="privacy" class="checkbox_label">
                      Agree to Terms and Conditions
                      <input type="checkbox" name="privacy" id="privacy" value="1" class="input_checkbox" />
                      <span class="box"></span>
                    </label>
                  </div>

                </FormWrapper>
                <H3>Form wrapper</H3>
                <CSS>
                  {`
                    width: 100%;
                    max-width: 560px;
                    border: solid 1px #ccc;
                    border-radius: 3px;
                    box-sizing: border-box;
                    padding: 2rem 1.6rem;
                    background-color: #dddddd;

                  `}
                </CSS>

                <H3>Labels</H3>
                <CSS>
                  {`
                    margin-bottom: 0;
                    font-size:  ${14 / baseFont}rem ;
                    font-family: 'Roboto', sans-serif;
                    display: block;
                    width: 100%;
                  `}
                </CSS>

                <H3>Input text</H3>
                <CSS>
                  {`
                    font-size:  ${14 / baseFont}rem;
                    display: block;
                    width: 100%;
                    margin: 2px 0 8px;
                    padding: 3px 6px;
                    height: 36px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                  `}
                </CSS>

                <H3>Input select</H3>
                <CSS>
                  {`
                    font-size:  ${14 / baseFont}rem;
                    display: block;
                    width: 100%;
                    margin: 2px 0 8px;
                    padding: 3px 6px;
                    height: 36px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                  `}
                </CSS>

                <H3>Textarea</H3>
                <CSS>
                  {`
                    font-size:  ${14 / baseFont}rem;
                    display: block;
                    width: 100%;
                    margin: 2px 0 8px;
                    padding: 3px 6px;
                    height: 80px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                  `}
                </CSS>

                <H3>input:focus, select:focus, textarea:focus</H3>

                <CSS>
                  {`
                    background-color: #f9f9f9;
                    border-color: #ef7d25;
                    outline-color: #ef7d25;
                  `}
                </CSS>

              </>
            )
          }}
        </CTX.Consumer>
      </Layout>
    )
  }
}

export default Form
