import React, { createContext, useContext } from 'react'
import { lightColors, ThemeColors } from './colors'

interface ThemeContextType {
  colors: ThemeColors;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  colors: lightColors,
});

// Custom hook to use the theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    colors: lightColors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
