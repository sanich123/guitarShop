import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../../utils/const';

export default function ContinueBtn() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(appRoutes.main)}
      className="button button--small modal__button modal__button--review"
    >
      К покупкам!
    </button>
  );
}
