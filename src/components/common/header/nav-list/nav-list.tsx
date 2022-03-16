import { Link } from 'react-router-dom';
import { appRoutes } from '../../../../utils/const';

export default function NavList() {

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <Link className="link main-nav__link" to={appRoutes.main}>Каталог</Link>
        </li>
        <li>
          <a className="link main-nav__link" href="/">Где купить?</a>
        </li>
        <li>
          <a className="link main-nav__link" href="/">О компании</a>
        </li>
      </ul>
    </nav>
  );
}
