import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { setupStore } from '../../redux/store';
import App from './app';
const history = createBrowserHistory();
describe('App', () => {
  it('App should render properly', async () => {
    render(
      <Provider store={setupStore()}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/честер bass/i)).toBeInTheDocument();
    expect(await screen.findByText(/roman lx/i)).toBeInTheDocument();
    expect(await screen.findByText(/curt z300/i)).toBeInTheDocument();
    expect(await screen.findAllByRole('link')).toHaveLength(20);
    expect(await screen.findAllByRole('button')).toHaveLength(9);
  });

  it('Should correctly response on bad url', async () => {
    history.push('j/lkjdfo');
    render(
      <Provider store={setupStore()}>
        <App/>
      </Provider>);
    expect(screen.getByText(/сильно старались, но не смогли найти запрашиваемую страницу/i)).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    userEvent.click(link);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/честер bass/i)).toBeInTheDocument();
  });
});
