import { FaArrowLeftLong } from 'react-icons/fa6';
import { useGlobalContext } from '../context';

const CountryDetails = () => {
  const { isCardOpen, countryDetails, closeCountryDetails } =
    useGlobalContext();

  const {
    flags: { svg },
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = countryDetails;

  const { name: currency } = currencies[0];

  return (
    <>
      {isCardOpen && (
        <section className='section-details'>
          <article className='details-center'>
            <button type='button' onClick={closeCountryDetails}>
              <FaArrowLeftLong />
              back
            </button>

            <img src={svg} alt={name} />

            <div className='content'>
              <h4>{name}</h4>
              <p>
                <span>native name:</span> {nativeName}
              </p>
              <p>
                <span>population:</span> {population.toLocaleString()}
              </p>
              <p>
                <span>region:</span> {region}
              </p>
              <p>
                <span>sub region:</span> {subregion}
              </p>
              <p>
                <span>capital:</span> {capital}
              </p>

              <p>
                <span>top level domain:</span> {topLevelDomain}
              </p>
              <p>
                <span>currencies: {currency}</span>
              </p>
              <p>
                <span>languages:</span>
              </p>

              <p>
                <span>border countries:</span>
              </p>
            </div>
          </article>
        </section>
      )}
    </>
  );
};
export default CountryDetails;
