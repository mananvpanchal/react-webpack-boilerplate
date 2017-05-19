import React from 'react';

class TableCell extends React.Component {

  render() {
    let style={};
    if(this.props.state.row === this.props.rowIdx) {
      style= { backgroundColor: "red" }
    }
    return (
      <td tabIndex={1}
        style={style}
        onClick={() => { this.props.eventListeners.onClickInCell(this.props.rowIdx, this.props.colIdx) }}
        onMouseMove={() => { this.props.eventListeners.onMouseMoveInCell(this.props.rowIdx, this.props.colIdx) }}
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
