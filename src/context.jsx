import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import data from './data';
import {
  TOGGLE_THEME,
  FILTER_REGION,
  COUNTRY_DETAILS,
  CLOSE_DETAILS,
} from './action';

// Get browser's preferred/locally stored theme
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;

  // Get the value of dark theme from local storage
  // Compare if it's ==='true'. Returns a boolean
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';

  return storedDarkMode || prefersDarkMode;
};

const initialState = {
  isDarkMode: false,
  data: data,
  countries: data,
  countryDetails: {},
  isCardOpen: false,
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (initialState) => ({
      ...initialState,
      isDarkMode: getInitialDarkMode(),
    })
  );

  // Filters country by region
  const regionFilter = (value) => {
    dispatch({ type: FILTER_REGION, payload: { value } });
  };

  // Displays country details
  const displayCountryDetails = (name) => {
    dispatch({ type: COUNTRY_DETAILS, payload: { name } });
  };

  // Closes country details
  const closeCountryDetails = () => {
    dispatch({ type: CLOSE_DETAILS });
  };

  // Toggles theme mode
  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  useEffect(() => {
    document.body.classList.toggle('darkMode', state.isDarkMode);
  }, [state.isDarkMode]);

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
