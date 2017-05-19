import React from 'react';
import TableHeadCell from './table-head-cell';

class TableHeadRow extends React.Component {

  render() {
    let tableHeadCells = this.props.headerRow.map((val, idx) => {
      return <TableHeadCell key={idx} value={val} />
    });
    return (
      <tr>{tableHeadCells}</tr>
    );
  }
}

export default TableHeadRow;
