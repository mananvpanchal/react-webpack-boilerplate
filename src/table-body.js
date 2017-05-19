import React from 'react';
import TableRow from './table-row';

class TableBody extends React.Component {

  render() {
    let tableRows = this.props.rows.map((val, idx) => {
      return <TableRow state={this.props.state} key={idx} rowIdx={idx} row={val} eventListeners={this.props.eventListeners}/>
    });
    return (
      <tbody>{tableRows}</tbody>
    );
  }
}

export default TableBody;
