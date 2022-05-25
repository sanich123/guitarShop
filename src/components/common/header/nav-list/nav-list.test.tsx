import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import NavList from './nav-list';

describe('NavList header', () => {
  it('NavList should render correctly', () => {
    renderWithProviders(<NavList/>);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/каталог/i)).toBeInTheDocument();
  });
});
