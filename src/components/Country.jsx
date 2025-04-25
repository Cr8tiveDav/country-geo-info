import { memo } from 'react';
import { nanoid } from 'nanoid';
import { useGlobalContext } from '../context';

const Country = () => {
  const { countries, displayCountryDetails } = useGlobalContext();

  return (
    <>
      {countries.map((country) => {
        const {
          flags: { svg },
          name,
          population,
          region,
          capital,
        } = country;

        return (
          <article
            className='card'
            key={nanoid()}
            onClick={() => displayCountryDetails(name)}
          >
            <img src={svg} alt='' className='img' />
            <div className='content'>
              <h4>{name}</h4>
              <p>
                <strong>population:</strong>{' '}
                <span>{population.toLocaleString()}</span>
              </p>
              <p>
                <strong>region:</strong> <span>{region}</span>
              </p>
              <p>
                <strong>capital:</strong>{' '}
                <span>{capital ?? 'Not Available'}</span>
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default memo(Country);
