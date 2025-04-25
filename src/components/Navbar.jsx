import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useGlobalContext } from '../context';
import { memo } from 'react';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useGlobalContext();
  return (
    <nav className='nav-container'>
      <div className='nav-center'>
        <h5>Where in the world?</h5>

        {isDarkMode ? (
          <button type='button' className='mode-btn' onClick={toggleTheme}>
            <MdOutlineLightMode /> <p>Light mode</p>{' '}
          </button>
        ) : (
          <button type='button' className='mode-btn' onClick={toggleTheme}>
            <MdOutlineDarkMode /> <p>Dark mode</p>
          </button>
        )}
      </div>
    </nav>
  );
};
export default memo(Navbar);
