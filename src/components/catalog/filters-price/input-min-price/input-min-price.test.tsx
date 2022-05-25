import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import InputMinPrice from './input-min-price';

const setFilterMinPrice = jest.fn();
const setPageNumber = jest.fn();
const setNeedToReset = jest.fn();

describe('InputMinPrice', () => {
  it('InputMinPrice should render correctly', () => {
    renderWithProviders(
      <InputMinPrice
        setFilterMinPrice={setFilterMinPrice}
        biggestPrice={0}
        smallestPrice={0}
        placeholderMin={1700}
        guitars={[]}
        isError={false}
        setPageNumber={setPageNumber}
        needToReset={false}
        setNeedToReset={setNeedToReset}
      />,
    );
    expect(screen.getByLabelText(/минимальная цена/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/1 700/i)).toBeInTheDocument();
  });
});
