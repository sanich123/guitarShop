import cn from 'classnames';

interface AddReviewBtnProps {
  setReview: (arg: boolean) => void
}

const btnClass = cn(
  'button',
  'button--red-border',
  'button--big',
  'reviews__submit-button',
);

export default function AddReviewBtn({setReview}: AddReviewBtnProps) {

  return (
    <button
      onClick={() => setReview(true)}
      className={btnClass}
    >
      Оставить отзыв
    </button>
  );
}
