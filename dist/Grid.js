'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _styled = require('./styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var align = function align(props) {
  return { verticalAlign: props.align || 'top' };
};

var Grid = (0, _styled2.default)(_Box2.default, { display: 'inline-block' }, align);

exports.default = Grid;