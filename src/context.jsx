import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import data from './data';
import { TOGGLE_MODE, INPUT } from './action';

const defaultState = {
  isDarkMode: false,
  countries: data,
  input: '',
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // Updates input
  const handleInput = (e) => {
    dispatch({ type: INPUT, payload: { e } });
  };
  return (
    <AppContext.Provider value={{ ...state, handleInput }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

// Custom hook
export const useGlobalContext = () => useContext(AppContext);
