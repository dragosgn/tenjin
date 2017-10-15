import React, {Component} from 'react'
import TextBox from './TextBox'
import {compose} from "recompose"


export default class App extends Component {
  render() {
    return(
      <div>
        <TextBox />
      </div>
    )
  }
}
