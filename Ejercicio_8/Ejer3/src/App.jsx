import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemePanel from './components/ThemePanel';
import ButtonPreview from './components/previews/ButtonPreview';
import TextPreview from './components/previews/TextPreview';
import CardPreview from './components/previews/CardPreview';

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ display: 'flex', gap: 24, padding: 20 }}>
        <ThemePanel />
        <main style={{ flex: 1 }}>
          <h2>Vista previa</h2>

          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <ButtonPreview />
            <TextPreview />
            <div style={{ width: 300 }}>
              <CardPreview />
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
