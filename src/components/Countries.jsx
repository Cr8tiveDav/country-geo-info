import Select from 'react-select';
import SearchBar from './SearchBar';
import { useGlobalContext } from '../context';
import { useQuery } from '@tanstack/react-query';
import { customFetch } from '../customFetch';
import { useFormContext } from '../InputContext';
import { useEffect } from 'react';
import { FILTER_REGION } from '../action';
import { useCountriesData, useDarkMode } from '../customHooks';

const Countries = () => {
  const { fetchedCountries, filterRegion } = useCountriesData();
  const { isDarkMode } = useDarkMode();

  const optionStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      // width: '60%',
      // marginTop: '2rem',
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
      // width: '60%',
      padding: '.75rem .5rem',
      color: isDarkMode ? '#fff' : undefined,
      background: isDarkMode ? '#2b3945' : '#fff',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isFocused ? '#333' : undefined,
      cursor: 'pointer',
    }),
  };

  const regions = fetchedCountries.map((country) => country.region);
  const uniqueRegion = [...new Set(regions)];
  // React select options
  // Create an object key-value pairs of value and label
  const options = uniqueRegion.map((region) => ({
    value: region,
    label: region,
  }));

  return (
    <section className='form-container'>
      <SearchBar />
      <Select
        options={options}
        placeholder='Filter by Region'
        styles={optionStyles}
        className='region-container'
        classNamePrefix='region-select'
        onChange={(e) => filterRegion(e.value)}
      />
    </section>
  );
};
export default Countries;
