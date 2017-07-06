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
    this.state = {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: false,
      mouseOut: false, rowIdx: null, colIdx: null
    };
  }

  onClickInCell(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: true, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: false,
      mouseOut: false, rowIdx, colIdx
    }))
  }

  onDoubleClickInCell(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: false, mouseDoubleClicked: true,
      keyDown: false, mouseEntered: false,
      mouseOut: false, rowIdx, colIdx
    }))
  }

  onKeyDownInCell(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: true, mouseEntered: false,
      mouseOut: false, rowIdx, colIdx
    }))
  }

  onMouseEnterInCell(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: true,
      mouseOut: false, rowIdx, colIdx
    }))
  }

  onMouseOutFromCell(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: false,
      mouseOut: true, rowIdx, colIdx
    }))
  }

  render() {
    let eventListeners={
      onClickInCell: this.onClickInCell,
      onDoubleClickInCell: this.onDoubleClickInCell,
      onKeyDownInCell: this.onKeyDownInCell,
      onMouseEnterInCell: this.onMouseEnterInCell,
      onMouseOutFromCell: this.onMouseOutFromCell
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
