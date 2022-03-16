import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/cart-slice';

interface AddToCartBtnProps {
  price: number;
  id?: number;
  setActionModal: (arg: boolean) => void,
  setIsAdded: (arg: boolean) => void
}

export default function AddToCartBtn({price, id, setActionModal, setIsAdded}: AddToCartBtnProps) {
  const dispatch = useDispatch();

  return (
    <button
      className="button button--red button--big modal__button modal__button--add"
      onClick={() => {
        dispatch(addToCart({ id, price }));
        setActionModal(false);
        setIsAdded(true);
      }}
    >
      Добавить в корзину
    </button>
  );
}
