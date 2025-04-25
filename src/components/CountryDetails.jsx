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
                <strong>native name:</strong> <span>{nativeName}</span>
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
                <strong>capital:</strong> <span>{capital}</span>
              </p>

              <p>
                <strong>top level domain:</strong> <span>{topLevelDomain}</span>
              </p>
              <p>
                <strong>currencies:</strong> <span>{currency}</span>
              </p>

              <p style={{ marginBottom: '2rem' }}>
                <strong>languages:</strong>
                {languages.map((language, index) => {
                  const { name } = language;
                  return (
                    <span key={nanoid()}>
                      {' '}
                      {name}
                      {index < languages.length - 1 && ','}
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
                    return (
                      <button
                        type='button'
                        className='details-btn'
                        key={nanoid()}
                      >
                        {border}
                      </button>
                    );
                  }) || 'None'}
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
