import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import SortDirection from './sort-direction';

const setNeedToReset = jest.fn();
const setDirection = jest.fn();

describe('SortDirection', () => {
  it('SortDirection should render correctly', () => {
    renderWithProviders(
      <SortDirection
        setNeedToReset={setNeedToReset}
        setDirection={setDirection}
        isError={false}
        needToReset={false}
        direction={'asc'}
      />,
    );
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByLabelText(/по возрастанию/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/по убыванию/i)).toBeInTheDocument();
  });
});

