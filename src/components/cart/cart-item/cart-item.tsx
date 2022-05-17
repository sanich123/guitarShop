import {Cart} from '../../../types/types';
import {getTypeInRus} from '../../../utils/utils';
import DecrementBtn from './decrement-btn';
import DeleteBtn from './delete-btn';
import IncrementBtn from './increment-btn';
import InputQuantity from './input-quantity';
import {Guitar} from '../../../types/types';

export interface CartItemProps extends Guitar {
  setActionModal: (arg: boolean) => void,
  setDeleteId: (arg: string) => void,
  inCart: Cart[]
}

export function CartItem({previewImg, name, price, stringCount, type, vendorCode, id, setActionModal, setDeleteId, inCart}: CartItemProps) {
  const [{ quantity }] = inCart.filter((cart) => cart.id === id);
  const totalPrice = price * Number(quantity);

  return (
    <div className="cart-item">
      <DeleteBtn
        setActionModal={setActionModal}
        setDeleteId={setDeleteId}
        id={id}
      />
      <div className="cart-item__image">
        <img src={previewImg} width="55" height="130" alt={name}/>
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{name}</p>
        <p className="product-info__info">Артикул: {vendorCode}</p>
        <p className="product-info__info">{getTypeInRus(type)}, {stringCount} струнная</p>
      </div>
      <div className="cart-item__price">{price} ₽</div>
      <div className="quantity cart-item__quantity">
        <DecrementBtn id={id} />
        <InputQuantity id={id} />
        <IncrementBtn id={id} />
      </div>
      <div className="cart-item__price-total">
        {totalPrice}
      </div>
    </div>
  );
}
