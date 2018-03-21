import { HANDLE_CLICK, JUMPT_TO } from "../constants/action-types";
import { calculateWinner, notCurrentAnyMore } from "../helpers"

const initialState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // TODO: Probably state is being mutated here. Check
    case HANDLE_CLICK:
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      let squares = [...current.squares];
      if (calculateWinner(squares) || squares[action.payload]) {
        return state;
      }
      squares = notCurrentAnyMore(squares);
      squares[action.payload] = state.xIsNext ? {value: 'X', current: true}: {value: 'O', current: true};
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
