import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../tests/test-utils';
import FiltersType from './filters-type';


const setFilterType = jest.fn();
const setPageNumber = jest.fn();
const setNeedToReset = jest.fn();

describe('FiltersTypes', () => {
  it('FiltersType should render correctly', () => {
    renderWithProviders(
      <FiltersType
        setFilterType={setFilterType}
        setNeedToReset={setNeedToReset}
        setPageNumber={setPageNumber}
        guitars={[]}
        isError={false}
        needToReset={false}
      />);
    expect(screen.getByLabelText(/акустические гитары/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/электрогитары/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/укулеле/i)).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(3);
    userEvent.click(screen.getByLabelText(/укулеле/i));
    expect(setPageNumber).toHaveBeenCalled();
    expect(setFilterType).toHaveBeenCalled();
  });
});
