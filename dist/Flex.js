'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _styled = require('./styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var align = function align(_ref) {
  var align = _ref.align;
  return align ? { alignItems: align } : null;
};
var justify = function justify(_ref2) {
  var justify = _ref2.justify;
  return justify ? { justifyContent: justify } : null;
};
var order = function order(_ref3) {
  var order = _ref3.order;
  return order ? { order: order } : null;
};
var wrap = function wrap(_ref4) {
  var wrap = _ref4.wrap;
  return wrap ? { flexWrap: 'wrap' } : null;
};
var column = function column(_ref5) {
  var column = _ref5.column;
  return column ? { flexDirection: 'column' } : null;
};

var Flex = (0, _styled2.default)(_Box2.default, { display: 'flex' }, align, justify, order, wrap, column);

exports.default = Flex;