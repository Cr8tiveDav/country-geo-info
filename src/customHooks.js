import { useContext } from 'react';
import { AppContext } from './context';
import { FormContext } from './InputContext';

// CUSTOM HOOKS

// Dark mode
export const useDarkMode = () => {
  const { state, toggleTheme } = useContext(AppContext);
  return { isDarkMode: state.isDarkMode, toggleTheme };
};

// Countries data
export const useCountriesData = () => {
  const { state, filterRegion, displayCountryDetails } = useContext(AppContext);
  return {
    countries: state.countries,
    fetchedCountries: state.fetchedCountries,
    displayCountryDetails,
    filterRegion,
  };
};

// Close country details
export const useCountryDetails = () => {
  const { state, closeCountryDetails } = useContext(AppContext);
  return {
    countryDetails: state.countryDetails,
    isCardOpen: state.isCardOpen,
    closeCountryDetails,
  };
};

// App dispatch
export const useAppDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return { dispatch };
};

// Form dispatch
export const useFormDispatch = () => {
  const { dispatch } = useContext(FormContext);
  return { dispatch };
};

// Form input
export const useFormQuery = () => {
  const { state, handleSearch, handleSubmit } = useContext(FormContext);
  return {
    input: state?.input,
    searchTerm: state?.searchTerm,
    handleSearch,
    handleSubmit,
  };
};
