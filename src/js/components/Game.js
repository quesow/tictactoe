import React from 'react';
import { Board, Status, Moves } from '.';
import store from "../store";

export class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="game row">
          <div className="game-board col">
                  <button onClick={()=>console.log(store.getState())}>HAHAHA</button>
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
