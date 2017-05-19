import React from 'react';
import TableHeadRow from './table-head-row';

class TableHead extends React.Component {

  render() {
    let tableHeadRows = this.props.headerRows.map((val, idx) => {
      return <TableHeadRow key={idx} headerRow={val} />
    });
    return (
      <thead>{tableHeadRows}</thead>
    );
  }
}

export default TableHead;
