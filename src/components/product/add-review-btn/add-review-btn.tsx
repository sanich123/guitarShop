import cn from 'classnames';
import { memo } from 'react';
import { FiltersProps } from '../../../types/types';

interface AddReviewBtnProps extends Pick<FiltersProps, 'isError'>{
  setReview: (arg: boolean) => void,
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
