import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFromCart } from '../../../../redux/cart-slice';
import { Cart } from '../../../../types/types';
import { appRoutes } from '../../../../utils/const';

interface DeleteContinueBtnsProps {
  deleteId: string,
  setActionModal: (arg: boolean) => void
}

export default function DeleteContinueBtns({deleteId, setActionModal}: DeleteContinueBtnsProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <button
        className="button button--small modal__button"
        onClick={() => {
          const uniq = deleteId;
          dispatch(deleteFromCart({ uniq }));
          setActionModal(false);

          localStorage.setItem('cart', JSON.stringify(JSON.parse(localStorage.cart)?.filter(({ id }: Cart) => `${id}` !== uniq)));
        }}
      >
        Удалить товар
      </button>
      <button
        className="button button--black-border button--small modal__button modal__button--right"
        onClick={() => navigate(appRoutes.main)}
      >
        Продолжить покупки
      </button>
    </>
  );
}
