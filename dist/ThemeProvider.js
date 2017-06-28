'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeShape = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemeProvider = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider(props, ctx) {
    _classCallCheck(this, ThemeProvider);

    return _possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call(this, props, ctx));
  }

  _createClass(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { theme: this.props.theme };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return ThemeProvider;
}(_react.Component);

exports.default = ThemeProvider;
var themeShape = exports.themeShape = {
  breakpoints: _propTypes2.default.arrayOf(_propTypes2.default.number),
  space: _propTypes2.default.arrayOf(_propTypes2.default.number),
  fontSizes: _propTypes2.default.arrayOf(_propTypes2.default.number)
};

ThemeProvider.propTypes = {
  theme: _propTypes2.default.shape(themeShape).isRequired,
  children: _propTypes2.default.element.isRequired
};

ThemeProvider.childContextTypes = {
  theme: _propTypes2.default.shape(themeShape)
};