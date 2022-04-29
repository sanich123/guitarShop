import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAddCouponMutation } from '../../../redux';
import { normalizedError } from '../../../utils/utils';

export function Promocode({setDiscount}: {setDiscount: (arg: string) => void}) {
  const [coupon, setCoupon] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [addCoupon, { isError, error, data: response }] = useAddCouponMutation();

  useEffect(() => {
    if (response) {
      setDiscount(response);
      setShowInfo(true);
    }
    if (error) {
      toast.warn(normalizedError(error).data.messages.join(''));
      setShowInfo(true);
    }
  }, [error, response, setDiscount]);

  return (
    <div className="cart__coupon coupon">
      <h2 className="title title--little coupon__title">Промокод на скидку</h2>
      <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
      <form
        className="coupon__form"
        id="coupon-form"
        method="post"
        action="/"
        onSubmit={async (e) => {
          e.preventDefault();
          await addCoupon({coupon}).unwrap();
        }}
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

          {showInfo && <p className={`form-input__message form-input__message--${isError ? 'error' : 'success'}`}>Промокод { error && 'не'} принят</p>}
        </div>
        <button className="button button--big coupon__button">Применить</button>
      </form>
    </div>
  );
}
