import { ToastContainer } from 'react-toastify';
import Countries from './components/Countries';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { useCountryDetails } from './customHooks';

const App = () => {
  const { isCardOpen } = useCountryDetails();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Countries />
        {isCardOpen && <CountryDetails />}
        {!isCardOpen && <Country />}
      </main>
      <ToastContainer position='top-center' />
    </>
  );
};
export default App;
