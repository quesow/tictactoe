import React from 'react';
import { Board } from '.';
import { calculateWinner } from '../helpers'

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        `#${move}` :
        'Start';
      return (
        <button key={move} className={"btn btn-primary btn-block"} onClick={() => this.jumpTo(move)}>{desc}</button>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${(this.state.xIsNext ? 'X' : 'O')}`;
    }

    return (
      <div className="container">
        <div className="game row">
          <div className="game-board col">
            <Board
              squares={current.squares}
              handleClick={(i) => this.handleClick(i)}
            />

          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="btn-group" role="group">
                    <div>{moves}</div>
                  </div>
                </div>
                <div className="col">
                  <div className="alert alert-success">{status}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
