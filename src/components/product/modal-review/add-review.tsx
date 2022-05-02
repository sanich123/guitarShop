import {FocusOn} from 'react-focus-on';
import CloseReviewBtn from './close-review-btn';
import ReviewForm from './review-form';

interface AddReviewProps {
  setReview: (arg: boolean) => void,
  setIsSended: (arg: boolean) => void,
  name: string,
  id: number,
}

export function AddReview({setIsSended, setReview, name, id}: AddReviewProps) {

  return (
    <div className="modal is-active modal--review modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal/>
        <FocusOn
          onEscapeKey={() => setReview(false)}
          onClickOutside={() => setReview(false)}
        >
          <div className="modal__content">
            <h2 className="modal__header modal__header--review title title--medium">
              Оставить отзыв
            </h2>
            <h3 className="modal__product-name title title--medium-20 title--uppercase">
              {name}
            </h3>
            <ReviewForm setReview={setReview} setIsSended={setIsSended} id={id}/>
            <CloseReviewBtn setReview={setReview}/>
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
