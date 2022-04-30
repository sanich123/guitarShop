import App from './components/app/app';
import './public/css/style.css';
import { Provider } from 'react-redux';
import { setupStore } from '../src/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as Element;
const root = createRoot(container);
root.render(
  <Provider store={setupStore()}>
    <ToastContainer />
    <App />
  </Provider>,
);

