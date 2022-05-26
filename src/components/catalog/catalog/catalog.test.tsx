import { renderWithProviders } from '../../../tests/test-utils';
import { screen } from '@testing-library/react';
import Catalog from './catalog';

describe('Catalog', () => {
  it('Catalog should render correctly', () => {
    renderWithProviders(<Catalog/>);
    expect(screen.getByText(/каталог гитар/i)).toBeInTheDocument();
  });
});
