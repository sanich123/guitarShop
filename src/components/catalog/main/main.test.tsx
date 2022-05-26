import { renderWithProviders } from '../../../tests/test-utils';
import { screen } from '@testing-library/react';
import { Main } from './main';

describe('Main', () => {
  it('Main should render correctly', async () => {
    renderWithProviders(<Main/>);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/честер bass/i)).toBeInTheDocument();
    expect(await screen.findByText(/roman lx/i)).toBeInTheDocument();
    expect(await screen.findByText(/curt z300/i)).toBeInTheDocument();
    expect(await screen.findAllByRole('link')).toHaveLength(3);
    expect(await screen.findAllByRole('button')).toHaveLength(8);
  });
});
