import {styled} from 'styletron-react';

export default (component, ...styles) =>
  styled(component, props =>
    styles
      .map(style => (typeof style === 'function' ? style(props) : style))
      .filter(x => !!x)
      .reduce((res, style) => Object.assign(res, style), {})
  )
