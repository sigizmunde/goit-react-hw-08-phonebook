import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import 'normalize.css';
import './index.css';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; // axios initialization here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
