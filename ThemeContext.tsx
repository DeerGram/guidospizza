import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
  if (theme === "light") {
    setTheme("dark");
    document.body.classList.add("dark-theme");
  } else {
    setTheme("light");
    document.body.classList.remove("dark-theme");
  }
};

return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
