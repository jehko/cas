import { combineReducers } from 'redux';
import { SET_DEVICES } from './actions';

const STATE = {
  devices: [],
};

type STATE = { devices: [] | null };
type ACTION = { type: string; payload: object | string };

const devReducer = (state = STATE, action: ACTION) => {
  switch (action.type) {
    case SET_DEVICES:
      return { ...state, devices: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  devReducer,
});

export default rootReducer;
