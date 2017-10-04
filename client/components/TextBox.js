import React from 'react'
import {compose} from 'recompose'
import styled from 'styled-components'

const Root = styled.div`

`

const TextBox = () => (
  <Root>
    <div>
      <h1>Write here</h1>
      <input type="text"></input>
    </div>
  </Root>
)


export default compose(

)(TextBox)
