// reducer.js
import { UPDATE_ADDRESS, UPDATE_AMOUNT } from './actions';

const initialState = {
 address: '',
 amount: 0,
};

const transferReducer = (state = initialState, action) => {
 switch (action.type) {
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case UPDATE_AMOUNT:
      return { ...state, amount: action.payload };
    default:
      return state;
 }
};

export default transferReducer;
