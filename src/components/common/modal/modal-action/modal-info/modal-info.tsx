import { Guitar } from '../../../../../types/types';
import { getNormalizedImg } from '../../../../../utils/utils';

export function ModalInfo({previewImg, name, vendorCode, stringCount, price}: Omit<Guitar, 'id' | 'type' | 'description' | 'rating' | 'comments'>) {

  return (
    <div className="modal__info">
      <img className="modal__img" src={getNormalizedImg(previewImg)} width="67" height="137" alt={name} />
      <div className="modal__info-wrapper">
        <h3 className="modal__product-name title title--little title--uppercase">{name}</h3>
        <p className="modal__product-params modal__product-params--margin-11">Артикул: {vendorCode}</p>
        <p className="modal__product-params">Электрогитара, {stringCount} струнная</p>
        <p className="modal__price-wrapper">
          <span className="modal__price">Цена:</span>
          <span className="modal__price">{price} ₽</span>
        </p>
      </div>
    </div>);
}
