import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import Cart from './cart';

describe('Cart', () => {
  it('Cart should render properly', async () => {
    renderWithProviders(<Cart />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Your cart has no items/i)).toBeInTheDocument();
  });
});
