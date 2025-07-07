import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const CountryCard = ({ flags, name, cca3, population, region, capital }) => {
  return (
    <Link to={`/country/${cca3}`} className='card' key={nanoid()}>
      <div className='card-align'>
        <img src={flags?.png} alt={flags?.alt} className='img' />
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
    </Link>
  );
};
export default CountryCard;
