import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';

const renderCell = (eventListeners, rowIdx, colIdx, value, 
  mouseClicked, mouseDoubleClicked, keyDown, mouseEntered, mouseOut,
  evtRowIdx, evtColIdx) => {
  const style = { border: "1px solid black" };
  style.width='100px';
  style.height='30px';
 /* if(keyDown && rowIdx === evtRowIdx && colIdx === evtColIdx) {
    style.backgroundColor = 'yellow';
  } else if(mouseDoubleClicked && rowIdx === evtRowIdx && colIdx === evtColIdx) {
    style.backgroundColor = 'blue';
  } else if(mouseClicked && rowIdx === evtRowIdx && colIdx === evtColIdx) {
    style.backgroundColor = 'green';
  } else if(mouseEntered && rowIdx === evtRowIdx && colIdx === evtColIdx) {
    style.backgroundColor = 'red';
  }*/
  if(mouseOut && rowIdx === evtRowIdx && colIdx === evtColIdx) {
    console.log('mouseOut');
    style.backgroundColor = 'red';
  }// else {
  //  style.backgroundColor = 'white';
  //}
  return <td tabIndex={1} {...eventListeners} style={style} key={rowIdx+'-'+colIdx}>{value}</td>;
};

ReactDOM.render(<div><Table renderCell={renderCell} /></div>, document.getElementById('app'));
