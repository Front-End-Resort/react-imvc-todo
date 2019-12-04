"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TodoFooter;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _hook = require("react-imvc/hook");

var _constant = require("../constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TodoFooter() {
  var _useModel = (0, _hook.useModel)(),
      _useModel2 = _slicedToArray(_useModel, 2),
      state = _useModel2[0],
      actions = _useModel2[1];

  var _useMemo = (0, _react.useMemo)(function () {
    var count = state.todoList.filter(function (todo) {
      return !todo.completed;
    }).length;
    var completedCount = state.todoList.length - count;
    return {
      count: count,
      completedCount: completedCount
    };
  }, [state.todoList]),
      count = _useMemo.count,
      completedCount = _useMemo.completedCount;

  var handleClick = function handleClick() {
    var REMOVE_COMPLETED_TODO = actions.REMOVE_COMPLETED_TODO;
    REMOVE_COMPLETED_TODO();
  };

  var handleTagClick = function handleTagClick(showing) {
    var TOGGLE_SHOWING = actions.TOGGLE_SHOWING;
    TOGGLE_SHOWING(showing);
  };

  return _react["default"].createElement("footer", {
    className: "footer"
  }, _react["default"].createElement("span", {
    className: "todo-count"
  }, _react["default"].createElement("strong", null, count), " ", count > 1 ? 'items' : 'item', " left"), _react["default"].createElement("ul", {
    className: "filters"
  }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
    onClick: function onClick() {
      return handleTagClick(_constant.Showing.ALL);
    },
    className: (0, _classnames["default"])({
      selected: state.currentShowing === _constant.Showing.ALL
    })
  }, "All")), ' ', _react["default"].createElement("li", null, _react["default"].createElement("a", {
    onClick: function onClick() {
      return handleTagClick(_constant.Showing.ACTIVE);
    },
    className: (0, _classnames["default"])({
      selected: state.currentShowing === _constant.Showing.ACTIVE
    })
  }, "Active")), ' ', _react["default"].createElement("li", null, _react["default"].createElement("a", {
    onClick: function onClick() {
      return handleTagClick(_constant.Showing.COMPLETED);
    },
    className: (0, _classnames["default"])({
      selected: state.currentShowing === _constant.Showing.COMPLETED
    })
  }, "Completed"))), completedCount > 0 && _react["default"].createElement("button", {
    className: "clear-completed",
    onClick: handleClick
  }, "Clear completed"));
}