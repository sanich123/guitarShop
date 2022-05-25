import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import CartLogo from './cart-logo';

describe('CartLogo', () => {
  it('CartLogo should render correctly', () => {
    renderWithProviders(<CartLogo/>);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/перейти в корзину/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/корзина/i)).toBeInTheDocument();
  });
});
