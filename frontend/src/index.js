import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelpDataContextProvider } from './context/HelpDataContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HelpDataContextProvider>
        <App />
      </HelpDataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);