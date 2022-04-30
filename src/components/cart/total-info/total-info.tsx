import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Loader } from '../..';
import { useGetGuitarsQuery, useAddOrderMutation } from '../../../redux/guitars-api';
import { State, Guitar } from '../../../types/types';
import { errorHandler, normalizedError, percentToCouponChanger, priceChecker } from '../../../utils/utils';

export function TotalInfo({inCart}: {inCart: State['cart']}) {
  const discountValue = useSelector(({discount}: State) => discount.discount);

  const forRequest = [...new Set(inCart.map(({ id }) => id))];
  const request = forRequest?.map((number) => `id=${number}`).join('&');
  const { data: guitars, isLoading, error } = useGetGuitarsQuery(`?${request}`);
  const [postOrder, {error: orderError, data: response}] = useAddOrderMutation();
  const syncGuitarsWithCart = guitars?.filter((guitar: Guitar) =>
    forRequest.includes(guitar.id));

  const price = priceChecker(syncGuitarsWithCart, inCart);
  const discountPrice =  price * Number(`0.${discountValue}`);
  const totalPrice = price - discountPrice;

  useEffect(() => {
    if (response) {
      toast.success('Вы успешно сделали заказ! Большое Вам спасибо!');
    }
    if (orderError) {
      toast.error(normalizedError(orderError).error);
    }
  }, [response, orderError]);

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
          <button
            className="button button--red button--big cart__order-button"
            onClick={
              async (e) => {
                e.preventDefault();
                await postOrder({
                  guitarsIds: forRequest,
                  coupon: percentToCouponChanger(discountValue),
                }).unwrap();
              }
            }
          >
            Оформить заказ
          </button>
        </div>
      )}
    </>
  );
}
