import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteFromCart } from '../../../redux/cart-slice';
import { Guitar } from '../../../types/types';
import { appRoutes } from '../../../utils/const';
import ModalInfo from '../../modal/modal-info';
interface DeleteModalProps {
  guitars: Guitar[],
  deleteId: string,
  setIsDelete: (arg: boolean) => void
}

export default function DeleteModal({guitars, deleteId, setIsDelete}: DeleteModalProps) {

  useEffect(() => {
    const onEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setIsDelete(false);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  });

  const history = useHistory();
  const dispatch = useDispatch();

  if (deleteId !== '') {
    const [{previewImg, name, vendorCode, stringCount, price}] = guitars.filter((guitar: Guitar) => guitar.id === +deleteId);

    return (
      <div style={{position: 'relative', width: 550, height: 440, marginBottom: 50}}>
        <div className="modal is-active modal-for-ui-kit">
          <div className="modal__wrapper">
            <div className="modal__overlay" data-close-modal=""/>
            <div className="modal__content">
              <h2 className="modal__header title title--medium title--red">Удалить этот товар?</h2>
              <ModalInfo previewImg={previewImg} name={name} vendorCode={vendorCode} stringCount={stringCount} price={price} />
              <div className="modal__button-container">
                <button
                  className="button button--small modal__button"
                  onClick={() => {
                    const id = deleteId;
                    dispatch(deleteFromCart({id}));
                    setIsDelete(false);
                  }}
                >Удалить товар
                </button>
                <button className="button button--black-border button--small modal__button modal__button--right" onClick={() => history.push(appRoutes.main)}>Продолжить покупки</button>
              </div>
              <button
                className="modal__close-btn button-cross" type="button"
                aria-label="Закрыть"
                onClick={() => setIsDelete(false)}
              >
                <span className="button-cross__icon"/>
                <span className="modal__close-btn-interactive-area"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
