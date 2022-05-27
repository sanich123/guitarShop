import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockCart, mockComments } from '../../../../mocks/mocks';
import configureStore from 'redux-mock-store';
import { CartItem } from './cart-item';

const setActionModal = jest.fn();
const setDeleteId = jest.fn();

const store = configureStore();
const mockStore = { cart: mockCart };
describe('CartItem', () => {
  it('CartItem should render correctly', () => {
    render(
      <Provider store={store(mockStore)}>
        <CartItem
          setActionModal={setActionModal}
          setDeleteId={setDeleteId}
          inCart={mockCart}
          id={1}
          name={'fuckingGuitar'}
          vendorCode={'asdf;lkj'}
          type={'putinelle'}
          description={'someDescription'}
          previewImg={'someImg'}
          stringCount={8}
          rating={6}
          price={2345}
          comments={mockComments}
        />
      </Provider>);
    expect(screen.getByText(/fuckingGuitar/i)).toBeInTheDocument();
    expect(screen.getByText(/артикул/i)).toBeInTheDocument();
    expect(screen.getByText(/8 струнная/i)).toBeInTheDocument();
    expect(screen.getByText(/7035/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
});
