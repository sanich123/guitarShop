import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import { Header } from './header';

describe('Header', () => {
  it('Header should render correctly', () => {
    renderWithProviders(<Header/>);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
