import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from '../src/redux/store';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <Provider store={setupStore()}>
    <ToastContainer />
    <App />
  </Provider>,
);
