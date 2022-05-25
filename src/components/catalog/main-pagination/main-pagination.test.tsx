import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import { MainPagination } from './main-pagination';

const setPageNumber = jest.fn();

describe('MainPagination', () => {
  it('MainPagination should render correctly', () => {
    renderWithProviders(
      <MainPagination
        setPageNumber={setPageNumber}
        cardsOnPage={9}
        pageNumber={1}
        count={27}
      />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(5);
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByText(/далее/i)).toBeInTheDocument();
    expect(screen.getByText(/назад/i)).toBeInTheDocument();
  });
});
