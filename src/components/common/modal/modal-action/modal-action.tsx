import { Guitar } from '../../../../types/types';
import ModalInfo from './modal-info';
import cn from 'classnames';
import DeleteContinueBtns from './delete-continue-btns';
import AddToCartBtn from './add-to-cart-btn';
import CloseBtn from './close-btn';
import { FocusOn } from 'react-focus-on';

interface ModalActionProps {
  guitars: Guitar[];
  setActionModal: (arg: boolean) => void;
  setIsAdded?: (arg: boolean) => void;
  deleteId?: string,
  id?: number
}

export default function ModalAction({guitars, setIsAdded, setActionModal, deleteId, id}: ModalActionProps) {
  const activeClass = cn('title', 'title--medium', 'modal__header', {
    'title--red': deleteId,
  });

  const [{ previewImg, name, stringCount, vendorCode, price }] =
        guitars.filter((guitar) => deleteId ? guitar.id === +deleteId : guitar.id === id);

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
              {deleteId ? 'Удалить этот товар?' : 'Добавить товар в корзину'}
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
                />
              )}

              {setIsAdded && (
                <AddToCartBtn
                  price={price}
                  id={id}
                  setIsAdded={setIsAdded}
                  setActionModal={setActionModal}
                />
              )}
            </div>

            <CloseBtn setActionModal={setActionModal} />
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
