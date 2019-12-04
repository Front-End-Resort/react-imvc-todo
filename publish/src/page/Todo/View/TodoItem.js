"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TodoItem;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

function TodoItem(_ref) {
  var todo = _ref.todo,
      editing = _ref.editing,
      onSave = _ref.onSave,
      onDestroy = _ref.onDestroy,
      onEdit = _ref.onEdit,
      onCancel = _ref.onCancel,
      onToggle = _ref.onToggle;
  var inputEl = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      editText = _useState2[0],
      setEditText = _useState2[1];

  var isSelfEditing = (0, _react.useMemo)(function () {
    return editing !== null && todo.id === editing;
  }, [todo, editing]);
  (0, _react.useEffect)(function () {
    if (isSelfEditing && inputEl.current) {
      inputEl.current.focus();
    }
  }, [isSelfEditing]);

  var handleToggle = function handleToggle() {
    onToggle(todo.id);
  };

  var handleDelete = function handleDelete() {
    onDestroy(todo.id);
  };

  var handleEdit = function handleEdit() {
    setEditText(todo.title);
    onEdit(todo.id);
  };

  var handleSubmit = function handleSubmit() {
    var title = editText;

    if (title) {
      onSave(todo.id, title);
      setEditText(title);
    } else {
      onDestroy(todo.id);
    }
  };

  var handleChange = function handleChange(event) {
    setEditText(event.target.value);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.keyCode === ESCAPE_KEY) {
      setEditText(todo.title);
      onCancel(todo.id);
    } else if (event.keyCode === ENTER_KEY) {
      handleSubmit();
    }
  };

  return _react["default"].createElement("li", {
    className: (0, _classnames["default"])({
      completed: todo.completed,
      editing: isSelfEditing
    })
  }, _react["default"].createElement("div", {
    className: "view"
  }, _react["default"].createElement("input", {
    className: "toggle",
    type: "checkbox",
    checked: todo.completed,
    onChange: handleToggle
  }), _react["default"].createElement("label", {
    onDoubleClick: handleEdit
  }, todo.title), _react["default"].createElement("button", {
    className: "destroy",
    onClick: handleDelete
  })), _react["default"].createElement("input", {
    ref: inputEl,
    className: "edit",
    value: editText,
    onBlur: handleSubmit,
    onChange: handleChange,
    onKeyDown: handleKeyDown
  }));
}