import React from 'react';
import { Square } from '.'

export const Board = () => {
  let count = 0;
  let rows = [];
  for(let i=0;i<3;i++){
    let row = []
    for(let j=0;j<3;j++){
      row.push(<Square key={count} id={count}/>);
      count++;
    };
    rows.push(<Row key={i} squares={row}/>);
  };
  return (
    <div className="container">
      {rows}
    </div>
  );
}

const Row = ({id, squares}) => (
  <div className="board-row">
    {squares}
  </div>
);
