import {Component, Children} from 'react'
import PropTypes from 'prop-types'

export default class ThemeProvider extends Component {
  constructor(props, ctx) {
    super(props, ctx);
  }

  getChildContext() {
    return {theme: this.props.theme}
  }

  render() {
    return Children.only(this.props.children)
  }
}

export const themeShape = {
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  space: PropTypes.arrayOf(PropTypes.number),
  fontSizes: PropTypes.arrayOf(PropTypes.number),
};

ThemeProvider.propTypes = {
  theme: PropTypes.shape(themeShape).isRequired,
  children: PropTypes.element.isRequired,
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.shape(themeShape),
}
