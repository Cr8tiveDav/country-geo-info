import {
  TOGGLE_THEME,
  SET_INPUT,
  FORM_SUBMIT,
  SET_DATA,
  FILTER_REGION,
  COUNTRY_DETAILS,
  CLOSE_DETAILS,
  FETCH_SUCCESS,
  SEARCH_TERM,
  SEARCH_RESULT,
} from './action';

const reducer = (state, action) => {
  if (action.type === SET_INPUT) {
    const value = action.payload.e.target.value;
    return { ...state, input: value };
  }

  // Set search term
  if (action.type === SEARCH_TERM) {
    const inputValue = state.input.toLowerCase();
    return { ...state, searchTerm: inputValue, input: '' };
  }

  // Set search result
  if (action.type === SEARCH_RESULT) {
    const result = action.payload.data;
    console.log(result);
    return { ...state, countries: result };
  }

  // Fetch data
  if (action.type === FETCH_SUCCESS) {
    const data = action.payload.data;
    const constantData = action.payload.data;
    return { ...state, countries: data, fetchedCountries: constantData };
  }

  // Filter country by region
  if (action.type === FILTER_REGION) {
    const regionValue = action.payload.value;
    const countriesByRegion = state.fetchedCountries.filter(
      (country) => country.region === regionValue
    );
    console.log(countriesByRegion);
    return { ...state, countries: countriesByRegion };
  }

  // Displays country's details
  if (action.type === COUNTRY_DETAILS) {
    // Fetches country's obj by the name
    const countryItem = state.countries.find(
      (country) => country?.name?.common === action.payload.name
    );
    console.log(countryItem);
    return { ...state, isCardOpen: true, countryDetails: countryItem };
  }

  // Close country's details
  if (action.type === CLOSE_DETAILS) {
    // Closes country's and route back to home
    return { ...state, isCardOpen: false };
  }

  // Toggles the application theme
  if (action.type === TOGGLE_THEME) {
    const newDarkMode = !state.isDarkMode;
    localStorage.setItem('darkMode', newDarkMode);
    return { ...state, isDarkMode: newDarkMode };
  }
  throw new Error(`No matching action type: ${action.type}`);
};
export default reducer;
