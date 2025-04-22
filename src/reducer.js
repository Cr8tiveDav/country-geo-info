import { SET_INPUT, FORM_SUBMIT, SET_DATA } from './action';

const reducer = (state, action) => {
  if (action.type === SET_INPUT) {
    const value = action.payload.e.target.value;
    return { ...state, input: value };
  }
  if (action.type === FORM_SUBMIT) {
    const submittedValue = state.input.trim();
    const countries = action.payload.data;
    const searchResult = countries.find(
      (country) => country.name === submittedValue
    );
    return { ...state, input: '', searchedCountry: [searchResult] };
  }
  if (action.type === SET_DATA) {
    const searchedItem = action.payload.searchedCountry;
    // Checks if searched item is > 0, else default to data
    const result = searchedItem.length > 0 ? searchedItem : action.payload.data;
    return { ...state, countries: result };
  }
  throw new Error(`No matching action type: ${action.type}`);
};
export default reducer;
