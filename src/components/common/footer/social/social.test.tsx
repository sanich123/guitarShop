import { render, screen } from '@testing-library/react';
import Social from './social';

describe('Social links are rendered successfully', () => {
  it('Social links are rendering properly', () => {
    render(<Social/>);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getByLabelText(/skype/i)).toBeInTheDocument();
  });
});
