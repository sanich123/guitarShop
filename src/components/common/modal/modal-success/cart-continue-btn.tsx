import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../../utils/const';

interface CartContinueBtnProps {
  place?: string,
  setIsAdded: (arg: boolean) => void
}
export default function CartContinueBtn({place, setIsAdded}: CartContinueBtnProps) {
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
        onClick={
          place === 'main'
            ? () => setIsAdded(false)
            : () => navigate(appRoutes.main)
        }
        className="button button--black-border button--small modal__button modal__button--right"
      >
        Продолжить покупки
      </button>
    </>
  );
}
