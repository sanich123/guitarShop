import { useDispatch } from 'react-redux';
import { amountQuantity } from '../../../redux/cart-slice';
import { Cart } from '../../../types/types';
import { localStorageChanger, typeChanger } from '../../../utils/utils';

interface CartItemProps {
  previewImg: string,
  name: string,
  price: number,
  stringCount: number,
  type: string,
  vendorCode: string,
  id: number,
  setActionModal: (arg: boolean) => void,
  setDeleteId: (arg: string) => void,
  inCart: Cart[]
}

export function CartItem({previewImg, name, price, stringCount, type, vendorCode, id, setActionModal, setDeleteId, inCart}: CartItemProps) {
  const dispatch = useDispatch();
  const [{ quantity }] = inCart.filter((cart) => cart.id === id);
  const totalPrice = price * +quantity;

  return (
    <div className="cart-item">
      <button
        className="cart-item__close-button button-cross" type="button"
        aria-label="Удалить"
        onClick={() => {
          setActionModal(true);
          setDeleteId(id.toString());
        }}
      >
        <span className="button-cross__icon"/>
        <span className="cart-item__close-button-interactive-area"/>
      </button>
      <div className="cart-item__image">
        <img src={previewImg} width="55" height="130" alt={name}/>
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{name}</p>
        <p className="product-info__info">Артикул: {vendorCode}</p>
        <p className="product-info__info">{typeChanger(type)}, {stringCount} струнная</p>
      </div>
      <div className="cart-item__price">{price} ₽</div>
      <div className="quantity cart-item__quantity">
        <button
          className="quantity__button"
          aria-label="Уменьшить количество"
          onClick={() => {
            if (+quantity > 1) {
              const value = +quantity - 1;
              localStorageChanger(value, id);
              dispatch(amountQuantity(({id, value})));
            }}}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-minus"/>
          </svg>
        </button>
        <input
          className="quantity__input"
          type="number"
          id="2-count"
          name="2-count"
          max="99"
          value={quantity.toString()[0] === '0' ? quantity.toString().slice(1) : quantity.toString()}
          onBlur={() => {
            if (!quantity) {
              localStorageChanger(1, id);
              dispatch(amountQuantity(({id, value: 1})));
            }}}
          onChange={({target}) => {
            if (+target.value < 100) {
              const value = +target.value;
              localStorageChanger(value, id);
              dispatch(amountQuantity({id, value}));
            }}}
        />
        <button
          className="quantity__button"
          aria-label="Увеличить количество"
          onClick={() => {
            if (+quantity < 100) {
              const value = quantity + 1;
              localStorageChanger(value, id);
              dispatch(amountQuantity(({id, value})));
            }}}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-plus"/>
          </svg>
        </button>
      </div>
      <div
        className="cart-item__price-total"
      >
        {totalPrice}
      </div>
    </div>
  );
}