import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default React.memo(function FontSizeSlider(){
  const { theme: { fontSize }, setFontSize } = useContext(ThemeContext);
  return (
    <div>
      <label>Tamaño: {fontSize}px</label>
      <input type="range" min="10" max="32" value={fontSize} onChange={(e)=> setFontSize(Number(e.target.value))} />
    </div>
  );
});
