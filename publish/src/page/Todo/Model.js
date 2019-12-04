"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_EDITING_TITLE = exports.STOP_EDITING = exports.START_EDITING = exports.TOGGLE_SHOWING = exports.TOGGLE_ONE = exports.TOGGLE_ALL = exports.REMOVE_COMPLETED_TODO = exports.REMOVE_TODO = exports.ADD_TODO = exports.INITIAL_TODO_LIST = exports.initialState = void 0;

var _constant = require("./constant");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  todoList: [],
  completedTodoIds: [],
  currentShowing: _constant.Showing.ALL,
  editing: null
};
exports.initialState = initialState;

var INITIAL_TODO_LIST = function INITIAL_TODO_LIST(state, todoList) {
  return _objectSpread({}, state, {
    todoList: todoList
  });
};

exports.INITIAL_TODO_LIST = INITIAL_TODO_LIST;

var ADD_TODO = function ADD_TODO(state, todo) {
  var todoList = [todo].concat(_toConsumableArray(state.todoList));
  return _objectSpread({}, state, {
    todoList: todoList
  });
};

exports.ADD_TODO = ADD_TODO;

var REMOVE_TODO = function REMOVE_TODO(state, todoId) {
  var todoList = state.todoList.filter(function (todo) {
    return todo.id !== todoId;
  });
  return _objectSpread({}, state, {
    todoList: todoList
  });
};

exports.REMOVE_TODO = REMOVE_TODO;

var REMOVE_COMPLETED_TODO = function REMOVE_COMPLETED_TODO(state) {
  var todoList = state.todoList.filter(function (todo) {
    return !todo.completed;
  });
  return _objectSpread({}, state, {
    todoList: todoList
  });
};

exports.REMOVE_COMPLETED_TODO = REMOVE_COMPLETED_TODO;

var TOGGLE_ALL = function TOGGLE_ALL(state, completed) {
  var todoList = state.todoList.map(function (todo) {
    return _objectSpread({}, todo, {
      completed: completed
    });
  });
  return _objectSpread({}, state, {
    todoList: todoList
  });
};

exports.TOGGLE_ALL = TOGGLE_ALL;

var TOGGLE_ONE = function TOGGLE_ONE(state, todoId) {
  var todoList = state.todoList.map(function (todo) {
    if (todo.id !== todoId) return todo;
    return _objectSpread({}, todo, {
      completed: !todo.completed
    });
  });
  return _objectSpread({}, state, {
    todoList: todoList
  });
};

exports.TOGGLE_ONE = TOGGLE_ONE;

var TOGGLE_SHOWING = function TOGGLE_SHOWING(state, currentShowing) {
  return _objectSpread({}, state, {
    currentShowing: currentShowing
  });
};

exports.TOGGLE_SHOWING = TOGGLE_SHOWING;

var START_EDITING = function START_EDITING(state, editing) {
  return _objectSpread({}, state, {
    editing: editing
  });
};

exports.START_EDITING = START_EDITING;

var STOP_EDITING = function STOP_EDITING(state) {
  return _objectSpread({}, state, {
    editing: null
  });
};

exports.STOP_EDITING = STOP_EDITING;

var UPDATE_EDITING_TITLE = function UPDATE_EDITING_TITLE(state, title) {
  var todoList = state.todoList.map(function (todo) {
    if (todo.id !== state.editing) return todo;
    return _objectSpread({}, todo, {
      title: title
    });
  });
  return _objectSpread({}, state, {
    todoList: todoList
  });
};

exports.UPDATE_EDITING_TITLE = UPDATE_EDITING_TITLE;