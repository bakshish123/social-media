import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');
const rootElement = createRoot(root); // Create a root using createRoot
rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
