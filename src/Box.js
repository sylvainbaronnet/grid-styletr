import React from 'react'
import { space, width } from 'styled-system'
import styled from './styled'

// Remove all props except for explicit whitelist
const CleanDiv = ({ children, className }) => <div className={className}>{children}</div>

export const flex = ({flex}) => flex ? {flex} : null

const Box = styled(CleanDiv,
  {boxSizing: 'border-box'},
  width,
  space,
  flex
)

export default Box