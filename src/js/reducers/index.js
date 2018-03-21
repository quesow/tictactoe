import { HANDLE_CLICK, JUMPT_TO } from "../constants/action-types";
import { calculateWinner } from "../helpers"

const initialState = {
  history: [{
    // squares: Array(9).fill({value:null}),
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CLICK:
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
    //   if (calculateWinner(squares) || squares[action.payload].value) {
      if (calculateWinner(squares) || squares[action.payload]) {
        return state;
      }
    //   squares[action.payload].value = state.xIsNext ? 'X' : 'O';
      squares[action.payload] = state.xIsNext ? 'X' : 'O';
      return {
        ...state,
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
      };

    case JUMPT_TO:
      return {
        ...state,
        stepNumber: action.payload,
        xIsNext: (action.payload % 2) === 0,
      };
    default:
      return state;
  }
};

export default rootReducer;
