import { Link } from 'react-router-dom';
import {appRoutes} from '../../utils/const';

export default function Breadcrumbs() {
  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      <li className="breadcrumbs__item">
        <Link className="link" to={appRoutes.main}>Главная</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link className="link" to={appRoutes.main}>Каталог</Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="link" href="/">Товар</a>
      </li>
    </ul>
  );
}
