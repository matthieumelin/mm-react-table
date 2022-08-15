import React from "react";

import styled from "styled-components";

export default function TableItem({ data }) {
  return (
    <TableRow>
      {Object.keys(data, index).map((key) => {
        return <TableData key={index}>{key}</TableData>;
      })}
    </TableRow>
  );
}

TableItem.defaultProps = {
  data: {},
};

const TableRow = styled.tr``;
const TableData = styled.td``;
