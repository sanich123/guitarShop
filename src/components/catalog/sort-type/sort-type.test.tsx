import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import SortType from './sort-type';

const setNeedToReset = jest.fn();
const setSortPopular = jest.fn();

describe('SortType', () => {
  it('SortType should render correctly', () => {
    renderWithProviders(
      <SortType
        setNeedToReset={setNeedToReset}
        setSortPopular={setSortPopular}
        isError={false}
        needToReset={false}
        sortPopular={'price'}
      />);
    expect(screen.getByLabelText(/по цене/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/по популярности/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
