import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../../utils/const';

interface CartContinueBtnProps {
  setIsAdded: (arg: boolean) => void
}

export default function CartContinueBtn({setIsAdded}: CartContinueBtnProps) {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(appRoutes.cart)}
        className="button button--small modal__button"
      >
        Перейти в корзину
      </button>
      <button
        onClick={() => setIsAdded(false)}
        className="button button--black-border button--small modal__button modal__button--right"
      >
        Продолжить покупки
      </button>
    </>
  );
}
