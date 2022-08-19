"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputSearch = _interopRequireDefault(require("./components/InputSearch"));

var _SelectEntries = _interopRequireDefault(require("./components/SelectEntries"));

var _EntriesInfo = _interopRequireDefault(require("./components/EntriesInfo"));

var _Pagination = _interopRequireDefault(require("./components/Pagination"));

var _TableHeader = _interopRequireDefault(require("./components/TableHeader"));

var _TableItem = _interopRequireDefault(require("./components/TableItem"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const itemMatchesFilter = (data, word) => {
  let res = false;
  Object.keys(data).some(key => {
    if (key !== "id" && data[key].toLowerCase().includes(word.toLowerCase())) {
      res = true;
    }
  });
  return res;
};

const listFiltering = (data, searchedWords) => {
  let res = false;

  for (const word of searchedWords) {
    res = itemMatchesFilter(data, word);
    if (!res) return false;
  }

  return res;
};

const listSorting = (a, b, attribute, order) => {
  const textA = a[attribute];
  const textB = b[attribute];
  let res;

  if (textA === "" || textB === "") {
    return textA === "" ? textB === "" ? 0 : 1 : -1;
  } else {
    res = textA < textB ? -1 : textA > textB ? 1 : 0;
  }

  return res === 0 ? res : order ? res : -res;
};

function Table(_ref) {
  let {
    datas,
    attributes
  } = _ref;
  const [filter, setFilter] = (0, _react.useState)([""]);
  const [sorterAttribute, setSorterAttribute] = (0, _react.useState)("");
  const [sorterOrder, setSorterOrder] = (0, _react.useState)(true);
  const [maxEntryNumber, setMaxEntryNumber] = (0, _react.useState)(10);
  const [startIndex, setStartIndex] = (0, _react.useState)(0);
  const filteredDataList = datas.length ? datas.filter(data => listFiltering(data, filter)) : [];

  const onUpdateSorting = (sortingAttribute, sortingOrder) => {
    setSorterAttribute(sortingAttribute);
    setSorterOrder(sortingOrder);
  };

  const children = filteredDataList.length ? filteredDataList.filter(data => listFiltering(data, filter)).sort((a, b) => {
    return listSorting(a, b, sorterAttribute, sorterOrder);
  }).slice(startIndex, +startIndex + +maxEntryNumber).map((data, index) => /*#__PURE__*/_react.default.createElement(_TableItem.default, {
    key: index,
    data: data
  })) : [];
  return /*#__PURE__*/_react.default.createElement(StyledTable, null, /*#__PURE__*/_react.default.createElement(TableAside, null, /*#__PURE__*/_react.default.createElement(_SelectEntries.default, {
    onSetInput: value => setMaxEntryNumber(value)
  }), /*#__PURE__*/_react.default.createElement(_InputSearch.default, {
    onSetInput: value => setFilter(value)
  })), /*#__PURE__*/_react.default.createElement(TableContainer, null, /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
    attributes: attributes,
    onUpdateSorting: onUpdateSorting
  }), /*#__PURE__*/_react.default.createElement(TableBody, null, children)), /*#__PURE__*/_react.default.createElement(TableAside, null, /*#__PURE__*/_react.default.createElement(_EntriesInfo.default, {
    maxEntriesAmount: maxEntryNumber,
    startIndex: startIndex,
    listLength: datas.length,
    isFiltered: filter.length && filter[0] !== "" ? true : false,
    filteredListLength: filteredDataList.length
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxEntriesAmount: maxEntryNumber,
    listLength: filteredDataList.length,
    onSetPage: value => setStartIndex(value * maxEntryNumber)
  })));
}

Table.propTypes = {
  datas: _propTypes.default.array,
  attributes: _propTypes.default.array
};
Table.defaultProps = {
  datas: [],
  attrutes: []
};

const StyledTable = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 0 20px;\n"])));

const TableAside = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n"])));

const TableContainer = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: white;\n  overflow-x: auto;\n  padding: 20px;\n  border-radius: 2px;\n  width: 100%;\n"])));

const TableBody = _styledComponents.default.tbody(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));