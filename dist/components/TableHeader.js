"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableHeader;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function TableHeader(_ref) {
  let {
    attributes,
    onUpdateSorting,
    sorterColor = "#677e11"
  } = _ref;
  const [sorter, setSorter] = (0, _react.useState)();
  const [order, setOrder] = (0, _react.useState)(true);

  const handleSorterChange = value => {
    if (sorter === value) {
      setOrder(!order);
      onUpdateSorting(sorter, !order);
    } else {
      setSorter(value);
      setOrder(true);
      onUpdateSorting(value, true);
    }
  };

  const children = attributes.length ? attributes.map(attribute => /*#__PURE__*/_react.default.createElement(TableHeaderCell, {
    sorterColor: sorterColor,
    isSorter: attributes.value === sorter ? true : false,
    key: attribute.value,
    onClick: () => handleSorterChange(attribute.value)
  }, attribute.name, attribute.value === sorter ? order ? /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSortDown
  }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSortUp
  }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSort
  }))) : [];
  return /*#__PURE__*/_react.default.createElement(StyledTableHeader, null, /*#__PURE__*/_react.default.createElement(TableHeaderRow, null, children));
}

TableHeader.propTypes = {
  attributes: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  onUpdateSorting: _propTypes.default.func
};

const StyledTableHeader = _styledComponents.default.thead(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

const TableHeaderCell = _styledComponents.default.th(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  text-align: left;\n  color: black;\n  border-bottom: 1px solid grey;\n"])));

const TableHeaderRow = _styledComponents.default.tr(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));