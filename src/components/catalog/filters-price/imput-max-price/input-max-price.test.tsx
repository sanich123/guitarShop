import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import InputMaxPrice from './input-max-price';

const setFilterMaxPrice = jest.fn();
const setPageNumber = jest.fn();
const setNeedToReset = jest.fn();

describe('InputMaxPrice', () => {
  it('InputMaxPrice should render correctly', () => {
    renderWithProviders(
      <InputMaxPrice
        setFilterMaxPrice={setFilterMaxPrice}
        biggestPrice={0}
        smallestPrice={0}
        placeholderMax={35000}
        guitars={[]}
        isError={false}
        setPageNumber={setPageNumber}
        needToReset={false}
        setNeedToReset={setNeedToReset}
      />);
    expect(screen.getByLabelText(/максимальная цена/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/35 000/i)).toBeInTheDocument();
  });
});
