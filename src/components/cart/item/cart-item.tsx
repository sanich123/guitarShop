import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../../redux/cart-slice';
import { typeChanger } from '../../../utils/utils';

interface CartItemProps {
  previewImg: string,
  name: string,
  price: number,
  stringCount: number,
  type: string,
  vendorCode: string,
  id: number,
}

export default function CartItem({previewImg, name, price, stringCount, type, vendorCode, id}: CartItemProps) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const totalPrice = price * (amount || 1);

  return (
    <div className="cart-item">
      <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить">
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
            if (amount > 1) {
              setAmount(amount-1);
              dispatch(decrementQuantity(({id})));
            }}}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-minus"/>
          </svg>
        </button>
        <input
          className="quantity__input"
          type="number"
          placeholder="1"
          id="2-count"
          name="2-count"
          max="99"
          value={amount === 0 ? '' : amount}
          onChange={({target}) => +target.value < 100 && setAmount(+target.value)}
        />
        <button
          className="quantity__button"
          aria-label="Увеличить количество"
          onClick={() => {
            if (amount < 100) {
              setAmount(amount+1);
              dispatch(incrementQuantity(({id})));
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
