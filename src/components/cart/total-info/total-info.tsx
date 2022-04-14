import { Loader } from '../..';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { Cart } from '../../../types/types';
import { errorHandler, valueChecker } from '../../../utils/utils';

const discount = 3000;

export function TotalInfo({inCart}: {inCart: Cart[]}) {
  const forRequest = [...new Set(inCart.map(({ id }) => id))];
  const request = forRequest?.map((number) => `id=${number}`).join('&');
  const { data: guitars, isLoading, error } = useGetGuitarsQuery(`?${request}`);

  return (
    <>
      {isLoading && <Loader/>}

      {error && errorHandler(error)}

      {guitars && inCart && (
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
