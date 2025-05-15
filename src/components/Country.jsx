import { memo } from 'react';
import { nanoid } from 'nanoid';
import { useCountriesData } from '../customHooks';

const Country = () => {
  const { isPending, countries, displayCountryDetails } = useCountriesData();

  if (isPending) {
    return <div className='loading'></div>;
  }
  return (
    <section className='countries-container'>
      {countries.map((country) => {
        const { flags, name, population, region, capital } = country;

        return (
          <article
            className='card'
            key={nanoid()}
            onClick={() => displayCountryDetails(name?.common)}
          >
            <div className='card-align'>
              <img src={flags?.png} alt='' className='img' />
              <div className='content'>
                <h4>{name?.common}</h4>
                <p>
                  <strong>population:</strong>{' '}
                  <span>{population.toLocaleString()}</span>
                </p>
                <p>
                  <strong>region:</strong> <span>{region}</span>
                </p>
                <p>
                  <strong>capital:</strong>{' '}
                  <span>{capital?.[0] ?? 'Not Available'}</span>
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default memo(Country);
