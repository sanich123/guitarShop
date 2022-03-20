interface CloseBtnProps {
  setIsSended: (arg: boolean) => void
}

export default function CloseBtnReview({setIsSended}: CloseBtnProps) {

  return (
    <button
      className="modal__close-btn button-cross"
      type="button"
      aria-label="Закрыть"
      onClick={() => setIsSended(false)}
      tabIndex={0}
    >
      <span className="button-cross__icon" />
      <span className="modal__close-btn-interactive-area" />
    </button>
  );
}
