"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableItem;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function TableItem(_ref) {
  let {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(TableRow, null, Object.keys(data, index).map(key => {
    return /*#__PURE__*/_react.default.createElement(TableData, {
      key: index
    }, key);
  }));
}

TableItem.defaultProps = {
  data: {}
};

const TableRow = _styledComponents.default.tr(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

const TableData = _styledComponents.default.td(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));