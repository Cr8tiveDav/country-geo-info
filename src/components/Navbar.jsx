import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import { memo } from 'react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className='nav-container'>
      <div className='nav-center'>
        <h5>Where in the world?</h5>

        <button type='button' className='theme-btn' onClick={toggleTheme}>
          {isDarkMode ? (
            <>
              <MdOutlineLightMode /> <p>Light mode</p>
            </>
          ) : (
            <>
              <MdOutlineDarkMode /> <p>Dark mode</p>
            </>
          )}
        </button>
      </div>
    </nav>
  );
};
export default memo(Navbar);
