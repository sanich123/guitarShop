interface CloseBtnProps {
  setActionModal: (arg: boolean) => void
}

export default function CloseBtn({setActionModal}: CloseBtnProps) {

  return (
    <button
      className="modal__close-btn button-cross"
      type="button"
      aria-label="Закрыть"
      onClick={() => setActionModal(false)}
      tabIndex={0}
    >
      <span className="button-cross__icon" />
      <span className="modal__close-btn-interactive-area" />
    </button>);
}
