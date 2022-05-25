import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../tests/test-utils';
import FiltersStrings from './filters-strings';

const setFilterString = jest.fn();
const setPageNumber = jest.fn();
const setNeedToReset = jest.fn();

describe('FiltersStrings', () => {
  it('FiltersStrings should render correctly', () => {
    renderWithProviders(
      <FiltersStrings
        setFilterString={setFilterString}
        setPageNumber={setPageNumber}
        setNeedToReset={setNeedToReset}
        guitars={[]}
        isError={false}
        needToReset={false}
      />);
    expect(screen.getByLabelText(/4/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/6/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/7/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/12/i)).toBeInTheDocument();
    expect(screen.getByText(/количество струн/i)).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(4);
    userEvent.click(screen.getByLabelText(/4/i));
    expect(setPageNumber).toHaveBeenCalled();
    expect(setFilterString).toHaveBeenCalled();
  });
});
