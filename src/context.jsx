import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import reducer from './reducer';
import { customFetch } from './customFetch';
import { useQuery } from '@tanstack/react-query';
import {
  TOGGLE_THEME,
  COUNTRY_DETAILS,
  CLOSE_DETAILS,
  FETCH_SUCCESS,
  FILTER_REGION,
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
  fetchedCountries: [],
  countries: [],
  countryDetails: {},
  isCardOpen: false,
  isError: null,
};

export const AppContext = createContext();
// Custom hook
export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (initialState) => ({
      ...initialState,
      isDarkMode: getInitialDarkMode(),
    })
  );

  // Fetch data using react-query and axios
  const { isPending, isError, data } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const { data } = await customFetch('/all');
      // console.log(data);
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: FETCH_SUCCESS, payload: { data } });
    }
  }, [data]);

  // Filter country by region
  const filterRegion = (value) => {
    dispatch({ type: FILTER_REGION, payload: { value } });
  };

  // Display country details
  const displayCountryDetails = (name) => {
    dispatch({ type: COUNTRY_DETAILS, payload: { name } });
  };

  // Close country details
  const closeCountryDetails = () => {
    dispatch({ type: CLOSE_DETAILS });
  };

  // Toggles theme mode
  const toggleTheme = useCallback(() => {
    dispatch({ type: TOGGLE_THEME });
  }, [dispatch]);

  // Toggle dark mode class when dark mode state changes
  useEffect(() => {
    document.body.classList.toggle('darkMode', state.isDarkMode);
  }, [state.isDarkMode]);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        isPending,
        filterRegion,
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
