import React from 'react';
import { connect } from "react-redux";
import { handleClick } from "../actions";

const mapStateToProps = state => {
  const history = state.history;
  const current = history[state.stepNumber];
  return { squares: current.squares };
};

const mapDispatchToProps = dispatch => {
  return {
      handleClick: id => dispatch(handleClick(id))
  };
};

class ConnectedSquare extends React.Component {
  render() {
    return (
      <button className="square col-sm" onClick={() => this.props.handleClick(this.props.id)}>
        {this.props.squares[this.props.id]}
      </button>
    );
  }
}

export const Square = connect(mapStateToProps, mapDispatchToProps)(ConnectedSquare);
