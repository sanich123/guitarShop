import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import { TotalInfo } from './total-info';
import {mockCart} from '../../../mocks/mocks';

describe('TotalInfo', () => {
  it('TotalInfo should render correctly', async () => {
    renderWithProviders(<TotalInfo inCart={mockCart}/>);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/всего/i)).toBeInTheDocument();
    expect(await screen.findByRole('button')).toBeInTheDocument();
    expect(await screen.findAllByText(/118300/i)).toHaveLength(2);
    expect(await screen.findByText(/скидка/i)).toBeInTheDocument();
  });
});
