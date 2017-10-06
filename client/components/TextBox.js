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
  width: 400px;
  height: 100px;
`

const TextBox = () => (
  <Root>
    <div>
      <h3>Write here</h3>
      <StyledInput type="text"></StyledInput>
    </div>
  </Root>
)


export default compose(
)(TextBox)
