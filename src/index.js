import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './index.css';

// Get the root element
const root = document.getElementById('root');

// Create a root and render the app
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
