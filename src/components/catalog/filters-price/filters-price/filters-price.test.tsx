import { renderWithProviders } from '../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import FiltersPrice from './filters-price';

const setFilterMinPrice = jest.fn();
const setPageNumber = jest.fn();
const setFilterMaxPrice = jest.fn();
const setNeedToReset = jest.fn();

describe('FiltersPrice', () => {
  it('FiltersPrice should render correctly', () => {
    renderWithProviders(
      <FiltersPrice
        setFilterMinPrice={setFilterMinPrice}
        setFilterMaxPrice={setFilterMaxPrice}
        guitars={[]}
        isError={false}
        setPageNumber={setPageNumber}
        needToReset={false}
        setNeedToReset={setNeedToReset}
      />);
    expect(screen.getByLabelText(/минимальная цена/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/максимальная цена/i)).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText(/0/i)).toHaveLength(2);
  });
});
