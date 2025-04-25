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
    control: (baseStyles, _state) => ({
      ...baseStyles,
      width: '60%',
      marginTop: '2rem',
      paddingLeft: '.5rem',
      background: isDarkMode ? '#2b3945' : '#ffffff',
      borderColor: 'transparent',
      boxShadow: '0 1px 2px 1px rgba(0,0,0,0.2)',
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: isDarkMode ? '#9e9e9e' : '',
    }),
    menu: (baseStyles, _state) => ({
      ...baseStyles,
      width: '60%',
      padding: '.75rem .5rem',
      background: isDarkMode ? '#2b3945' : '#ffffff',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      background: state.isSelected
        ? `${
            isDarkMode
              ? `${state.isSelected ? '#2684ff' : '#2b3945'}`
              : `${state.isSelected ? '#2684ff' : '#2684ff'}`
          }`
        : state.isFocused
        ? `${
            isDarkMode
              ? `${state.isFocused ? '#deebff' : ''}`
              : `${state.isFocused ? '#deebff' : '#fff'}`
          }`
        : isDarkMode
        ? '#2b3945'
        : '#fff',
      color: isDarkMode
        ? `${state.isFocused ? '#333' : ''}`
        : `${state.isFocused ? '#333' : ''}`,

      // background: isDarkMode
      //   ? `${state.isSelected ? '#2684ff' : '#2b3945'}`
      //   : `${state.isSelected ? '#2684ff' : '#2684ff'}`,
      // backgroundColor: isDarkMode
      //   ? `${state.isFocused ? '#f0f0f0' : ''}`
      //   : `${state.isFocused ? '#deebff' : '#fff'}`,
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
        onChange={(option) => regionFilter(option.value)}
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
