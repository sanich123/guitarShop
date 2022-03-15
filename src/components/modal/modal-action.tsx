import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart, deleteFromCart } from '../../redux/cart-slice';
import { Guitar } from '../../types/types';
import { appRoutes } from '../../utils/const';
import ModalInfo from './modal-info';

interface ModalActionProps {
  guitars: Guitar[];
  setActionModal: (arg: boolean) => void;
  setIsAdded?: (arg: boolean) => void;
  deleteId?: string,
  id?: number
}

export default function ModalAction({guitars, setIsAdded, setActionModal, deleteId, id}: ModalActionProps) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const onEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setActionModal(false);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  });

  const [{ previewImg, name, stringCount, vendorCode, price }] =
        guitars.filter((guitar) => deleteId ? guitar.id === +deleteId : guitar.id === id);

  return (
    <div
      style={{
        position: 'relative',
        width: 550,
        height: 440,
        marginBottom: 50,
      }}
    >
      <div className="modal is-active modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal />
          <div className="modal__content">
            <h2
              className={`modal__header title title--medium ${
                deleteId ? 'title--red' : ''
              }`}
            >
              {deleteId ? 'Удалить этот товар?' : 'Добавить товар в корзину'}
            </h2>

            <ModalInfo
              previewImg={previewImg}
              name={name}
              vendorCode={vendorCode}
              stringCount={stringCount}
              price={price}
            />

            <div className="modal__button-container">
              {deleteId && (
                <>
                  <button
                    className="button button--small modal__button"
                    onClick={() => {
                      const uniq = deleteId;
                      dispatch(deleteFromCart({ uniq }));
                      setActionModal(false);
                    }}
                  >
                    Удалить товар
                  </button>
                  <button
                    className="button button--black-border button--small modal__button modal__button--right"
                    onClick={() => history.push(appRoutes.main)}
                  >
                    Продолжить покупки
                  </button>
                </>
              )}
              {setIsAdded && (
                <button
                  className="button button--red button--big modal__button modal__button--add"
                  onClick={() => {
                    dispatch(addToCart({ id, price }));
                    setActionModal(false);
                    setIsAdded(true);
                  }}
                >
                  Добавить в корзину
                </button>
              )}
            </div>
            <button
              className="modal__close-btn button-cross"
              type="button"
              aria-label="Закрыть"
              onClick={() => setActionModal(false)}
            >
              <span className="button-cross__icon" />
              <span className="modal__close-btn-interactive-area" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
