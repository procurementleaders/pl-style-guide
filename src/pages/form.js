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

                  <label htmlFor="textarea">
                    <span>Textarea</span>
                  </label>
                  <textarea type="textarea" id="textarea" name="textarea" className="input_textarea">
                    This is a text area field
                  </textarea>
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
