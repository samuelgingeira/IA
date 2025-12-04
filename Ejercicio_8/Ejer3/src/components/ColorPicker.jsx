import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default React.memo(function ColorPicker(){
  const { theme: { primaryColor }, setPrimaryColor } = useContext(ThemeContext);
  return (
    <div>
      <label>Color primario</label>
      <input type="color" value={primaryColor} onChange={(e)=> setPrimaryColor(e.target.value)} />
    </div>
  );
});
