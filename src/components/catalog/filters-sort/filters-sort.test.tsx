import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import { FiltersSort } from './filters-sort';

const setPageNumber = jest.fn();

describe('FiltersSort', () => {
  it('FiltersSort should render properly', () => {
    renderWithProviders(
      <FiltersSort
        pageNumber={0}
        guitarsList={[]}
        isError={false}
        setPageNumber={setPageNumber}
      />);
    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText(/фильтр/i)).toBeInTheDocument();
    expect(screen.getByText(/сортировать/i)).toBeInTheDocument();
    expect(screen.getByText(/очистить/i)).toBeInTheDocument();
    expect(screen.getAllByText(/цена/i)).toHaveLength(3);
    expect(screen.getByLabelText(/минимальная цена/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/максимальная цена/i)).toBeInTheDocument();
    expect(screen.getByText(/тип гитар/i)).toBeInTheDocument();
    expect(screen.getByText(/акустические гитары/i)).toBeInTheDocument();
    expect(screen.getByText(/электрогитары/i)).toBeInTheDocument();
    expect(screen.getByText(/укулеле/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/6/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/7/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/12/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(7);
    expect(screen.getAllByRole('spinbutton')).toHaveLength(2);
    expect(screen.getAllByRole('group')).toHaveLength(3);
  });
});
