"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectEntries;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function SelectEntries(_ref) {
  let {
    onSetInput
  } = _ref;
  const options = [10, 25, 50, 100];
  const [value, setValue] = (0, _react.useState)(options[0]);

  const handleSelect = event => {
    const value = JSON.parse(event.target.value);
    setValue(value);
    onSetInput(value);
  };

  return /*#__PURE__*/_react.default.createElement(StyledSelectEntries, null, /*#__PURE__*/_react.default.createElement(SelectEntriesSpan, null, "Show"), /*#__PURE__*/_react.default.createElement(SelectEntriesSelect, {
    value: value,
    onChange: event => handleSelect(event)
  }, options.map(option => {
    return /*#__PURE__*/_react.default.createElement(SelectEntriesSelectOption, {
      key: option,
      value: option
    }, option);
  })), /*#__PURE__*/_react.default.createElement(SelectEntriesSpan, null, "entries"));
}

SelectEntries.propTypes = {
  onSetInput: _propTypes.default.func
};

const StyledSelectEntries = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 5px;\n"])));

const SelectEntriesSpan = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

const SelectEntriesSelect = _styledComponents.default.select(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\noutline:none;\nfont-family:inherit;\n"])));

const SelectEntriesSelectOption = _styledComponents.default.option(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));