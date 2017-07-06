import React from 'react';
import TableCell from './table-cell';

const getWrappedEventListeners = (eventListeners, rowIdx, colIdx) => {
  console.log('ent list', rowIdx, colIdx);
  const eventListenersClone = Object.assign({}, eventListeners);
  const keys = Object.keys(eventListenersClone);
  const values = Object.values(eventListenersClone);
  for (let i = 0; i < keys.length; i++) {
    eventListenersClone[keys[i]] = () => {
      values[i](rowIdx, colIdx);
    };
//    console.log(eventListenersClone[keys[i]]);
  }
  return eventListenersClone;
};

class TableRow extends React.Component {

  render() {
    let tableCells = this.props.row.map((val, idx) => {
      //return <TableCell state={this.props.state} key={idx}
      //  rowIdx={this.props.rowIdx} colIdx={idx} value={val} eventListeners={this.props.eventListeners}/>
      return this.props.renderCell(
        getWrappedEventListeners(this.props.eventListeners, this.props.rowIdx, idx),
        this.props.rowIdx, 
        idx, 
        val,
        this.props.mouseClicked,
        this.props.mouseDoubleClicked,
        this.props.keyDown,
        this.props.mouseEntered,
        this.props.mouseOut,
        this.props.evtRowIdx,
        this.props.evtColIdx
      );

    });
    return (
      <tr>{tableCells}</tr>
    );
  }
}

export default TableRow;
