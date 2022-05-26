import { renderWithProviders } from '../../../tests/test-utils';
import { screen } from '@testing-library/react';
import Product from './product';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

describe('Product', () => {
  history.push('/guitar/3?description=characteristics');
  it('Product should render correctly', async () => {
    renderWithProviders(<Product />);
    expect(screen.getAllByText(/loading/i)).toHaveLength(2);
  });
});
