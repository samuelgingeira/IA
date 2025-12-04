import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default React.memo(function ButtonPreview() {
  const { theme: { primaryColor, fontSize, textTransform } } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: primaryColor,
        color: '#fff',
        padding: '8px 12px',
        fontSize,
        textTransform
      }}
    >
      Botón
    </button>
  );
});
