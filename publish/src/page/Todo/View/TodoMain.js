"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TodoList;

var _react = _interopRequireWildcard(require("react"));

var _hook = require("react-imvc/hook");

var _constant = require("../constant");

var _TodoItem = _interopRequireDefault(require("./TodoItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TodoList() {
  var _useModel = (0, _hook.useModel)(),
      _useModel2 = _slicedToArray(_useModel, 2),
      state = _useModel2[0],
      actions = _useModel2[1];

  var hasActiveTodo = state.todoList.some(function (todo) {
    return todo.completed === false;
  });
  var items = (0, _react.useMemo)(function () {
    var tl = state.todoList.slice();

    if (state.currentShowing === _constant.Showing.ACTIVE) {
      tl = tl.filter(function (todo) {
        return !todo.completed;
      });
    }

    if (state.currentShowing === _constant.Showing.COMPLETED) {
      tl = tl.filter(function (todo) {
        return todo.completed;
      });
    }

    return tl.map(function (todo) {
      return _react["default"].createElement(_TodoItem["default"], {
        key: todo.id,
        todo: todo,
        editing: state.editing,
        onSave: onSave,
        onDestroy: onDestory,
        onEdit: onEdit,
        onCancel: onChange,
        onToggle: onToggle
      });
    });
  }, [state.todoList, state.currentShowing, state.editing]); // item

  var onSave = function onSave(todoId, title) {
    if (state.editing === todoId) {
      var UPDATE_EDITING_TITLE = actions.UPDATE_EDITING_TITLE,
          STOP_EDITING = actions.STOP_EDITING;
      UPDATE_EDITING_TITLE(title);
      STOP_EDITING();
    }
  };

  var onDestory = function onDestory(todoId) {
    var REMOVE_TODO = actions.REMOVE_TODO,
        STOP_EDITING = actions.STOP_EDITING;
    REMOVE_TODO(todoId);
    STOP_EDITING();
  };

  var onEdit = function onEdit(todoId) {
    if (state.editing === null) {
      var START_EDITING = actions.START_EDITING;
      START_EDITING(todoId);
    }
  };

  var onChange = function onChange(todoId) {
    if (state.editing === todoId) {
      var STOP_EDITING = actions.STOP_EDITING;
      STOP_EDITING();
    }
  };

  var onToggle = function onToggle(todoId) {
    var TOGGLE_ONE = actions.TOGGLE_ONE;
    TOGGLE_ONE(todoId);
  }; // all


  var toggleAll = function toggleAll() {
    var TOGGLE_ALL = actions.TOGGLE_ALL;
    var completed = !state.todoList.every(function (todo) {
      return todo.completed;
    });
    TOGGLE_ALL(completed);
  };

  return _react["default"].createElement("section", {
    className: "main"
  }, _react["default"].createElement("input", {
    id: "toggle-all",
    className: "toggle-all",
    type: "checkbox",
    onChange: toggleAll,
    checked: hasActiveTodo
  }), _react["default"].createElement("label", {
    htmlFor: "toggle-all"
  }, "Mark all as complete"), _react["default"].createElement("ul", {
    className: "todo-list"
  }, items));
}