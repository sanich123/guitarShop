import { useDispatch, useSelector } from 'react-redux';
import { amountQuantity } from '../../../redux/cart-slice';
import { State } from '../../../types/types';
import { changeLocalStorageCart } from '../../../utils/utils';

export default function IncrementBtn({id}: {id: number}) {
  const dispatch = useDispatch();
  const inCart = useSelector(({ cart }: State) => cart);
  const [{ quantity }] = inCart.filter((cart) => cart.id === id);

  return (
    <button
      className="quantity__button"
      aria-label="Увеличить количество"
      onClick={() => {
        if (Number(quantity) < 99) {
          const value = quantity + 1;
          changeLocalStorageCart(value, id);
          dispatch(amountQuantity({ id, value }));
        }
      }}
      tabIndex={0}
    >
      <svg width="8" height="8" aria-hidden="true">
        <use xlinkHref="#icon-plus" />
      </svg>
    </button>
  );
}
