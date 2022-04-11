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

  const handleClick = () => {
    dispatch(addToCart({ id, price }));
    setActionModal(false);
    setIsAdded(true);
    if (!localStorage.cart) {
      localStorage.setItem(
        'cart',
        JSON.stringify([{ id, quantity: 1, price }]),
      );
    }

    const cart = [...JSON.parse(localStorage.cart)];
    const isInCart = cart.some((guitar: Cart) => guitar.id === id);

    if (localStorage.cart && !isInCart) {
      localStorage.setItem(
        'cart',
        JSON.stringify([...cart, { id, quantity: 1, price }]),
      );
    }
  };

  return (
    <button
      className="button button--red button--big modal__button modal__button--add"
      onClick={handleClick}
    >
      Добавить в корзину
    </button>
  );
}
