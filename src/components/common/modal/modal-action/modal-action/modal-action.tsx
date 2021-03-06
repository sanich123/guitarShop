import { ModalProps } from '../../../../../types/types';
import cn from 'classnames';
import DeleteContinueBtns from '../delete-continue-btn/delete-continue-btns';
import AddToCartBtn from '../add-to-cart-btn/add-to-cart-btn';
import CloseBtn from '../close-btn/close-btn';
import { FocusOn } from 'react-focus-on';
import { ModalInfo } from '../modal-info/modal-info';
import { warnings } from '../../../../../utils/const';

export function ModalAction({guitars, setIsAdded, setActionModal, deleteId, id}: Omit<ModalProps, 'price' | 'setReview'>) {
  const activeClass = cn('title', 'title--medium', 'modal__header', {
    'title--red': deleteId,
  });
  const [{ previewImg, name, stringCount, vendorCode, price }] = guitars.filter((guitar) => deleteId ? guitar.id === +deleteId : guitar.id === id);

  return (
    <div className="modal is-active modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal />
        <FocusOn
          onClickOutside={() => setActionModal(false)}
          onEscapeKey={() => setActionModal(false)}
        >
          <div className="modal__content">
            <h2 className={activeClass}>
              {deleteId ? warnings.deleteProduct : warnings.addProduct}
            </h2>
            <ModalInfo
              previewImg={previewImg}
              name={name}
              vendorCode={vendorCode}
              stringCount={stringCount}
              price={price}
            />
            <div className="modal__button-container">
              {deleteId && (
                <DeleteContinueBtns
                  setActionModal={setActionModal}
                  deleteId={deleteId}
                />)}
              {setIsAdded && (
                <AddToCartBtn
                  price={price}
                  id={id}
                  setIsAdded={setIsAdded}
                  setActionModal={setActionModal}
                />)}
            </div>
            <CloseBtn setActionModal={setActionModal} />
          </div>
        </FocusOn>
      </div>
    </div>);
}
