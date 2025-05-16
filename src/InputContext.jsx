import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import { SET_INPUT, SEARCH_TERM } from './action';

const initialState = {
  input: '',
  searchTerm: '',
};
export const FormContext = createContext();

const InputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get searchTerm
  const handleSearch = (e) => {
    dispatch({ type: SET_INPUT, payload: { e } });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.input.trim()) return;
    dispatch({ type: SEARCH_TERM });
  };

  return (
    <FormContext.Provider
      value={{ state, handleSearch, handleSubmit, dispatch }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default InputProvider;

// Custom hook
export const useFormContext = () => useContext(FormContext);
