import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelpDataContextProvider } from './context/HelpDataContext';
import { DataPemesananContextProvider } from './context/DataPemesananContext';
import { AuthContextProvider } from './context/AuthContext';
import { DataPembayaranContextProvider } from './context/DataPembayaranContext';
import { DataProvider } from './context/DataContext';
import { DataPemprosesanContextProvider } from './context/DataPemprosesan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HelpDataContextProvider>
        <DataPemesananContextProvider>
          <DataPembayaranContextProvider>
            <DataProvider>
              <DataPemprosesanContextProvider>
                <App />
              </DataPemprosesanContextProvider>
            </DataProvider>
          </DataPembayaranContextProvider>
        </DataPemesananContextProvider>
      </HelpDataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);