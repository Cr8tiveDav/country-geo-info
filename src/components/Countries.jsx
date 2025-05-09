import Select, { components } from 'react-select';
import data from '../data';
import Country from './Country';
import SearchBar from './SearchBar';
import { useGlobalContext } from '../context';

const Countries = () => {
  const { isDarkMode, regionFilter } = useGlobalContext();
  const region = data.map((country) => {
    const { region: countryRegion } = country;
    return countryRegion;
  });
  const uniqueRegion = [...new Set(region)];
  const options = uniqueRegion.map((region) => {
    return { value: region, label: region };
  });

  const optionStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      width: '60%',
      marginTop: '2rem',
      paddingLeft: '.5rem',
      background: isDarkMode ? '#2b3945' : '#fff',
      border: state.isFocused ? '2px solid #2684ff' : 'transparent',
      boxShadow: '0 1px 2px 1px rgba(0,0,0,0.2)',
    }),
    input: (baseStyles, _) => ({
      ...baseStyles,
      color: isDarkMode ? '#fff' : undefined,
    }),
    singleValue: (baseStyles, _) => ({
      ...baseStyles,
      color: isDarkMode ? '#fff' : '9e9e9e',
    }),
    menu: (baseStyles, _) => ({
      ...baseStyles,
      width: '60%',
      padding: '.75rem .5rem',
      color: isDarkMode ? '#fff' : undefined,
      background: isDarkMode ? '#2b3945' : '#fff',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isFocused ? '#333' : undefined,
    }),
  };
  return (
    <section className='countries-container'>
      <SearchBar />
      <Select
        options={options}
        components={{ Placeholder: CustomPlaceholder }}
        styles={optionStyles}
        className='region-select'
        onChange={(e) => regionFilter(e.value)}
      />
      <Country />
    </section>
  );
};
export default Countries;

export const CustomPlaceholder = (props) => {
  return (
    <components.Placeholder {...props}>
      <span>Filter by Region</span>
    </components.Placeholder>
  );
};
