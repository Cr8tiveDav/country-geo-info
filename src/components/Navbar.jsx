import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { isDarkMode } = useGlobalContext();
  return (
    <nav className='nav-container'>
      <div className='nav-center'>
        <h5>Where is the world?</h5>

        {isDarkMode ? (
          <button type='button' className='mode-btn'>
            <MdOutlineLightMode /> <p>Light mode</p>{' '}
          </button>
        ) : (
          <button type='button' className='mode-btn'>
            <MdOutlineDarkMode /> <p>Dark mode</p>
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
