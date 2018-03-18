import React from 'react';

export function Square(props) {
  return (
    <button className="square col-sm" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
