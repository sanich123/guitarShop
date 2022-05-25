import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import DeleteContinueBtns from './delete-continue-btns';

const setActionModal = jest.fn();
describe('DeleteContinueBtn', () => {
  it('DeleteContinueBtn should render correctly', () => {
    renderWithProviders(<DeleteContinueBtns setActionModal={setActionModal}/>);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByText(/удалить товар/i)).toBeInTheDocument();
    expect(screen.getByText(/продолжить покупки/i)).toBeInTheDocument();
  });
});
