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
    const square = this.props.squares[this.props.id]
    const current = square && square.current ? true : false
    return (
      <button className={`square col-sm${current ? " square-current" : ""}`} onClick={() => this.props.handleClick(this.props.id)}>
        {square ? square.value : null}
      </button>
    );
  }
}

export const Square = connect(mapStateToProps, mapDispatchToProps)(ConnectedSquare);
