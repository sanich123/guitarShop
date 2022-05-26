import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { renderWithProviders } from '../../../tests/test-utils';
import Properties from './properties';

describe('Properties', () => {
  const history = createMemoryHistory();
  it('Properties should render correctly', () => {
    history.push('/guitar/3?description=characteristics');
    renderWithProviders(<Properties vendorCode={'Putins guitar'} stringCount={8} description={'Some fucking guitar'} type={'ukulele'}/>);
    expect(screen.getByText(/характеристики/i)).toBeInTheDocument();
    expect(screen.getByText(/описание/i)).toBeInTheDocument();
  });
});
