import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

// Get browser's preferred/locally stored theme
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  console.log(`prefers dark mode: ${prefersDarkMode}`);

  // Get the value of dark theme from local storage
  // Compare if it's ==='true'. Returns a boolean
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  console.log(`stored dark mode: ${storedDarkMode}`);
  return storedDarkMode || prefersDarkMode;
};

const HomeLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => getInitialDarkMode());
  console.log(isDarkMode);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  // Toggle dark mode
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', newDarkMode);
    setIsDarkMode(newDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('darkMode', isDarkMode);
  }, [isDarkMode]);
  return (
    <Wrapper>
      <div>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ isDarkMode }} />
        )}
      </div>
    </Wrapper>
  );
};
export default HomeLayout;

// Styles
const Wrapper = styled.div`
  margin-top: 7rem;
`;
