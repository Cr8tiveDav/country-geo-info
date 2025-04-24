import { FaArrowLeftLong } from 'react-icons/fa6';
import { useGlobalContext } from '../context';
import { nanoid } from 'nanoid';

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
            <button
              type='button'
              onClick={closeCountryDetails}
              className='details-btn back-btn'
            >
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
              <p style={{ marginBottom: '2rem' }}>
                <span>capital:</span> {capital}
              </p>

              <p>
                <span>top level domain:</span> {topLevelDomain}
              </p>
              <p>
                <span>currencies: {currency}</span>
              </p>

              <p style={{ marginBottom: '2rem' }}>
                <span>languages:</span>
                {languages.map((language) => {
                  const { name } = language;
                  return <span key={nanoid()}> {name},</span>;
                })}
              </p>

              <section className='border-container'>
                <p>
                  <span>border countries:</span>
                </p>
                <div className='borders ' style={{ marginTop: '1rem' }}>
                  {borders.map((border) => {
                    return (
                      <button
                        type='button'
                        className='details-btn'
                        key={nanoid()}
                      >
                        {border}
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          </article>
        </section>
      )}
    </>
  );
};
export default CountryDetails;
