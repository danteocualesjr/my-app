// Import React library
import React from 'react';

// Import ReactDOM for rendering React components
import ReactDOM from 'react-dom/client';

// Import global styles
import './index.css';

// Import the main App component
import App from './App';

// Create a root for React to render into, using the element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

