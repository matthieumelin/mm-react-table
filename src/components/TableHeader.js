import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

export default function TableHeader({
  attributes,
  onUpdateSorting,
  sorterColor = "#677e11",
}) {
  const [sorter, setSorter] = useState();
  const [order, setOrder] = useState(true);

  const handleSorterChange = (value) => {
    if (sorter === value) {
      setOrder(!order);
      onUpdateSorting(sorter, !order);
    } else {
      setSorter(value);
      setOrder(true);
      onUpdateSorting(value, true);
    }
  };

  const children = attributes.length
    ? attributes.map((attribute) => (
        <TableHeaderCell
          sorterColor={sorterColor}
          isSorter={attributes.value === sorter ? true : false}
          key={attribute.value}
          onClick={() => handleSorterChange(attribute.value)}
        >
          {attribute.name}
          {attribute.value === sorter ? (
            order ? (
              <FontAwesomeIcon icon={faSortDown} />
            ) : (
              <FontAwesomeIcon icon={faSortUp} />
            )
          ) : (
            <FontAwesomeIcon icon={faSort} />
          )}
        </TableHeaderCell>
      ))
    : [];

  return (
    <StyledTableHeader>
      <TableHeaderRow>{children}</TableHeaderRow>
    </StyledTableHeader>
  );
}

TableHeader.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onUpdateSorting: PropTypes.func,
};

const StyledTableHeader = styled.thead``;
const TableHeaderCell = styled.th`
  cursor: pointer;
  text-align: left;
  color: black;
  border-bottom: 1px solid grey;
`;
const TableHeaderRow = styled.tr``;
