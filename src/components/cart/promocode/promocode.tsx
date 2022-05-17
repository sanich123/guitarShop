import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAddCouponMutation } from '../../../redux/guitars-api';
import { addDiscount } from '../../../redux/discount-slice';
import { errors, warnings } from '../../../utils/const';
import { getNormalizedError } from '../../../utils/utils';
import { toast } from 'react-toastify';

export function Promocode() {
  const [coupon, setCoupon] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [addCoupon, { error, data: response }] = useAddCouponMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (response) {
      dispatch(addDiscount(response));
      setShowInfo(true);
    }
    if (error) {
      if (getNormalizedError(error).status === errors.fetchError) {
        toast.error(warnings.failedSendingPromocode);
      } else {
        toast.warn(getNormalizedError(error).data.messages.join(''));
        dispatch(addDiscount(0));
        setShowInfo(true);
      }
    }
    if (!coupon) {
      setShowInfo(false);
    }
  }, [error, response, coupon, dispatch]);

  return (
    <div className="cart__coupon coupon">
      <h2 className="title title--little coupon__title">Промокод на скидку</h2>
      <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
      <form
        className="coupon__form"
        id="coupon-form"
        method="post"
        action="/"
        onSubmit={
          async (e) => {
            e.preventDefault();
            await addCoupon({coupon}).unwrap();
          }
        }
      >
        <div className="form-input coupon__input">
          <label className="visually-hidden">Промокод</label>
          <input
            type="text"
            placeholder="Введите промокод"
            id="coupon"
            name="coupon"
            value={coupon}
            onChange={({target}) => setCoupon(target.value)}
          />

          {showInfo && <p className={`form-input__message form-input__message--${error ? 'error' : 'success'}`}>Промокод { error && 'не'} принят</p>}
        </div>
        <button className="button button--big coupon__button">Применить</button>
      </form>
    </div>
  );
}
