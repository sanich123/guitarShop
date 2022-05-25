import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../../tests/test-utils';
import AddToCartBtn from './add-to-cart-btn';

const setActionModal = jest.fn();
const setIsAdded = jest.fn();
describe('AddToCartBtn', () => {
  it('AddToCarBtn should render correctly', () => {
    renderWithProviders(
      <AddToCartBtn
        setActionModal={setActionModal}
        price={0}
        id={9}
        setIsAdded={setIsAdded}
      />,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/добавить в корзину/i)).toBeInTheDocument();
  });
});
