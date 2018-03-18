import React from 'react';
import { Square } from '.'

export const Board = () => (
  <div className="container">
    <div className="board-row">
      <Square id={0}/>
      <Square id={1}/>
      <Square id={2}/>
    </div>
    <div className="board-row">
      <Square id={3}/>
      <Square id={4}/>
      <Square id={5}/>
    </div>
    <div className="board-row">
      <Square id={6}/>
      <Square id={7}/>
      <Square id={8}/>
    </div>
  </div>
);
