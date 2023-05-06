import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Pizza Restaurant Management System</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
