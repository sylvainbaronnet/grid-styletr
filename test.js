import test from 'ava'
import React from 'react'
import {create} from 'react-test-renderer'
import Styletron from 'styletron-server'
import {StyletronProvider} from 'styletron-react';
import {
  Box,
  Grid,
  Flex
} from './src'
import { flex } from './src/Box'

const render = element => {
  const styletron = new Styletron()
  const renderedElement = create(
    <StyletronProvider styletron={styletron}>
    {element}
    </StyletronProvider>
  )
  const styles = styletron.getStylesheetsHtml();
  return {renderedElement, styles};
}


// Box
test('Box renders', t => {
  const box = render(<Box m={2} px={3} />);
  t.snapshot(box)
})

test('Box renders with props', t => {
  const box = render(<Box
    m={[ 1, 2 ]}
    px={[ 1, 2 ]}
    w={1}
    flex='1 1 auto'
  />)
  t.snapshot(box)
})

test('flex util returns null', t => {
  const sx = flex({})
  t.is(sx, null)
})

test('flex util returns a style object', t => {
  const sx = flex({ flex: 'none' })
  t.is(sx.flex, 'none')
})

// Grid
test('Grid renders', t => {
  const grid = render(<Grid />)
  t.snapshot(grid)
})

test('Grid has a classname', t => {
  const {renderedElement} = render(<Grid />)
  t.truthy(renderedElement.toJSON().props.className)
})

// Flex
test('Flex renders', t => {
  const flex = render(<Flex />)
  t.snapshot(flex)
})

