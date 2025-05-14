import { FaArrowLeftLong } from 'react-icons/fa6';
import { nanoid } from 'nanoid';
import { useCountriesData, useCountryDetails } from '../customHooks';

const CountryDetails = () => {
  const { fetchedCountries } = useCountriesData();
  const { isCardOpen, countryDetails, closeCountryDetails } =
    useCountryDetails();

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryDetails;

  const nativeNameKey = Object.keys(name?.nativeName)?.[0];
  const nativeNameValue = name?.nativeName?.[nativeNameKey]?.common;

  const currencyKey = Object.keys(currencies);
  const currency = currencies?.[currencyKey]?.name;

  const languageKeys = Object.keys(languages);
  const languageValues = languageKeys.map((language) => {
    return languages?.[language];
  });

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

            <img src={flags?.svg} alt={name?.common} />

            <div className='content'>
              <h4>{name?.common}</h4>
              <p>
                <strong>native name:</strong> <span>{nativeNameValue}</span>
              </p>
              <p>
                <strong>population:</strong>{' '}
                <span>{population.toLocaleString()}</span>
              </p>
              <p>
                <strong>region:</strong> <span>{region}</span>
              </p>
              <p>
                <strong>sub region:</strong> <span>{subregion}</span>
              </p>
              <p style={{ marginBottom: '2rem' }}>
                <strong>capital:</strong> <span>{capital?.[0]}</span>
              </p>

              <p>
                <strong>top level domain:</strong>{' '}
                <span style={{ textTransform: 'lowercase' }}>{tld?.[0]}</span>
              </p>
              <p>
                <strong>currencies:</strong> <span>{currency}</span>
              </p>

              <p style={{ marginBottom: '2rem' }}>
                <strong>languages:</strong>
                {languageValues.map((language, index) => {
                  return (
                    <span key={nanoid()}>
                      {' '}
                      {language}
                      {index < languageValues.length - 1 && ','}
                    </span>
                  );
                })}
              </p>

              <section className='border-container'>
                <p>
                  <strong>border countries:</strong>
                </p>
                <div className='borders ' style={{ marginTop: '1rem' }}>
                  {borders?.map((border) => {
                    const match = fetchedCountries.find((country) => {
                      return country.cca3 === border;
                    });
                    return (
                      <button
                        type='button'
                        className='details-btn'
                        key={nanoid()}
                      >
                        {match?.name?.common}
                      </button>
                    );
                  }) || 'None'}

                  {/* {borders?.map((border) => {
                    return (

                    );
                  }) } */}
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
