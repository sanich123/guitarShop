import { renderWithProviders } from '../../../tests/test-utils';
import { screen } from '@testing-library/react';
import { Reviews } from './reviews';

describe('Reviews', () => {
  it('Reviews should render correctly', async () => {
    renderWithProviders(<Reviews uniq="3"/>);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(await screen.findByText(/саша/i)).toBeInTheDocument();
    expect(await screen.findByText(/Легкая в плане веса, изготовлена на много аккуратнее чем советские гитары./i)).toBeInTheDocument();
  });
});
