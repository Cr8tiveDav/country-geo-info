import { Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src='/not-found.svg' alt='page not found' />
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    );
  }
  return <h3>Something went wrong</h3>;
};
export default Error;

// Styles
const Wrapper = styled.div`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    margin: 2rem auto;
    display: block;
  }
  a {
    text-transform: capitalize;
    color: #3fa7d6;
  }
`;
