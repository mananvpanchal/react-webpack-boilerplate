import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';

const renderCell = (eventListeners, rowIdx, colIdx, value, 
  mouseClicked, mouseDoubleClicked, keyDown, mouseEntered, mouseOut,
  evtRowIdx, evtColIdx) => {
  const style = { border: "1px solid black" };
  style.width='100px';
  style.height='30px';
  console.log('render', mouseClicked, evtRowIdx, evtColIdx);
  if(mouseEntered && rowIdx === evtRowIdx && colIdx === evtColIdx) {
    //console.log('mouse entered');
    style.backgroundColor = 'red';
  } else if(mouseClicked && rowIdx === evtRowIdx && colIdx === evtColIdx) {
    console.log('mouseClicked');
    style.backgroundColor = 'green';
  } else {
    style.backgroundColor = 'white';
  }
  return <td {...eventListeners} style={style} key={rowIdx+'-'+colIdx}>{value}</td>;
};

ReactDOM.render(<div><Table renderCell={renderCell} /></div>, document.getElementById('app'));
