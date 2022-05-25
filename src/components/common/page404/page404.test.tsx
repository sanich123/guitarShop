import { renderWithProviders } from '../../../tests/test-utils';
import { screen } from '@testing-library/react';
import Page404 from './page404';

describe('Page404', () => {
  it('Page404 should render correctly', () => {
    renderWithProviders(<Page404/>);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/сильно старались, но не смогли найти запрашиваемую страницу/i)).toBeInTheDocument();
  });
});
