import { Link } from 'react-router-dom';
import {appRoutes} from '../../../utils/const';

export default function Breadcrumbs({place}: {place?: string}) {
  const properRoute = place === appRoutes.product ? appRoutes.product : appRoutes.cart;
  const properName = place === appRoutes.product ? 'Товар' : 'Корзина';
  const cartModificator = place === appRoutes.cart ? 'page-content__breadcrumbs--on-cart-page' : '';

  return (
    <ul className={`breadcrumbs page-content__breadcrumbs ${cartModificator}`}>
      <li className="breadcrumbs__item">
        <Link className="link" to={appRoutes.main}>Главная</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link className="link" to={appRoutes.main}>Каталог</Link>
      </li>
      {place &&
      <li className="breadcrumbs__item">
        <Link className="link" to={properRoute}>{properName}</Link>
      </li>}
    </ul>
  );
}
