import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteFromCart } from '../../../redux/cart-slice';
import { appRoutes } from '../../../utils/const';

interface DeleteContinueBtnsProps {
  deleteId: string,
  setActionModal: (arg: boolean) => void
}

export default function DeleteContinueBtns({deleteId, setActionModal}: DeleteContinueBtnsProps) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <button
        className="button button--small modal__button"
        onClick={() => {
          const uniq = deleteId;
          dispatch(deleteFromCart({ uniq }));
          setActionModal(false);
        }}
      >
        Удалить товар
      </button>
      <button
        className="button button--black-border button--small modal__button modal__button--right"
        onClick={() => history.push(appRoutes.main)}
      >
        Продолжить покупки
      </button>
    </>
  );
}
