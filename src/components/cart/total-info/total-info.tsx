import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useGetGuitarsQuery, useAddOrderMutation } from '../../../redux/guitars-api';
import { toast } from 'react-toastify';
import { Loader } from '../..';
import { State, Guitar, Cart } from '../../../types/types';
import { errorHandler, getCouponValueFromPercents, getNormalizedError, getSynchronizedWithServerPrice } from '../../../utils/utils';
import { warnings } from '../../../utils/const';

export function TotalInfo({inCart}: {inCart: Cart[]}) {
  const discountValue = useSelector(({discount}: State) => discount.discount);
  const forRequest = inCart.map(({ id }) => id);
  const request = forRequest?.map((number) => `id=${number}`).join('&');
  const { data: guitars, isLoading, error } = useGetGuitarsQuery(`?${request}`);
  const [postOrder, {error: orderError, data: response}] = useAddOrderMutation();
  const syncGuitarsWithCart = guitars?.filter((guitar: Guitar) =>
    forRequest.includes(guitar.id));

  const price = getSynchronizedWithServerPrice(syncGuitarsWithCart, inCart);
  const discountPrice =  price * Number(`0.${discountValue}`);
  const totalPrice = price - discountPrice;

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await postOrder({
      guitarsIds: forRequest,
      coupon: getCouponValueFromPercents(discountValue),
    }).unwrap();
  };

  useEffect(() => {
    if (response) {
      toast.success(warnings.successOrder);
    }
    if (orderError) {
      toast.error(getNormalizedError(orderError).error);
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
          <p className="cart__total-item">
            <span className="cart__total-value-name">Скидка:</span>
            <span className={`cart__total-value ${discountPrice ? 'cart__total-value--bonus' : ''}`}>
              {`${discountPrice > 0 ? '-' : ''} ${discountPrice}`} ₽
            </span>
          </p>

          <p className="cart__total-item">
            <span className="cart__total-value-name">К оплате:</span>
            <span className="cart__total-value cart__total-value--payment">
              {totalPrice} ₽
            </span>
          </p>
          <button
            className="button button--red button--big cart__order-button"
            onClick={handleClick}
          >
            Оформить заказ
          </button>
        </div>
      )}
    </>
  );
}
