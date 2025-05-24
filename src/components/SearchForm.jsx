import { Form, useOutletContext } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';
import { customFetch } from '../customFetch';
import { useQuery } from '@tanstack/react-query';

const fetchCountries = () => {
  return {
    queryKey: ['countries'],
    queryFn: async () => {
      const { data } = await customFetch.get('/all');
      return data;
    },
  };
};

const SearchForm = ({ searchTerm, setSelectedRegion }) => {
  const { data } = useQuery(fetchCountries());
  const { isDarkMode } = useOutletContext();

  const regionOptions = [
    ...new Set(
      data?.map((item) => {
        return item.region;
      })
    ),
  ].map((region) => ({ value: region, label: region }));

  const optionStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
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

  return (
    <section className='form-container'>
      <Form className='form-component'>
        <FaSearch />
        <input
          type='search'
          id='text'
          name='country'
          className='search-input'
          placeholder='Search for a country...'
          defaultValue={searchTerm}
          required
        />
      </Form>
      <Select
        options={regionOptions}
        placeholder='Filter by Region'
        styles={optionStyles}
        className='region-container'
        classNamePrefix='region-select'
        onChange={(e) => setSelectedRegion(e.value.toLowerCase())}
      />
    </section>
  );
};
export default SearchForm;
