import React from 'react';

class TableCell extends React.Component {

  render() {
    let style={};
    if(this.props.state.mouseClicked === true
      && this.props.state.rowIdx === this.props.rowIdx
      && this.props.state.colIdx === this.props.colIdx) {
      style= { backgroundColor: "red" }
    }
    if(this.props.state.mouseEntered === true
      && this.props.state.rowIdx === this.props.rowIdx
      && this.props.state.colIdx === this.props.colIdx) {
      style= { backgroundColor: "blue" }
    }
    if(this.props.state.mouseOut === true
      && this.props.state.rowIdx === this.props.rowIdx
      && this.props.state.colIdx === this.props.colIdx) {
      style= { backgroundColor: "white" }
    }
    if(this.props.state.keyDown === true
      && this.props.state.rowIdx === this.props.rowIdx
      && this.props.state.colIdx === this.props.colIdx) {
      style= { backgroundColor: "green" }
    }
    return (
      <td tabIndex={1}
        style={style}
        onClick={() => { this.props.eventListeners.onClickInCell(this.props.rowIdx, this.props.colIdx) }}
        onKeyDown={() => { this.props.eventListeners.onKeyDownInCell(this.props.rowIdx, this.props.colIdx) }}
        onMouseEnter={() => { this.props.eventListeners.onMouseEnterInCell(this.props.rowIdx, this.props.colIdx) }}
        onMouseOut={() => { this.props.eventListeners.onMouseOutFromCell(this.props.rowIdx, this.props.colIdx) }}
        onDoubleClick={() => { this.props.eventListeners.onDoubleClickInCell(this.props.rowIdx, this.props.colIdx) }}
      >
        {this.props.value}
      </td>
    );
  }
}

export default TableCell;
