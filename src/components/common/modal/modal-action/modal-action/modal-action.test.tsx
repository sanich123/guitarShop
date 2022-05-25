import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import { ModalAction } from './modal-action';
import { mockGuitars } from '../../../../../mocks/mocks';

const setActionModal = jest.fn();
describe('ModalAction', () => {
  it('ModalAction should render correctly', () => {
    renderWithProviders(
      <ModalAction
        guitars={mockGuitars}
        setActionModal={setActionModal}
        id={3}
      />);
    expect(screen.getByText(/roman lx/i)).toBeInTheDocument();
    expect(screen.getByText(/добавить товар в корзину/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });
});
