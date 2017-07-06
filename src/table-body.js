import React from 'react';
import TableRow from './table-row';

class TableBody extends React.Component {

  render() {
    let tableRows = this.props.rows.map((val, idx) => {
      return <TableRow 
        mouseClicked={this.props.mouseClicked} 
        mouseDoubleClicked={this.props.mouseDoubleClicked}
        keyDown={this.props.keyDown}
        mouseEntered={this.props.mouseEntered}
        mouseOut={this.props.mouseOut}
        evtRowIdx={this.props.evtRowIdx}
        evtColIdx={this.props.evtColIdx}
        key={idx} 
        rowIdx={idx} 
        row={val} 
        eventListeners={this.props.eventListeners}
        renderCell={this.props.renderCell}
      />
    });
    return (
      <tbody>{tableRows}</tbody>
    );
  }
}

export default TableBody;
