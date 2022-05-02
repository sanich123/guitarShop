import cn from 'classnames';
import { memo } from 'react';

interface AddReviewBtnProps {
  setReview: (arg: boolean) => void,
  isError: boolean
}

const btnClass = cn(
  'button',
  'button--red-border',
  'button--big',
  'reviews__submit-button',
);

function AddReviewBtn({setReview, isError}: AddReviewBtnProps) {

  return (
    <button
      onClick={() => setReview(true)}
      className={btnClass}
      disabled={isError}
    >
      Оставить отзыв
    </button>
  );
}

export default memo(AddReviewBtn);
