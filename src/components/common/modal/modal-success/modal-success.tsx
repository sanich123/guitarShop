import CartContinueBtn from './cart-continue-btn';
import CloseBtnReview from './close-btn';
import CloseBtnCart from './close-btn-cart';
import ContinueBtn from './continue-btn';
import SvgModal from './svg';
import { FocusOn } from 'react-focus-on';
import cn from 'classnames';

interface SuccessCartProps {
  setIsAdded?: (arg: boolean) => void;
  place?: string;
  setIsSended?: (arg: boolean) => void;
}

export function ModalSuccess({ setIsSended, setIsAdded, place }: SuccessCartProps) {
  const modalMessage = setIsAdded
    ? 'Товар успешно добавлен в корзину'
    : 'Спасибо за ваш отзыв!';

  const activeClass = cn('modal__button-container', {'modal__button-container--add': setIsAdded},
    {'modal__button-container--review' : setIsSended});

  return (
    <div className="modal is-active modal--success modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal />

        {setIsAdded && (
          <FocusOn
            onClickOutside={() => setIsAdded(false)}
            onEscapeKey={() => setIsAdded(false)}
          >
            <div className="modal__content">
              <SvgModal />
              <p className="modal__message">{modalMessage}</p>
              <div className={activeClass}>
                <CartContinueBtn place={place} setIsAdded={setIsAdded} />
              </div>
              <CloseBtnCart setIsAdded={setIsAdded} />
            </div>
          </FocusOn>
        )}

        {setIsSended && (
          <FocusOn
            onClickOutside={() => setIsSended(false)}
            onEscapeKey={() => setIsSended(false)}
          >
            <div className="modal__content">
              <SvgModal />
              <p className="modal__message">{modalMessage}</p>
              <div className={activeClass}>
                <ContinueBtn />
              </div>
              <CloseBtnReview setIsSended={setIsSended} />
            </div>
          </FocusOn>
        )}
      </div>
    </div>
  );
}
