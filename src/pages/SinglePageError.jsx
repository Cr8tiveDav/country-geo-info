import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='countries-container'>
      <h4 style={{ marginTop: '5rem' }}>{error?.response?.data?.message}</h4>
    </div>
  );
};
export default SinglePageError;
