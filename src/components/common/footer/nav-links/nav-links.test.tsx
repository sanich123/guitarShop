import { render, screen } from '@testing-library/react';
import NavLinks from './nav-links';

describe('NavLinks', () => {
  it('NavLinks should render correctly', () => {
    render(<NavLinks/>);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(5);
  });
});
