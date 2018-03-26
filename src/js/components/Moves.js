import React from 'react';
import { jumpTo } from "../actions";
import { connect } from "react-redux";
import { ToggleButton } from "."

const mapStateToProps = state => {
  return { historyLength: state.history.length, invert: state.invert };
};

const mapDispatchToProps = dispatch => {
  return {
      jumpTo: step => dispatch(jumpTo(step))
  };
};

class ConnectedMoves extends React.Component {
  render() {
    const indexes = Array.apply(null, {length: this.props.historyLength}).map(Number.call, Number)
    const invertedHistory = this.props.invert ? indexes.reverse() : indexes;
    const moves = invertedHistory.map((move) => {
      const desc = move ?
      `#${move}` :
      'Start';
      return (
        <button key={move} className={"btn btn-primary btn-block"} onClick={() => this.props.jumpTo(move)}>{desc}</button>
      );
    });
    return (
      <div className="btn-group col" role="group">
        <div>
          <ToggleButton/>
          {moves}
        </div>
      </div>
    );
  }
}

export const Moves = connect(mapStateToProps,mapDispatchToProps)(ConnectedMoves);
