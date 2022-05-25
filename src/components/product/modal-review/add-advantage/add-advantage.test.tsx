import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../tests/test-utils';
import AddAdvantage from './add-advantage';

const setAdvantage = jest.fn();

describe('AddAdvantage', () => {
  it('AddAdvantage should render correctly', () => {
    renderWithProviders(
      <AddAdvantage
        setAdvantage={setAdvantage}
        advantage={''}
        isError={false}
      />);
    const input = screen.getByLabelText(/достоинства/i);
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'p');
    expect(setAdvantage).toHaveBeenCalled();
  });
});
