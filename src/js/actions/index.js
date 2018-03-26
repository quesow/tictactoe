import { HANDLE_CLICK, JUMPT_TO, INVERSE } from "../constants/action-types";

export const handleClick = id => ({ type: HANDLE_CLICK, payload: id });
export const jumpTo = step => ({ type: JUMPT_TO, payload: step });
export const inverse = () => ({ type: INVERSE, payload: null });
