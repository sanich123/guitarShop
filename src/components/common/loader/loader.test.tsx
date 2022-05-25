import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader', () => {
  it('Loader should render correctly', () => {
    render(<Loader/>);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
