import React from 'react';
import { jumpTo } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { history: state.history };
};

const mapDispatchToProps = dispatch => {
  return {
      jumpTo: step => dispatch(jumpTo(step))
  };
};

class ConnectedMoves extends React.Component {
  render() {
    const history = this.props.history;
    const moves = history.map((step, move) => {
      const desc = move ?
      `#${move}` :
      'Start';
      return (
        <button key={move} className={"btn btn-primary btn-block"} onClick={() => this.props.jumpTo(move)}>{desc}</button>
      );
    });
    return (
      <div className="btn-group col" role="group">
        <div>{moves}</div>
      </div>
    );
  }
}

export const Moves = connect(mapStateToProps,mapDispatchToProps)(ConnectedMoves);
