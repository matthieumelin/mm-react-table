import React, { useState } from "react";

import PropTypes from "prop-types";

import InputSearch from "./components/InputSearch";
import SelectEntries from "./components/SelectEntries";
import EntriesInfo from "./components/EntriesInfo";
import Pagination from "./components/Pagination";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";

import styled from "styled-components";

import { camalize } from "./utils/Formatter";

const itemMatchesFilter = (data, word) => {
  let res = false;
  Object.keys(data).some((key) => {
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
  const camalizeAttribute = camalize(attribute);
  const textA = a[camalizeAttribute] instanceof String ? a[camalizeAttribute].toLowerCase() : String(a[camalizeAttribute]);
  const textB = b[camalizeAttribute] instanceof String ? b[camalizeAttribute].toLowerCase() : String(b[camalizeAttribute]);

  let res;

  if (textA === "" || textB === "") {
    return textA === "" ? (textB === "" ? 0 : 1) : -1;
  } else {
    res = textA < textB ? -1 : textA > textB ? 1 : 0;
  }
  return res === 0 ? res : order ? res : -res;
};

export default function Table({ datas, attributes }) {
  const [filter, setFilter] = useState([""]);
  const [sorterAttribute, setSorterAttribute] = useState(
    attributes[0].name || ""
  );
  const [sorterOrder, setSorterOrder] = useState(true);
  const [maxEntryNumber, setMaxEntryNumber] = useState(10);
  const [startIndex, setStartIndex] = useState(0);

  const filteredDataList = datas.length
    ? datas.filter((data) => listFiltering(data, filter))
    : [];

  const onUpdateSorting = (sortingAttribute, sortingOrder) => {
    setSorterAttribute(sortingAttribute);
    setSorterOrder(sortingOrder);
  };

  const children = filteredDataList.length
    ? filteredDataList
        .filter((data) => listFiltering(data, filter))
        .sort((a, b) => {
          return listSorting(a, b, sorterAttribute, sorterOrder);
        })
        .slice(startIndex, +startIndex + +maxEntryNumber)
        .map((data, index) => <TableItem key={index} data={data} />)
    : [];

  return (
    <StyledTable>
      <TableAside>
        <SelectEntries onSetInput={(value) => setMaxEntryNumber(value)} />
        <InputSearch onSetInput={(value) => setFilter(value)} />
      </TableAside>
      <TableContainer>
        <TableHeader
          attributes={attributes}
          onUpdateSorting={onUpdateSorting}
        />
        <TableBody>{children}</TableBody>
      </TableContainer>
      <TableAside>
        <EntriesInfo
          maxEntriesAmount={maxEntryNumber}
          startIndex={startIndex}
          listLength={datas.length}
          isFiltered={filter.length && filter[0] !== "" ? true : false}
          filteredListLength={filteredDataList.length}
        />
        <Pagination
          maxEntriesAmount={maxEntryNumber}
          listLength={filteredDataList.length}
          onSetPage={(value) => setStartIndex(value * maxEntryNumber)}
        />
      </TableAside>
    </StyledTable>
  );
}

Table.propTypes = {
  datas: PropTypes.array,
  attributes: PropTypes.array,
};

Table.defaultProps = {
  datas: [],
  attrutes: [],
};

const StyledTable = styled.div`
  margin: 0 20px;
`;
const TableAside = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const TableContainer = styled.table`
  background-color: white;
  overflow-x: auto;
  padding: 20px;
  border-radius: 2px;
  width: 100%;
`;
const TableBody = styled.tbody``;
