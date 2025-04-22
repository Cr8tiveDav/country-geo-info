import { memo } from 'react';
import { nanoid } from 'nanoid';
import { useGlobalContext } from '../context';

const Country = () => {
  const { countries } = useGlobalContext();

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
          <article className='card' key={nanoid()}>
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
                <span>capital:</span> {capital ?? 'Not Available'}
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default memo(Country);
