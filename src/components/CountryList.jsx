import CountryCard from './CountryCard';
import PaginationContainer from './PaginationContainer';

const CountryList = ({ countries, dataPending }) => {
  // console.log(countries);

  if (dataPending) {
    return (
      <section className='countries-container'>
        <div className='loading'></div>
      </section>
    );
  }

  // TODO: handle situation where search term is not found
  if (!countries) {
    return (
      <section className='countries-container'>
        <h3>No result found...</h3>
      </section>
    );
  }
  return (
    <>
      <PaginationContainer countries={countries} />
    </>
  );
};
export default CountryList;
