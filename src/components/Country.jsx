const Country = ({ country }) => {
  const {
    flags: { svg },
    name,
    population,
    region,
    capital,
  } = country;
  return (
    <article className='card'>
      <img src={svg} alt='' className='img' />
      <div className='content'>
        <h4>{name}</h4>
        <p>
          <span>population:</span> {population.toLocaleString()}
        </p>
        <p>
          <span>region:</span> {region}
        </p>
        <p>
          <span>capital:</span> {capital}
        </p>
      </div>
    </article>
  );
};
export default Country;
