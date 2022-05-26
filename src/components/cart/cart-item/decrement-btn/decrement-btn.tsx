import { useDispatch, useSelector } from 'react-redux';
import { amountQuantity } from '../../../../redux/cart-slice';
import { State } from '../../../../types/types';
import { changeLocalStorageCart } from '../../../../utils/utils';

interface DecrementBtnProps {
  setActionModal: (arg: boolean) => void,
  setDeleteId: (arg: string) => void,
  id: number,
}

export default function DecrementBtn({ id, setActionModal, setDeleteId }: DecrementBtnProps) {
  const dispatch = useDispatch();
  const inCart = useSelector(({ cart }: State) => cart);
  const [{ quantity }] = inCart.filter((cart) => cart.id === id);

  const handleClick = () => {
    if (Number(quantity) > 1) {
      const value = Number(quantity) - 1;
      changeLocalStorageCart(value, id);
      dispatch(amountQuantity({ id, value }));
    }
    if (Number(quantity) === 1) {
      setActionModal(true);
      setDeleteId(`${id}`);
    }
  };

  return (
    <button
      className="quantity__button"
      aria-label="Уменьшить количество"
      onClick={handleClick}
    >
      <svg width="8" height="8" aria-hidden="true">
        <use xlinkHref="#icon-minus" />
      </svg>
    </button>
  );
}
