"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = View;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../../component/Layout"));

var _TodoHeader = _interopRequireDefault(require("./TodoHeader"));

var _TodoMain = _interopRequireDefault(require("./TodoMain"));

var _TodoFooter = _interopRequireDefault(require("./TodoFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function View() {
  return _react["default"].createElement(_Layout["default"], null, _react["default"].createElement(_TodoHeader["default"], null), _react["default"].createElement(_TodoMain["default"], null), _react["default"].createElement(_TodoFooter["default"], null));
}