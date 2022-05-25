import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CloseBtnCart from './close-btn-cart';

const setIsAdded = jest.fn();
describe('CloseBtnCart', () => {
  it('CloseBtnCart should render correctly', () => {
    renderWithProviders(<CloseBtnCart setIsAdded={setIsAdded}/>);
    const btn = screen.getByLabelText(/закрыть/i);
    expect(btn).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    userEvent.click(btn);
    expect(setIsAdded).toHaveBeenCalled();
  });
});
