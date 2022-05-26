import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import DecrementBtn from './decrement-btn';
import configureStore from 'redux-mock-store';
import { mockCart } from '../../../../mocks/mocks';

const setActionModal = jest.fn();
const setDeleteId = jest.fn();

const store = configureStore();
const mockStore = {cart: mockCart};
describe('DecrementBtn', () => {
  it('DecrementBtn should render correctly', () => {
    render(
      <Provider store={store(mockStore)}>
        <DecrementBtn
          setActionModal={setActionModal}
          setDeleteId={setDeleteId}
          id={2}
        />
      </Provider>);
    expect(screen.getByLabelText(/уменьшить количество/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
