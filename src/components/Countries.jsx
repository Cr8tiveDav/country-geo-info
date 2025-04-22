import Select, { components } from 'react-select';
import data from '../data';
import Country from './Country';
import SearchBar from './SearchBar';

const Countries = () => {
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
    <section className='countries-container'>
      <SearchBar />
      <Select
        options={options}
        components={{ Placeholder: CustomPlaceholder }}
        styles={optionStyles}
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
