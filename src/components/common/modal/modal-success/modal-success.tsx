import CartContinueBtn from './cart-continue-btn';
import CloseBtnReview from './close-btn-review';
import CloseBtnCart from './close-btn-cart';
import ContinueBtn from './continue-btn';
import { FocusOn } from 'react-focus-on';
import cn from 'classnames';
import { ModalProps } from '../../../../types/types';
import { warnings } from '../../../../utils/const';

export function ModalSuccess({ setIsSended, setIsAdded, place }: Pick<ModalProps, 'setIsAdded' | 'place' | 'setIsSended'>) {
  const modalMessage = setIsAdded ? warnings.successCart
    : warnings.thanksForReview;

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
              <svg
                className="modal__icon"
                width="26"
                height="20"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-success" />
              </svg>
              <p className="modal__message">{modalMessage}</p>
              <div className={activeClass}>
                <CartContinueBtn setIsAdded={setIsAdded} />
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
              <svg
                className="modal__icon"
                width="26"
                height="20"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-success" />
              </svg>
              <p className="modal__message">{modalMessage}</p>
              <div className={activeClass}>
                <ContinueBtn setIsSended={setIsSended} />
              </div>
              <CloseBtnReview setIsSended={setIsSended} />
            </div>
          </FocusOn>
        )}
      </div>
    </div>
  );
}
