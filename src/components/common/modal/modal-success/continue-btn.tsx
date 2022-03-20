import { useHistory } from 'react-router-dom';
import { appRoutes } from '../../../../utils/const';

export default function ContinueBtn() {
  const history = useHistory();

  return (
    <button
      onClick={() => history.push(appRoutes.main)}
      className="button button--small modal__button modal__button--review"
    >
      К покупкам!
    </button>
  );
}
