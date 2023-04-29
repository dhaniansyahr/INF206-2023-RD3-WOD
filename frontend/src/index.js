import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelpDataContextProvider } from './context/HelpDataContext';
import { DataPemesananContextProvider } from './context/DataPemesananContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HelpDataContextProvider>
        <DataPemesananContextProvider>
          <App />
        </DataPemesananContextProvider>
      </HelpDataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);