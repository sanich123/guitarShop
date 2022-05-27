import { mockCart } from '../../mocks/mocks';
import { Cart } from '../../types/types';
import reducer, {addToCart, amountQuantity, deleteFromCart} from './cart-slice';

describe('CartSlice', () => {
  it('Should correctly install initialState', () => {
    expect(reducer(undefined, {type: undefined})).toEqual(localStorage.cart ? ([...JSON.parse(localStorage.cart)] as Cart[]) : []);
  });

  it('Should addToCart', () => {
    const currentStore = [...mockCart, {id: 8, price: 9876, quantity: 1}];
    expect(reducer(mockCart, addToCart({ id: 8, price: 9876 }))).toEqual(currentStore);
  });

  it('Should change amountQuantity', () => {
    expect(reducer(mockCart, amountQuantity({ id: 3, value: 98 }))).toEqual(
      [
        { id: 1, price: 17500, quantity: 3 },
        { id: 2, price: 29500, quantity: 2 },
        { id: 3, price: 6800, quantity: 98 },
      ],
    );
  });

  it('Should deleteItem', () => {
    expect(reducer(mockCart, deleteFromCart({uniq: 3}))).toEqual([
      { id: 1, price: 17500, quantity: 3 },
      { id: 2, price: 29500, quantity: 2 },
    ]);
  });
});
