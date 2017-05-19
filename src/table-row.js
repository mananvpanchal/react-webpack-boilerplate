import React from 'react';
import TableCell from './table-cell';

class TableRow extends React.Component {

  render() {
    let tableCells = this.props.row.map((val, idx) => {
      return <TableCell state={this.props.state} key={idx}
        rowIdx={this.props.rowIdx} colIdx={idx} value={val} eventListeners={this.props.eventListeners}/>
    });
    return (
      <tr>{tableCells}</tr>
    );
  }
}

export default TableRow;
