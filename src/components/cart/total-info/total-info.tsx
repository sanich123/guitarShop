import { Loader } from '../..';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { Cart, Guitar } from '../../../types/types';
import { errorHandler, valueChecker } from '../../../utils/utils';

interface TotalInfoProps {
  inCart: Cart[],
  discount?: string,
}

export function TotalInfo({inCart, discount}: TotalInfoProps) {
  const forRequest = [...new Set(inCart.map(({ id }) => id))];
  const request = forRequest?.map((number) => `id=${number}`).join('&');
  const { data: guitars, isLoading, error } = useGetGuitarsQuery(`?${request}`);
  const syncGuitarsWithCart = guitars?.filter((guitar: Guitar) =>
    forRequest.includes(guitar.id));

  // const price = valueChecker(syncGuitarsWithCart, inCart) || 0;
  // const discountPrice = discount ? price * Number(`0.${discount}`) : 0;
  // const totalPrice = price - discountPrice;

  return (
    <>
      {isLoading && <Loader />}

      {error && errorHandler(error)}

      {syncGuitarsWithCart && (
        <div className="cart__total-info">
          <p className="cart__total-item">
            <span className="cart__total-value-name">Всего:</span>
            <span className="cart__total-value">
              {valueChecker(syncGuitarsWithCart, inCart)} ₽
            </span>
          </p>
          <p className="cart__total-item">
            <span className="cart__total-value-name">Скидка:</span>
            <span className="cart__total-value cart__total-value--bonus">
              -{' '}
              {discount
                ? valueChecker(syncGuitarsWithCart, inCart) *
                  Number(`0.${discount}`)
                : 0}{' '}
              ₽
            </span>
          </p>
          <p className="cart__total-item">
            <span className="cart__total-value-name">К оплате:</span>
            <span className="cart__total-value cart__total-value--payment">
              {valueChecker(syncGuitarsWithCart, inCart) -
                valueChecker(syncGuitarsWithCart, inCart) *
                  Number(`0.${discount}`)}{' '}
              ₽
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
