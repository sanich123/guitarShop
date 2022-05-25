import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../tests/test-utils';
import AddIssue from './add-issue';

const setIssue = jest.fn();
describe('AddIssue', () => {
  it('AddIssue should render correctly', () => {
    renderWithProviders(<AddIssue setIssue={setIssue} isError issue={'p'} />);
    expect(screen.getByLabelText(/недостатки/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'p');
    expect(setIssue).toHaveBeenCalled();
  });
});
