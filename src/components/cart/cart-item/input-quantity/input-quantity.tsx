import { useDispatch, useSelector } from 'react-redux';
import { amountQuantity } from '../../../../redux/cart-slice';
import { State } from '../../../../types/types';
import { changeLocalStorageCart } from '../../../../utils/utils';

export default function InputQuantity({id}: {id: number}) {
  const dispatch = useDispatch();
  const inCart = useSelector(({ cart }: State) => cart);
  const [{ quantity }] = inCart.filter((cart) => cart.id === id);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(target.value) < 100) {
      const value = Math.abs(Number(target.value));
      changeLocalStorageCart(value, id);
      dispatch(amountQuantity({ id, value }));
    }
  };

  const handleBlur = () => {
    if (!quantity) {
      changeLocalStorageCart(1, id);
      dispatch(amountQuantity({ id, value: 1 }));
    }
  };

  const zeroChanger = `${quantity}`[0] === '0' ? '' : `${quantity}`;

  return (
    <input
      className="quantity__input"
      type="number"
      id="2-count"
      name="2-count"
      max="99"
      value={zeroChanger}
      onBlur={handleBlur}
      onChange={handleChange}
      tabIndex={0}
    />
  );
}
