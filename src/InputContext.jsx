import { createContext, useContext, useEffect, useReducer } from 'react';
import { useGlobalContext } from './context';
import reducer from './reducer';
import { SET_INPUT, FORM_SUBMIT, SET_DATA } from './action';

const initialState = {
  input: '',
  searchedCountry: [],
};
const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { countries, data, dispatch: appDispatch } = useGlobalContext();

  // Updates input
  const handleInput = (e) => {
    dispatch({ type: SET_INPUT, payload: { e } });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.input.trim()) return;
    dispatch({ type: FORM_SUBMIT, payload: { data } });
  };

  useEffect(() => {
    appDispatch({
      type: SET_DATA,
      payload: { searchedCountry: state.searchedCountry, data },
    });
  }, [state.searchedCountry, appDispatch]);

  return (
    <InputContext.Provider value={{ ...state, handleInput, handleSubmit }}>
      {children}
    </InputContext.Provider>
  );
};
export default InputProvider;

// Custom hook
export const useInputContext = () => useContext(InputContext);
