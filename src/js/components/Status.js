import React from 'react';
import { connect } from "react-redux";
import { calculateWinner } from '../helpers'

const mapStateToProps = state => {
  const history = state.history;
  const current = history[state.stepNumber];
  let status;
  const winner = calculateWinner(current.squares);
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${(state.xIsNext ? 'X' : 'O')}`;
  }
  return { status: status };
};

const ConnectedStatus = ({ status }) => (
  <div className="col">
    <div className="alert alert-success">
      {status}
    </div>
  </div>
);

export const Status = connect(mapStateToProps)(ConnectedStatus);
