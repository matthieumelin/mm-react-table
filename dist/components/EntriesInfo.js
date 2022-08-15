"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EntriesInfo;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function EntriesInfo(_ref) {
  let {
    maxEntriesAmount,
    startIndex,
    listLength,
    isFiltered,
    filteredListLength
  } = _ref;
  const startIndexText = isFiltered ? filteredListLength === 0 ? 0 : startIndex + 1 : listLength === 0 ? 0 : startIndex + 1;
  const amountOfEntries = isFiltered ? filteredListLength : listLength;
  const endIndexText = +startIndex + +maxEntriesAmount >= amountOfEntries ? amountOfEntries : +startIndex + +maxEntriesAmount;
  const amountOfEntriesTotal = listLength;
  return /*#__PURE__*/_react.default.createElement(StyledEntriesInfo, null, /*#__PURE__*/_react.default.createElement(EntriesInfoSpan, null, "Showing ", startIndexText, " to ", endIndexText, " of ", amountOfEntries, " entries"), isFiltered && /*#__PURE__*/_react.default.createElement(EntriesInfoSpan, null, " (filtered from ".concat(amountOfEntriesTotal, " total entries)")));
}

EntriesInfo.propTypes = {
  maxEntriesAmount: _propTypes.default.number,
  startIndex: _propTypes.default.number,
  listLength: _propTypes.default.number,
  isFiltered: _propTypes.default.bool,
  filteredListLength: _propTypes.default.number
};
EntriesInfo.defaultProps = {
  maxEntriesAmount: 0,
  startIndex: 0,
  listLength: 0,
  isFiltered: false,
  filteredListLength: 0
};

const StyledEntriesInfo = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

const EntriesInfoSpan = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));