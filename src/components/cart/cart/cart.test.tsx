import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../../../redux/store';
import Cart from './cart';

describe('Cart', () => {
  it('Cart should render properly', async () => {
    render(
      <Provider store={setupStore()}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Your cart has no items/i)).toBeInTheDocument();
  });
});
