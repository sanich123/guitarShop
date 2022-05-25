import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import { ModalSuccess } from './modal-success';
import userEvent from '@testing-library/user-event';

const setIsAdded = jest.fn();
describe('ModalSuccess', () => {
  it('ModalSuccess should render correctly', () => {
    renderWithProviders(<ModalSuccess setIsAdded={setIsAdded} />);
    expect(screen.getByText(/товар успешно добавлен в корзину/i)).toBeInTheDocument();
    expect(screen.getByText(/перейти в корзину/i)).toBeInTheDocument();
    expect(screen.getByText(/продолжить покупки/i)).toBeInTheDocument();
    const closeBtn = screen.getByLabelText(/закрыть/i);
    expect(closeBtn).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
    userEvent.click(closeBtn);
    expect(setIsAdded).toHaveBeenCalled();
  });
});
