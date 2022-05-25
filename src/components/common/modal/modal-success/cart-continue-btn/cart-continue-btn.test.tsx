import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartContinueBtn from './cart-continue-btn';

const setIsAdded = jest.fn();
describe('CartContinueBtn', () => {
  it('CartContinueBtn should render correctly', () => {
    renderWithProviders(
      <CartContinueBtn setIsAdded={setIsAdded}/>);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByText(/перейти в корзину/i)).toBeInTheDocument();
    expect(screen.getByText(/продолжить покупки/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/продолжить покупки/i));
    expect(setIsAdded).toHaveBeenCalled();
  });
});
