import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import data from './data';
import {
  TOGGLE_THEME,
  FILTER_REGION,
  COUNTRY_DETAILS,
  CLOSE_DETAILS,
} from './action';

const defaultState = {
  isDarkMode: false,
  data: data,
  countries: data,
  countryDetails: {},
  isCardOpen: false,
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // Filters country by region
  const regionFilter = (value) => {
    dispatch({ type: FILTER_REGION, payload: { value } });
  };

  // Displays country details
  const displayCountryDetails = (name) => {
    dispatch({ type: COUNTRY_DETAILS, payload: { name } });
    console.log('Card is Open');
    console.log(name);
  };
  console.log(state.countryDetails);

  // Closes country details
  const closeCountryDetails = () => {
    dispatch({ type: CLOSE_DETAILS });
  };

  // Toggles theme mode
  const toggleTheme = () => {
    console.log('mode toggled');
    dispatch({ type: TOGGLE_THEME });
  };

  // useEffect(() => {
  // document.querySelector('body').classList.toggle('dark-mode');
  // }, [state.isDarkMode]);
  // console.log(state.isDarkMode);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        regionFilter,
        displayCountryDetails,
        closeCountryDetails,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

// Custom hook
export const useGlobalContext = () => useContext(AppContext);
