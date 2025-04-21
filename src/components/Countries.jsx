import { useGlobalContext } from '../context';
import { FaSearch } from 'react-icons/fa';
import Select, { components } from 'react-select';
import data from '../data';
import Country from './Country';
import { nanoid } from 'nanoid';

export const CustomPlaceholder = (props) => {
  return (
    <components.Placeholder {...props}>
      <span>Filter by Region</span>
    </components.Placeholder>
  );
};

const Countries = () => {
  const { input, handleInput } = useGlobalContext();

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
    }),
    menu: (baseStyles, _state) => ({
      ...baseStyles,
      width: '60%',
      padding: '.75rem .5rem',
    }),
  };
  return (
    <section>
      <form action=''>
        <FaSearch />
        <input
          type='text'
          name='text'
          id='text'
          className='search-input'
          placeholder='Search for a country...'
          value={input}
          onChange={handleInput}
        />
      </form>
      <Select
        options={options}
        components={{ Placeholder: CustomPlaceholder }}
        styles={optionStyles}
      />
      {data.map((country) => {
        const id = nanoid();
        return <Country country={country} key={id} />;
      })}
    </section>
  );
};
export default Countries;
