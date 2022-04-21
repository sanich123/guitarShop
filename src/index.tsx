import App from './components/app/app';
import './public/css/style.css';
import { Provider } from 'react-redux';
import { setupStore } from '../src/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={setupStore()}>
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById('root'),
);

