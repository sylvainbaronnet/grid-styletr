import React from 'react'
import { space, width } from 'styled-system'
import styled from './styled'

// hoc to remove unwanted width attribute
const hoc = Comp => ({width, ...props}) => <Comp {...props} w={width} />

export const flex = ({flex}) => flex ? {flex} : null

const Box = hoc(styled('div',
  {boxSizing: 'border-box'},
  width,
  space,
  flex
))

export default Box
