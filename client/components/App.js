import React, {Component} from 'react'
import TextBox from './TextBox'
import {compose} from "recompose"
import styled from "styled-components"

const Root = styled.div`
  padding: 1rem;
`

export default class App extends Component {
  render() {
    return(
      <Root>
        <h3>The most advanced writer on the web: Tenjin</h3>
        <TextBox />
      </Root>
    )
  }
}
