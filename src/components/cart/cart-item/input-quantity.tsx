import { useDispatch, useSelector } from 'react-redux';
import { amountQuantity } from '../../../redux/cart-slice';
import { State } from '../../../types/types';
import { localStorageChanger } from '../../../utils/utils';

export default function InputQuantity({id}: {id: number}) {
  const dispatch = useDispatch();
  const inCart = useSelector(({ cart }: State) => cart);
  const [{ quantity }] = inCart.filter((cart) => cart.id === id);

  const handleValueChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(target.value) < 100) {
      const value = Math.abs(Number(target.value));
      localStorageChanger(value, id);
      dispatch(amountQuantity({ id, value }));
    }
  };

  const handleValueBlur = () => {
    if (!quantity) {
      localStorageChanger(1, id);
      dispatch(amountQuantity({ id, value: 1 }));
    }
  };

  const zeroChanger = quantity.toString()[0] === '0' ? '' : quantity.toString();

  return (
    <input
      className="quantity__input"
      type="number"
      id="2-count"
      name="2-count"
      max="99"
      value={zeroChanger}
      onBlur={handleValueBlur}
      onChange={handleValueChange}
      tabIndex={0}
    />
  );
}
