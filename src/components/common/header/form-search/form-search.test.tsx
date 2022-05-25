import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import FormSearch from './form-search';

describe('FormSearch', () => {
  it('FormSearch should render correctly', () => {
    renderWithProviders(<FormSearch/>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/что вы ищете/i)).toBeInTheDocument();
    expect(screen.getByText(/начать поиск/i)).toBeInTheDocument();
  });
});
