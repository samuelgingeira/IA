import React from 'react';
import ColorPicker from './ColorPicker';
import FontSizeSlider from './FontSizeSlider';
import TextTransformButtons from './TextTransformButtons';

export default function ThemePanel() {
  return (
    <aside style={{ width: 280, padding: 12 }}>
      <h3>Editor de tema</h3>
      <ColorPicker />
      <FontSizeSlider />
      <TextTransformButtons />
    </aside>
  );
}
