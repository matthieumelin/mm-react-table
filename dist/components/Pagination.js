"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const generatePageButtonList = (pageAmount, actualPage) => {
  if (pageAmount <= 5) {
    const res = [];

    for (let i = 0; i < pageAmount; i++) {
      res.push(i + 1);
    }

    return res;
  } else {
    if (actualPage <= 2) {
      return [1, 2, 3, "...", pageAmount];
    } else if (actualPage >= pageAmount - 1) {
      return [1, 2, "...", pageAmount - 1, pageAmount];
    } else {
      return [1, "...", actualPage, "...", pageAmount];
    }
  }
};

function Pagination(_ref) {
  let {
    maxEntriesAmount,
    listLength,
    onSetPage,
    bgColor = "#677e11",
    bgHoverColor = "#94ac1b"
  } = _ref;
  const [page, setPage] = (0, _react.useState)(1);
  const amountOfPage = listLength > maxEntriesAmount ? Math.ceil(listLength / maxEntriesAmount) : 1;
  const pageButtons = generatePageButtonList(amountOfPage, page);

  if (page > amountOfPage) {
    setPage(amountOfPage);
    onSetPage(amountOfPage - 1);
  }

  return /*#__PURE__*/_react.default.createElement(StyledPagination, null, page > 1 ? /*#__PURE__*/_react.default.createElement(PaginationButton, {
    bgColor: bgColor,
    bgHoverColor: bgHoverColor,
    disabled: page === 1 ? true : false,
    onClick: () => {
      const previousPage = page > 1 ? page - 1 : page;
      setPage(previousPage);
      onSetPage(previousPage - 1);
    }
  }, "Previous") : null, pageButtons.map((value, index) => {
    return /*#__PURE__*/_react.default.createElement(PaginationButton, {
      bgColor: bgColor,
      bgHoverColor: bgHoverColor,
      disabled: value === "..." ? true : false,
      key: index + 1,
      onClick: () => {
        setPage(value);
        onSetPage(value - 1);
      }
    }, value);
  }), page < amountOfPage ? /*#__PURE__*/_react.default.createElement(PaginationButton, {
    bgColor: bgColor,
    bgHoverColor: bgHoverColor,
    disabled: page === amountOfPage ? true : false,
    onClick: () => {
      const nextPage = page < amountOfPage ? page + 1 : page;
      setPage(nextPage);
      onSetPage(nextPage - 1);
    }
  }, "Next") : null);
}

Pagination.propTypes = {
  maxEntriesAmount: _propTypes.default.number,
  listLength: _propTypes.default.number,
  onSetPage: _propTypes.default.func
};
Pagination.defaultProp = {
  maxEntriesAmount: 10,
  listLength: 0
};

const StyledPagination = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 10px;\n"])));

const PaginationButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 5px 10px;\n  background-color: ", ";\n  color: white;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: 0.5s;\n\n  &:hover {\n    transition: 0.5s;\n    background-color: ", ";\n  }\n"])), props => props.bgColor, props => props.bgHoverColor);