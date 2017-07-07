import React from 'react';
import TableHead from './table-head';
import TableBody from './table-body';

class Table extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.state = {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: false,
      mouseOut: false, rowIdx: null, colIdx: null
    };
  }

  onClick(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: true, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: false,
      mouseOut: false, rowIdx, colIdx
    }))
  }

  onDoubleClick(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: false, mouseDoubleClicked: true,
      keyDown: false, mouseEntered: false,
      mouseOut: false, rowIdx, colIdx
    }))
  }

  onKeyDown(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: true, mouseEntered: false,
      mouseOut: false, rowIdx, colIdx
    }))
  }

  onMouseEnter(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: true,
      mouseOut: false, rowIdx, colIdx
    }))
  }

  onMouseOut(rowIdx, colIdx) {
    this.setState(Object.assign({}, this.state, {
      mouseClicked: false, mouseDoubleClicked: false,
      keyDown: false, mouseEntered: false,
      mouseOut: true, rowIdx, colIdx
    }))
  }

  render() {
    let eventListeners={
      onClick: this.onClick,
      onDoubleClick: this.onDoubleClick,
      onKeyDown: this.onKeyDown,
      onMouseEnter: this.onMouseEnter,
      onMouseOut: this.onMouseOut
    };
    return (
      <table style={{ borderCollapse: "collapse" }}>
        <TableHead 
          mouseClicked={this.state.mouseClicked} 
          mouseDoubleClicked={this.state.mouseDoubleClicked}
          keyDown={this.state.keyDown}
          mouseEntered={this.state.mouseEntered}
          mouseOut={this.state.mouseOut}
          evtRowIdx={this.state.rowIdx}
          evtColIdx={this.state.colIdx}
          eventListeners={eventListeners} headerRows={[["A", "B", "C", "D"]]}
        />
        <TableBody 
          mouseClicked={this.state.mouseClicked} 
          mouseDoubleClicked={this.state.mouseDoubleClicked}
          keyDown={this.state.keyDown}
          mouseEntered={this.state.mouseEntered}
          mouseOut={this.state.mouseOut}
          evtRowIdx={this.state.rowIdx}
          evtColIdx={this.state.colIdx}
          eventListeners={eventListeners}
          renderCell={this.props.renderCell}
          rows={[["a", "b", "c", "d"], ["e", "f", "g", "h"], ["i", "j", "k", "l"]]}
        />
      </table>
    );
  }
}

/*style={{ border: "1px solid black" }}
*/

export default Table;
