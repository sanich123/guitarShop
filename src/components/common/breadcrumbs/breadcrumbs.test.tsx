import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import { appRoutes } from '../../../utils/const';
import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs', () => {
  it('Breadcrumbs should render properly', () => {
    renderWithProviders(<Breadcrumbs place={appRoutes.product}/>);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
  });
});
