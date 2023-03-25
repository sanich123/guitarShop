import { renderWithProviders } from '../../../tests/test-utils';
import { screen } from '@testing-library/react';
import Reviews from './reviews';

describe('Reviews', () => {
  it('Reviews should render correctly', async () => {
    renderWithProviders(<Reviews uniq="3"/>);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(await screen.findByText(/максим/i)).toBeInTheDocument();
    expect(await screen.findByText(/Купила гитуру, прислали которая несоответствует описанию, струны плохого качества./i)).toBeInTheDocument();
  });
});
