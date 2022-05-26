import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../tests/test-utils';
import Price from './price';

const setActionModal = jest.fn();

describe('Price', () => {
  it('Price should render correctly', () => {
    renderWithProviders(
      <Price
        setActionModal={setActionModal}
        price={1900}
        isError={false}
      />);
    expect(screen.getByText(/1900/i)).toBeInTheDocument();
    expect(screen.getByText(/цена/i)).toBeInTheDocument();
    expect(screen.getByText(/добавить в корзину/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(setActionModal).toHaveBeenCalled();
  });

  it('Should disabled, when isError', () => {
    renderWithProviders(
      <Price setActionModal={setActionModal} price={1900} isError />);
    const btn = screen.getByRole('button');
    userEvent.click(btn);
    expect(setActionModal).not.toHaveBeenCalled();
  });
});
