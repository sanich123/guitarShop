import {createRoot} from 'react-dom/client';
import App from './components/app/app';
import './public/css/style.css';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
);

