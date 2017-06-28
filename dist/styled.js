'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styletronReact = require('styletron-react');

var _ThemeProvider = require('./ThemeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  var Component = (0, _styletronReact.styled)(component, function (props, _ref) {
    var _ref$theme = _ref.theme,
        theme = _ref$theme === undefined ? {} : _ref$theme;
    return styles.map(function (style) {
      return typeof style === 'function' ? style(_extends({}, props, { theme: theme })) : style;
    }).filter(function (x) {
      return !!x;
    }).reduce(function (res, style) {
      return Object.assign(res, style);
    }, {});
  });

  Component.contextTypes = _extends({}, Component.contextTypes, {
    theme: _propTypes2.default.shape(_ThemeProvider.themeShape)
  });

  return Component;
};