import React from 'react';
import { Board, Status, Moves } from '.';

export class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="game row">
          <div className="game-board col">
            <Board/>
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <Moves/>
                </div>
                <Status/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
