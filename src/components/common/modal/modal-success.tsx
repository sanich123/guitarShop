import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { appRoutes } from '../../../utils/const';

interface SuccessCartProps {
  setIsAdded?: (arg: boolean) => void;
  place?: string;
  setIsSended?: (arg: boolean) => void;
}

export default function ModalSuccess({ setIsSended, setIsAdded, place }: SuccessCartProps) {
  const history = useHistory();

  useEffect(() => {
    const onEsc = (evt: KeyboardEvent) => {
      if (setIsAdded && evt.key === 'Escape') {
        evt.preventDefault();
        setIsAdded(false);
      }

      if (setIsSended && evt.key === 'Escape') {
        evt.preventDefault();
        setIsSended(false);
      }

    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  });

  return (
    <div className="modal is-active modal--success modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal="" />
        <div className="modal__content">
          <svg
            className="modal__icon"
            width="26"
            height="20"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-success" />
          </svg>
          <p className="modal__message">
            {setIsAdded
              ? 'Товар успешно добавлен в корзину'
              : 'Спасибо за ваш отзыв!'}
          </p>
          <div
            className={`modal__button-container ${
              setIsAdded
                ? 'modal__button-container--add'
                : 'modal__button-container--review'
            }`}
          >
            {setIsAdded && (
              <>
                <button
                  onClick={() => history.push(appRoutes.cart)}
                  className="button button--small modal__button"
                >
                  Перейти в корзину
                </button>
                <button
                  onClick={
                    place === 'main'
                      ? () => setIsAdded(false)
                      : () => history.push(appRoutes.main)
                  }
                  className="button button--black-border button--small modal__button modal__button--right"
                >
                  Продолжить покупки
                </button>
              </>
            )}

            {setIsSended && (
              <button
                onClick={() => history.push(appRoutes.main)}
                className="button button--small modal__button modal__button--review"
              >
                К покупкам!
              </button>
            )}
          </div>

          {setIsAdded && (
            <button
              className="modal__close-btn button-cross"
              type="button"
              aria-label="Закрыть"
              onClick={() => setIsAdded(false)}
            >
              <span className="button-cross__icon" />
              <span className="modal__close-btn-interactive-area" />
            </button>
          )}

          {setIsSended && (
            <button
              className="modal__close-btn button-cross"
              type="button"
              aria-label="Закрыть"
              onClick={() => setIsSended(false)}
            >
              <span className="button-cross__icon" />
              <span className="modal__close-btn-interactive-area" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
