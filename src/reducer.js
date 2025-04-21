import { TOGGLE_MODE, INPUT } from './action';

const reducer = (state, action) => {
  if (action.type === INPUT) {
    console.log(action);
    const value = action.payload.e.target.value;
    return { ...state, input: value };
  }
  throw new Error(`No matching action type: ${action.type}`);
};

export default reducer;
