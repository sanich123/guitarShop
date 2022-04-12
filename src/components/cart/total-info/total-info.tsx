import { useSelector } from 'react-redux';
import { Loader } from '../..';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { CartType } from '../../../types/types';
import { errorHandler, valueChecker } from '../../../utils/utils';

const discount = 3000;

export function TotalInfo() {
  const inCart = useSelector(({ cart }: CartType) => cart);
  const forRequest = [...new Set(inCart.map(({ id }) => id))];

  const request = forRequest?.map((number) => `id=${number}`).join('&');

  const { data: guitars, isLoading, error } = useGetGuitarsQuery(`?${request}`);
  if (isLoading) {
    return <Loader/>;
  }
  return (
    <>
      {error && errorHandler(error)}

      {guitars && (
        <div className="cart__total-info">
          <p className="cart__total-item">
            <span className="cart__total-value-name">Всего:</span>
            <span className="cart__total-value">
              {valueChecker(guitars, inCart)} ₽
            </span>
          </p>
          <p className="cart__total-item">
            <span className="cart__total-value-name">Скидка:</span>
            <span className="cart__total-value cart__total-value--bonus">
              - {discount} ₽
            </span>
          </p>
          <p className="cart__total-item">
            <span className="cart__total-value-name">К оплате:</span>
            <span className="cart__total-value cart__total-value--payment">
              {valueChecker(guitars, inCart) - discount} ₽
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
