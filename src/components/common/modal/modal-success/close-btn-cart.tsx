interface CloseBtnCartProps {
  setIsAdded: (arg: boolean) => void
}

export default function CloseBtnCart({setIsAdded}: CloseBtnCartProps) {
  return (
    <button
      className="modal__close-btn button-cross"
      type="button"
      aria-label="Закрыть"
      onClick={() => setIsAdded(false)}
      tabIndex={0}
    >
      <span className="button-cross__icon" />
      <span className="modal__close-btn-interactive-area" />
    </button>
  );
}
