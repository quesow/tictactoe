import React from 'react';
import { jumpTo } from "../actions";
import { connect } from "react-redux";
import { ToggleButton } from "."

const mapStateToProps = state => {
  return { historyLength: state.history.length, reorder: state.reorder };
};

const mapDispatchToProps = dispatch => {
  return {
      jumpTo: step => dispatch(jumpTo(step))
  };
};

class ConnectedMoves extends React.Component {
  render() {
    const indexes = Array.apply(null, {length: this.props.historyLength}).map(Number.call, Number)
    const reorderedHistory = this.props.reorder ? indexes.reverse() : indexes;
    const moves = reorderedHistory.map((move) => {
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
