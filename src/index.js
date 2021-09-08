import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import UserContextProvider from './hooks/contexts/UserContex';


ReactDOM.render(
  <React.StrictMode>
    {
      // We embrace the App
    }
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);