import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import {store,persistor} from './redux/Store'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter >
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
