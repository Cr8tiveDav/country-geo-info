import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import data from './data';
import {
  TOGGLE_MODE,
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

  // Filter country by region
  const regionFilter = (value) => {
    dispatch({ type: FILTER_REGION, payload: { value } });
  };

  // Display country details
  const displayCountryDetails = (name) => {
    dispatch({ type: COUNTRY_DETAILS, payload: { name } });
    console.log('Card is Open');
    console.log(name);
  };

  // Close country details
  const closeCountryDetails = () => {
    dispatch({ type: CLOSE_DETAILS });
  };
  console.log(state.isCardOpen);
  console.log(state.countryDetails);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        regionFilter,
        displayCountryDetails,
        closeCountryDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

// Custom hook
export const useGlobalContext = () => useContext(AppContext);
