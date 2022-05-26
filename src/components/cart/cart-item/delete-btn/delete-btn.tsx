interface DeleteBtnProps {
  setActionModal: (arg: boolean) => void,
  setDeleteId: (arg: string) => void,
  id: number,
}

export default function DeleteBtn({setActionModal, setDeleteId, id}: DeleteBtnProps) {

  return (
    <button
      className="cart-item__close-button button-cross"
      type="button"
      aria-label="Удалить"
      onClick={() => {
        setActionModal(true);
        setDeleteId(`${id}`);
      }}
      tabIndex={0}
    >
      <span className="button-cross__icon" />
      <span className="cart-item__close-button-interactive-area" />
    </button>
  );
}
