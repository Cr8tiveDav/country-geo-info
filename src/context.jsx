import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import data from './data';
import { TOGGLE_MODE, FILTER_REGION } from './action';

const defaultState = {
  isDarkMode: false,
  data: data,
  countries: data,
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const regionFilter = (value) => {
    dispatch({ type: FILTER_REGION, payload: { value } });
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, regionFilter }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

// Custom hook
export const useGlobalContext = () => useContext(AppContext);
