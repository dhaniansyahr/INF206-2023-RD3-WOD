import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelpDataContextProvider } from './context/HelpDataContext';
import { DataPemesananContextProvider } from './context/DataPemesananContext';
import { AuthContextProvider } from './context/AuthContext';
import { DataPembayaranContextProvider } from './context/DataPembayaranContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HelpDataContextProvider>
        <DataPemesananContextProvider>
          <DataPembayaranContextProvider>
            <App />
          </DataPembayaranContextProvider>
        </DataPemesananContextProvider>
      </HelpDataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);