import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { appRoutes } from '../../../utils/const';
interface SuccessCartProps {
  setIsAdded: (arg: boolean) => void
}
export default function SuccessCart({setIsAdded}: SuccessCartProps) {
  const history = useHistory();
  useEffect(() => {
    const onEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setIsAdded(false);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  });

  return (
    <div className="modal is-active modal--success modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal=""></div>
        <div className="modal__content">
          <svg className="modal__icon" width="26" height="20" aria-hidden="true">
            <use xlinkHref="#icon-success"/>
          </svg>
          <p className="modal__message">Товар успешно добавлен в корзину</p>
          <div className="modal__button-container modal__button-container--add">
            <button
              onClick={() => history.push(appRoutes.cart)} className="button button--small modal__button"
            >Перейти в корзину
            </button>
            <button
              onClick={() => history.push(appRoutes.main)} className="button button--black-border button--small modal__button modal__button--right"
            >Продолжить покупки
            </button>
          </div>
          <button
            className="modal__close-btn button-cross"
            type="button"
            aria-label="Закрыть"
            onClick={() => setIsAdded(false)}
          >
            <span className="button-cross__icon"/>
            <span className="modal__close-btn-interactive-area"/>
          </button>
        </div>
      </div>
    </div>
  );
}
