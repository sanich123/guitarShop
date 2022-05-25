import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import { Header } from './header';

describe('Header', () => {
  it('Header should render correctly', () => {
    renderWithProviders(<Header/>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(5);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/что вы ищете?/i)).toBeInTheDocument();
  });
});
