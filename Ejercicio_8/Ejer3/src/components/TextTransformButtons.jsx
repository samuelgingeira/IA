import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default React.memo(function TextTransformButtons() {
  const { theme: { textTransform }, setTextTransform } = useContext(ThemeContext);

  return (
    <div style={{ marginBottom: 12 }}>
      <label>Transformación:</label>
      <div>
        <button disabled={textTransform === 'none'} onClick={() => setTextTransform('none')}>
          Normal
        </button>

        <button disabled={textTransform === 'uppercase'} onClick={() => setTextTransform('uppercase')}>
          MAYÚSCULAS
        </button>

        <button disabled={textTransform === 'lowercase'} onClick={() => setTextTransform('lowercase')}>
          minúsculas
        </button>

        <button disabled={textTransform === 'capitalize'} onClick={() => setTextTransform('capitalize')}>
          Capitalizadas
        </button>
      </div>
    </div>
  );
});
