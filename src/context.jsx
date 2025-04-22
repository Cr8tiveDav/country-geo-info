import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import data from './data';
import { TOGGLE_MODE } from './action';

const defaultState = {
  isDarkMode: false,
  data: data,
  countries: data,
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

// Custom hook
export const useGlobalContext = () => useContext(AppContext);
