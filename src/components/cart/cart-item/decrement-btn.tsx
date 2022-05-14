import { useDispatch, useSelector } from 'react-redux';
import { amountQuantity } from '../../../redux/cart-slice';
import { State } from '../../../types/types';
import { localStorageChanger } from '../../../utils/utils';

export default function DecrementBtn({ id }: { id: number }) {
  const dispatch = useDispatch();
  const inCart = useSelector(({ cart }: State) => cart);
  const [{ quantity }] = inCart.filter((cart) => cart.id === id);

  return (
    <button
      className="quantity__button"
      aria-label="Уменьшить количество"
      onClick={() => {
        if (Number(quantity) > 1) {
          const value = Number(quantity) - 1;
          localStorageChanger(value, id);
          dispatch(amountQuantity({ id, value }));
        }
      }}
    >
      <svg width="8" height="8" aria-hidden="true">
        <use xlinkHref="#icon-minus" />
      </svg>
    </button>
  );
}
