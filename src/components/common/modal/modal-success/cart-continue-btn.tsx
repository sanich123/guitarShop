import { useHistory } from 'react-router-dom';
import { appRoutes } from '../../../../utils/const';

interface CartContinueBtnProps {
  place?: string,
  setIsAdded: (arg: boolean) => void
}
export default function CartContinueBtn({place, setIsAdded}: CartContinueBtnProps) {
  const history = useHistory();

  return (
    <>
      <button
        onClick={() => history.push(appRoutes.cart)}
        className="button button--small modal__button"
      >
        Перейти в корзину
      </button>
      <button
        onClick={
          place === 'main'
            ? () => setIsAdded(false)
            : () => history.push(appRoutes.main)
        }
        className="button button--black-border button--small modal__button modal__button--right"
      >
        Продолжить покупки
      </button>
    </>
  );
}
