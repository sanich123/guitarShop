import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../redux/store';
import App from './app';

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
});
