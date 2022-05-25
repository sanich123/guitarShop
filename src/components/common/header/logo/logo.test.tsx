import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import Logo from './logo';

describe('Logo', () => {
  it('Logo should render correctly', () => {
    renderWithProviders(<Logo/>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
