import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import { Promocode } from './promocode';

describe('Promocode', () => {
  it('Promocode should render correctly', () => {
    renderWithProviders(<Promocode/>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/Промокод на скидку/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Промокод/i)).toBeInTheDocument();
    expect(screen.getByText(/Введите свой промокод, если он у вас есть./i)).toBeInTheDocument();
    expect(screen.getByText(/Применить/i)).toBeInTheDocument();
  });
});
