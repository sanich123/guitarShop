/* eslint-disable no-console */
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/cart-slice';
import { Cart } from '../../../../types/types';

interface AddToCartBtnProps {
  price: number;
  id?: number;
  setActionModal: (arg: boolean) => void,
  setIsAdded: (arg: boolean) => void
}

export default function AddToCartBtn({price, id, setActionModal, setIsAdded}: AddToCartBtnProps) {
  const dispatch = useDispatch();
  console.log(localStorage);

  return (
    <button
      className="button button--red button--big modal__button modal__button--add"
      onClick={() => {
        dispatch(addToCart({ id, price }));
        setActionModal(false);
        setIsAdded(true);

        const cart = JSON.parse(localStorage.cart);
        const isInCart = cart.some((e: Cart) => e.id === id);

        console.log(cart);
        if (localStorage.cart && !isInCart) {
          localStorage.setItem('cart', JSON.stringify([...cart, { id, quantity: 1, price }]));
        }
        if (localStorage.cart && isInCart) {
          return;
        }
        if (!localStorage.cart) {
          localStorage.setItem('cart', JSON.stringify([{ id, quantity: 1, price }]));
        }
      }}
    >
      Добавить в корзину
    </button>
  );
}
