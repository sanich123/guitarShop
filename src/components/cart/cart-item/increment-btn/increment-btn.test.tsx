import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mockCart } from '../../../../mocks/mocks';
import IncrementBtn from './increment-btn';

const store = configureStore();
const mockStore = { cart: mockCart };
describe('IncrementBtn', () => {
  it('IncrementBtn should render correctly', () => {
    render(
      <Provider store={store(mockStore)}>
        <IncrementBtn
          id={2}
        />
      </Provider>);
    expect(screen.getByLabelText(/увеличить количество/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
