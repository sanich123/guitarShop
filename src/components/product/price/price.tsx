import { memo } from 'react';
import { FiltersProps, ModalProps } from '../../../types/types';

function Price({price, setActionModal, isError}:
  Pick<ModalProps, 'setActionModal' | 'price'> &
  Pick<FiltersProps, 'isError'>) {
  return (
    <div className="product-container__price-wrapper">
      <p className="product-container__price-info product-container__price-info--title">
        Цена:
      </p>
      <p className="product-container__price-info product-container__price-info--value">
        {price}
      </p>
      <button
        className="button button--red button--big product-container__button"
        onClick={() => setActionModal(true)}
        disabled={isError}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default memo(Price);
