import React, { useEffect } from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';


function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
