import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mockCart } from '../../../../mocks/mocks';
import InputQuantity from './input-quantity';

const store = configureStore();
const mockStore = { cart: mockCart };
describe('IncrementBtn', () => {
  it('IncrementBtn should render correctly', () => {
    render(
      <Provider store={store(mockStore)}>
        <InputQuantity id={2} />
      </Provider>,
    );
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });
});
