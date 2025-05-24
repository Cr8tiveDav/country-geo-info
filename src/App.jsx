import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { loader as landingLoader } from './pages/Landing';
import { loader as countryLoader } from './pages/CountryDetails';
import {
  HomeLayout,
  Landing,
  CountryDetails,
  Error,
  SinglePageError,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'country/:code', // Get everything after the "/"
        element: <CountryDetails />,
        errorElement: <SinglePageError />,
        loader: countryLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};
export default App;
