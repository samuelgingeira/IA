import React, { createContext, useReducer, useMemo, useCallback } from 'react';
import { themeReducer, initialTheme } from '../reducers/themeReducer';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  const setPrimaryColor = useCallback((color) => dispatch({ type: 'SET_PRIMARY_COLOR', payload: color }), []);
  const setFontSize = useCallback((size) => dispatch({ type: 'SET_FONT_SIZE', payload: size }), []);
  const setTextTransform = useCallback((t) => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: t }), []);

  const value = useMemo(() => ({ theme, setPrimaryColor, setFontSize, setTextTransform }), [theme, setPrimaryColor, setFontSize, setTextTransform]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
