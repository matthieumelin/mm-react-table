"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputSearch;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function InputSearch(_ref) {
  let {
    onSetInput
  } = _ref;
  const [value, setValue] = (0, _react.useState)("");

  const splitInputToArray = input => {
    return input.split(" ");
  };

  const handleInput = event => {
    const value = event.target.value;
    setValue(value);
    onSetInput(splitInputToArray(value));
  };

  return /*#__PURE__*/_react.default.createElement(StyledInputSearch, null, /*#__PURE__*/_react.default.createElement(InputSearchLabel, {
    htmlFor: "search"
  }, "Search:"), /*#__PURE__*/_react.default.createElement(Input, {
    type: "text",
    id: "search",
    name: "Search",
    value: value,
    onChange: event => handleInput(event)
  }));
}

InputSearch.propTypes = {
  onSetInput: _propTypes.default.func
};

const StyledInputSearch = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

const InputSearchLabel = _styledComponents.default.label(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 10px 0 0;\n"])));

const Input = _styledComponents.default.input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\noutline:none;\nfont-family:inherit;\n"])));