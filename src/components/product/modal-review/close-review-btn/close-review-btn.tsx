import { memo } from 'react';

function CloseReviewBtn({setReview}: {setReview: (arg: boolean) => void}) {

  return (
    <button
      className="modal__close-btn button-cross"
      onClick={() => setReview(false)}
      type="button"
      aria-label="Закрыть"
    >
      <span className="button-cross__icon" />
      <span className="modal__close-btn-interactive-area" />
    </button>
  );
}

export default memo(CloseReviewBtn);
