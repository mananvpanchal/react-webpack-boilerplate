import React from 'react';
import TableHead from './table-head';
import TableBody from './table-body';

class Table extends React.Component {

  constructor() {
    super();
    this.onClickInCell = this.onClickInCell.bind(this);
    this.onDoubleClickInCell = this.onDoubleClickInCell.bind(this);
    this.onKeyDownInCell = this.onKeyDownInCell.bind(this);
    this.onMouseEnterInCell = this.onMouseEnterInCell.bind(this);
    this.onMouseOutFromCell = this.onMouseOutFromCell.bind(this);
    this.onMouseMoveInCell = this.onMouseMoveInCell.bind(this);
    this.state = {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: false,
      mouseOut: false, mouseMove: false,
      row: null, column: null
    };
  }

  onClickInCell(row, column) {
    this.setState(Object.assign({}, this.state, { mouseClicked: true, row, column }))
  }

  onDoubleClickInCell(row, column) {

  }

  onKeyDownInCell(row, column) {

  }

  onMouseEnterInCell(row, column) {

  }

  onMouseOutFromCell(row, column) {

  }

  onMouseMoveInCell(row, column) {

  }

  render() {
    let eventListeners={
      onClickInCell: this.onClickInCell,
      onDoubleClickInCell: this.onDoubleClickInCell,
      onKeyDownInCell: this.onKeyDownInCell,
      onMouseEnterInCell: this.onMouseEnterInCell,
      onMouseOutFromCell: this.onMouseOutFromCell,
      onMouseMoveInCell: this.onMouseMoveInCell
    };
    return (
      <table style={{ borderCollapse: "collapse" }} tabIndex={0}>
        <TableHead state={this.state} eventListeners={eventListeners} headerRows={[["A", "B", "C", "D"]]}/>
        <TableBody state={this.state} eventListeners={eventListeners}
          rows={[["a", "b", "c", "d"], ["e", "f", "g", "h"], ["i", "j", "k", "l"]]}/>
      </table>
    );
  }
}

/*style={{ border: "1px solid black" }}
*/

export default Table;
