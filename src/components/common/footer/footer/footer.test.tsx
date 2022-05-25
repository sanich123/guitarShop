import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import Footer from './footer';

describe('Footer', () => {
  it('Footer should render correctly', () => {
    renderWithProviders(<Footer/>);
    expect(screen.getByText(/Магазин гитар, музыкальных инструментов и гитарная мастерская/i)).toBeInTheDocument();
    expect(screen.getByText(/режим работы/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(10);
  });
});
