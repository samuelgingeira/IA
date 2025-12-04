import React, { useContext, useMemo } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default React.memo(function CardPreview(){
  const { theme: { primaryColor, fontSize, textTransform } } = useContext(ThemeContext);

  const shadowColor = useMemo(() => {
    function darken(hex, percent=15) {
      const n = hex.replace('#','');
      const num = parseInt(n, 16);
      let r = (num >> 16) - (255 * percent/100);
      let g = ((num >> 8) & 0x00FF) - (255 * percent/100);
      let b = (num & 0x0000FF) - (255 * percent/100);
      r = Math.max(0, Math.round(r));
      g = Math.max(0, Math.round(g));
      b = Math.max(0, Math.round(b));
      return '#' + (r.toString(16).padStart(2,'0') + g.toString(16).padStart(2,'0') + b.toString(16).padStart(2,'0'));
    }
    return darken(primaryColor, 12);
  }, [primaryColor]);

  return (
    <div style={{
      border: `1px solid ${shadowColor}`,
      background: primaryColor,
      fontSize: `${fontSize}px`,
      textTransform
    }}>
      <h3>Card preview</h3>
      <p>Este es un contenido de ejemplo</p>
    </div>
  );
});
