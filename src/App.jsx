import Countries from './components/Countries';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Countries />
      </main>
    </>
  );
};
export default App;
