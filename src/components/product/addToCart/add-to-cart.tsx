import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart-slice';
import { Guitar } from '../../../types/types';
import ModalInfo from '../../modal/modal-info';

export interface AddToCartProps {
  setAddToCart: (arg: boolean) => void,
  setIsAdded: (arg: boolean) => void,
  guitars: Guitar[],
  id: number
}

export default function AddToCart({setIsAdded, setAddToCart, id, guitars}: AddToCartProps) {
  const [{previewImg, name, stringCount, vendorCode, price}] = guitars.filter((guitar) => guitar.id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    const onEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setAddToCart(false);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  });

  return (
    <div style={{position: 'relative', width: 550, height: 440, marginBottom: 50}}>
      <div className="modal is-active modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header title title--medium">Добавить товар в корзину</h2>
            <ModalInfo previewImg={previewImg} name={name} vendorCode={vendorCode} stringCount={stringCount} price={price} />
            <div className="modal__button-container">
              <button onClick={() => {
                dispatch(addToCart({id, price}));
                setAddToCart(false);
                setIsAdded(true);}}
              className="button button--red button--big modal__button modal__button--add"
              >Добавить в корзину
              </button>
            </div>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть">
              <span className="button-cross__icon"/>
              <span className="modal__close-btn-interactive-area" onClick={() => setAddToCart(false)}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
