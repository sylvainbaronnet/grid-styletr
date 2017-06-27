import React from 'react'
import Box from './Box'
import styled from './styled'

const align = ({align}) => align ? {alignItems: align} : null
const justify = ({justify}) => justify ? {justifyContent: justify} : null
const order = ({order}) => order ? {order} : null
const wrap = ({wrap}) => wrap ? {flexWrap: 'wrap'} : null
const column = ({column}) => column ? {flexDirection: 'column'} : null

const Flex = styled(Box,
  {display: 'flex'},
  align,
  justify,
  order,
  wrap,
  column
)

export default Flex
