import React from "react";

import styled from "styled-components";

export default function TableItem({ data }) {
  return (
    <TableRow>
      {Object.values(data).map((value, index) => {
        return <TableData key={index}>{value}</TableData>;
      })}
    </TableRow>
  );
}

TableItem.defaultProps = {
  data: {},
};

const TableRow = styled.tr``;
const TableData = styled.td``;
