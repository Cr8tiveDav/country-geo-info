import CountryCard from './CountryCard';

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
    <section className='countries-container'>
      {countries.map((country) => {
        return <CountryCard {...country} key={country.cca3} />;
      })}
    </section>
  );
};
export default CountryList;
