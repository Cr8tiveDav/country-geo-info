import { Link, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { customFetch } from '../customFetch';
import { nanoid } from 'nanoid';

export const loader = async ({ params }) => {
  const { code } = params; // Get country cca3 code from loader params
  const { data } = await customFetch(`/alpha/${code}`);
  const { data: countries } = await customFetch('/all');
  return { code, data, countries };
};

const CountryDetails = () => {
  const { data, countries } = useLoaderData();

  const country = data[0];

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
  } = country;

  const nativeNameKey = Object.keys(name?.nativeName)?.[0];
  const nativeNameValue = name?.nativeName?.[nativeNameKey]?.common;

  const currencyKey = Object.keys(currencies);
  const currency = currencies?.[currencyKey]?.name;

  const languageKeys = Object.keys(languages);
  const languageValues = languageKeys.map((language) => {
    return languages?.[language];
  });
  return (
    <Wrapper>
      <section className='section-details'>
        <article className='details-center'>
          <Link to='/' className='details-btn close-btn'>
            <FaArrowLeftLong />
            Back
          </Link>

          <div className='details'>
            <img src={flags?.svg} alt={name?.common} className='img' />

            <div className='content'>
              <h4>{name?.common}</h4>

              <div className='content-row'>
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
                <p className='para-divider'>
                  <strong>capital:</strong> <span>{capital?.[0]}</span>
                </p>

                <p>
                  <strong>top level domain:</strong>{' '}
                  <span style={{ textTransform: 'lowercase' }}>{tld?.[0]}</span>
                </p>
                <p>
                  <strong>currencies:</strong> <span>{currency}</span>
                </p>

                <p className='para-divider'>
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
              </div>
              {/* Border */}
              <section className='border-container'>
                <p>
                  <strong>border countries:</strong>
                </p>
                <div className='borders ' style={{ marginTop: '1rem' }}>
                  {borders?.map((border) => {
                    const match = countries.find((country) => {
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
                </div>
              </section>
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};
export default CountryDetails;

// Styles
const Wrapper = styled.section`
  h1 {
    margin-top: 5rem;
  }
`;
