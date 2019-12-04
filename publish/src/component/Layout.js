"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layout;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Layout(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "todoapp",
    style: {
      height: "100%",
      background: "#fff"
    }
  }, _react["default"].createElement(_component.Style, {
    name: "index"
  }), _react["default"].createElement(_component.Style, {
    name: "base"
  }), children), _react["default"].createElement("footer", {
    className: "info"
  }, _react["default"].createElement("p", null, "Double-click to edit a todo"), _react["default"].createElement("p", null, "Created by ", _react["default"].createElement("a", {
    href: "http://github.com/remojansen/"
  }, "Remo H. Jansen")), _react["default"].createElement("p", null, "Part of ", _react["default"].createElement("a", {
    href: "http://todomvc.com"
  }, "TodoMVC"))));
}