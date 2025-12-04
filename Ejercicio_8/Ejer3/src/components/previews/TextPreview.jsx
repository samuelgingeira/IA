import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default React.memo(function TextPreview() {
  const { theme: { fontSize, textTransform } } = useContext(ThemeContext);

  return (
    <p style={{ fontSize, textTransform }}>
      Este es un texto de ejemplo para ver el tamaño y la transformación.
    </p>
  );
});
