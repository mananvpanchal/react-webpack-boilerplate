import React from 'react';

class TableHeadCell extends React.Component {

  render() {
    return (
      <th>{this.props.value}</th>
    );
  }
}

export default TableHeadCell;
