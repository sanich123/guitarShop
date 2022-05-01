import { memo } from 'react';

function SendReviewBtn() {
  return (
    <button
      className="button button--medium-20 form-review__button"
      type="submit"
    >
      Отправить отзыв
    </button>
  );
}

export default memo(SendReviewBtn);
