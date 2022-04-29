import { useSelector } from 'react-redux';
import { Loader } from '../..';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { State, Guitar } from '../../../types/types';
import { errorHandler, valueChecker } from '../../../utils/utils';

export function TotalInfo({inCart}: {inCart: State['cart']}) {
  const discountValue = useSelector(({discount}: State) => discount.discount);

  const forRequest = [...new Set(inCart.map(({ id }) => id))];
  const request = forRequest?.map((number) => `id=${number}`).join('&');
  const { data: guitars, isLoading, error } = useGetGuitarsQuery(`?${request}`);
  const syncGuitarsWithCart = guitars?.filter((guitar: Guitar) =>
    forRequest.includes(guitar.id));
  console.log(discountValue, typeof discountValue);
  const price = valueChecker(syncGuitarsWithCart, inCart);
  const discountPrice =  price * Number(`0.${discountValue}`);
  const totalPrice = price - discountPrice;

  return (
    <>
      {isLoading && <Loader />}

      {error && errorHandler(error)}

      {syncGuitarsWithCart && (
        <div className="cart__total-info">
          <p className="cart__total-item">
            <span className="cart__total-value-name">Всего:</span>
            <span className="cart__total-value">{price} ₽</span>
          </p>
          {discountValue !== 0 && (
            <p className="cart__total-item">
              <span className="cart__total-value-name">Скидка:</span>
              <span className="cart__total-value cart__total-value--bonus">
                - {discountPrice} ₽
              </span>
            </p>
          )}

          <p className="cart__total-item">
            <span className="cart__total-value-name">К оплате:</span>
            <span className="cart__total-value cart__total-value--payment">
              {totalPrice} ₽
            </span>
          </p>
          <button className="button button--red button--big cart__order-button">
            Оформить заказ
          </button>
        </div>
      )}
    </>
  );
}
