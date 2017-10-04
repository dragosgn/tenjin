import React from 'react'
import {compose} from 'recompose'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid grey;
`

const TextBox = () => (
  <Root>
    <div>
      <h1>Write here</h1>
      <StyledInput type="text"></StyledInput>
    </div>
  </Root>
)


export default compose(

)(TextBox)
