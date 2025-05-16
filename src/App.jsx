import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';
import { useCountryDetails } from './customHooks';

const App = () => {
  const { isCardOpen } = useCountryDetails();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Form />
        {!isCardOpen && <Country />}
        {isCardOpen && <CountryDetails />}
      </main>
      <ToastContainer position='top-center' />
    </>
  );
};
export default App;
