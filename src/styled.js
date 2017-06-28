import React from 'react';
import PropTypes from 'prop-types';
import {styled} from 'styletron-react';
import {themeShape} from './ThemeProvider';

export default (component, ...styles) => {
  const Component = styled(component, (props, {theme = {}}) =>
    styles
      .map(
        style =>
          typeof style === 'function' ? style({...props, theme}) : style
      )
      .filter(x => !!x)
      .reduce((res, style) => Object.assign(res, style), {})
  );

  Component.contextTypes = {
    ...Component.contextTypes,
    theme: PropTypes.shape(themeShape),
  };

  return Component;
};
