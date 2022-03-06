import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './public/css/style.css';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
